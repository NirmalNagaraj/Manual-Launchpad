import AssistantIcon from "../IconComponents/AssistantIcon";
import CloseIcon from "../IconComponents/CloseIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import ExpandIcon from "../IconComponents/ExpandIcon";
import { useNavigate } from "react-router-dom";

function AssistantFAB() {
  const [isPopup, setIsPopup] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const togglePopup = () => setIsPopup(!isPopup);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
    exit: { opacity: 0, scale: 0.95, y: 50, transition: { duration: 0.2 } },
  };
  return (
    <>
      <div className="fixed bottom-4 right-4 ">
        <Button
          onClick={togglePopup}
          className="bg-primary py-8 px-6 rounded-full hover:bg-primaryLight"
        >
          {isPopup ? <CloseIcon color="#ffffff" /> : <AssistantIcon />}
        </Button>
        <AnimatePresence>
          {isPopup && (
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute bottom-full mb-2 right-0 p-4 bg-white shadow-lg rounded-lg flex flex-col"
            >
              <div className="flex">
                <h1 className="flex-grow">AI ASSISTANT</h1>
                <Button onClick={() => {
                  navigate('/ai-assistant')
                }}>
                  <ExpandIcon />
                </Button>
              </div>

              <hr className="my-2 " />
              <ScrollArea className="h-80 w-80">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default AssistantFAB;
