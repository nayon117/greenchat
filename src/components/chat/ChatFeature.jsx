import { useState, useRef, useEffect } from "react";
import { BsSend } from "react-icons/bs";

const ChatFeature = () => {

//  states
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const chatWindowRef = useRef(null);
  const VITE_APP_OPENROUTER_API = import.meta.env.VITE_APP_OPENROUTER_API;
  // Function to send message to OpenRouter AI and update messages state
  const sendMessage = async () => {
    try {
      setIsLoading(true); 
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${VITE_APP_OPENROUTER_API}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gryphe/mythomist-7b:free",
            messages: [{ role: "user", content: inputText }],
          }),
        }
      );
      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const botResponse = data.choices[0].message.content;
        setMessages([
          ...messages,
          { text: inputText, isUser: true },
          { text: botResponse, isUser: false },
        ]);
      } else {
        setMessages([
          ...messages,
          { text: inputText, isUser: true },
          { text: "Sorry, I couldn't understand that.", isUser: false },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); 
    }
  };

  // Function to handle user input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (inputText.trim() !== "") {
      await sendMessage(); // Send message if input is not empty
      setInputText(""); // Clear input field after sending message
    }
  };

  // Scroll to the bottom of the chat window when messages change
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  return (
    <section className="flex flex-col h-screen">
      <div
        className="chat-window flex-grow mt-20 overflow-y-auto"
        ref={chatWindowRef}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`msg.isUser ? "user-message" : "bot-message" "mb-6"`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="w-full relative">
          <input
            type="text"
            className="border text-sm block w-full p-2.5 border-first outline-none bg-black mb-4"
            placeholder="Type your message..."
            value={inputText}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
            disabled={isLoading} 
          >
            {isLoading ? ( 
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <BsSend />
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatFeature;
