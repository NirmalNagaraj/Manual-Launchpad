import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

function DiscussionBoard() {
  const [threads, setThreads] = useState(["Thread 1"]);
  const [activeThread, setActiveThread] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState({});

  const handleThreadClick = (thread) => {
    setActiveThread(thread);
    if (!messages[thread]) {
      setMessages({ ...messages, [thread]: [] });
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "" && activeThread) {
      const newMessages = {
        ...messages,
        [activeThread]: [...messages[activeThread], inputValue],
      };
      setMessages(newMessages);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="flex max-md:flex-col">
        <div className="flex-[2] flex flex-col bg-white ">
          <ScrollArea className="flex-grow flex flex-col md:h-[20rem]">
            {threads.map((thread, index) => (
              <Button
                key={index}
                className={`mb-2 w-full ${
                  activeThread === thread
                    ? "bg-secondary hover:bg-secondaryDark"
                    : "bg-primary hover:bg-primaryLight"
                }`}
                onClick={() => handleThreadClick(thread)}
              >
                {thread}
              </Button>
            ))}
          </ScrollArea>
          <Button
            onClick={() =>
              setThreads([...threads, `Thread ${threads.length + 1}`])
            }
            className="mt-auto"
          >
            Create a new thread
          </Button>
        </div>
        <div className="flex-[5] bg-white flex flex-col">
          <h1 className="mx-2 font-bold">{activeThread || "Please select a thread to view"}</h1>{" "}
          <hr className="mx-2 my-2" />
          <ScrollArea className="flex-grow md:h-[20rem] max-md:h-[70svh]">
            {activeThread && messages[activeThread] ? (
              messages[activeThread].map((message, index) => (
                <div
                  key={index}
                  className=" text-white flex justify-end "
                >
                  <p className="p-2 bg-primary rounded-md m-2">{message}</p>
                </div>
              ))
            ) : (
              <div className="p-2">No messages</div>
            )}
          </ScrollArea>
          <div className="flex gap-4 p-2">
            <Input
              value={inputValue}
              onChange={handleInputChange}
              className="flex-grow"
              placeholder="Type your message here "
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiscussionBoard;
