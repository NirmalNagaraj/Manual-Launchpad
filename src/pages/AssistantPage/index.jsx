
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

function AssistantPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col h-full p-4 pl-12 bg-accent">
        <div className="flex">
          <h1 className="flex-grow">AI ASSISTANT</h1>
        </div>

        <hr className="my-2 " />
        <ScrollArea className="h-[80vh] w-[90vw]">
          <div className="flex-grow flex flex-col h-full">
            <div className="bg-secondary text-white py-2 px-4 my-2 rounded-lg inline-block mr-auto">
              <p>Hello! How can I help you?</p>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-primary text-right text-white py-2 px-4 my-2 rounded-lg inline-block ml-auto"
              >
                <p>{message}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <hr className="my-2 " />
        <div className="flex gap-2">
          <Input value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </>
  );
}

export default AssistantPage;
