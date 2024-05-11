import { useState, useRef, useEffect } from "react";
import { BsSend } from "react-icons/bs";

const ChatFeature = () => {

  // states
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatWindowRef = useRef(null);
  const VITE_APP_OPENROUTER_API = import.meta.env.VITE_APP_OPENROUTER_API;
  const userName = "Jessica";
  const userImage =
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";

  // send message functionality
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
        const newMessage = {
          userQuestion: inputText,
          botResponse: botResponse,
        };
        await sendChatToBackend(newMessage);
        setMessages([...messages, newMessage]);
      } else {
        const newMessage = {
          userQuestion: inputText,
          botResponse: "Sorry, I couldn't understand that.",
        };
        await sendChatToBackend(newMessage);
        setMessages([...messages, newMessage]);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // send chat to backend
  const sendChatToBackend = async (chatData) => {
    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(chatData),
      });
      if (!response.ok) {
        console.error("Failed to send chat to backend");
      }
    } catch (error) {
      console.error("Error sending chat to backend:", error);
    }
  };

  // fetch messages from backend
  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      await sendMessage();
      setInputText("");
    }
  };

  // scroll to bottom of chat window
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
          <div key={index} className="mb-6">
            {msg.userQuestion && (
              <div className="flex items-center mb-2">
                <img
                  src={userImage}
                  alt="User"
                  className="h-6 w-6 rounded-full mr-2"
                />
                <p className="text-xs text-gray-400">{userName}</p>
              </div>
            )}
            {msg.userQuestion && (
              <div className="flex items-center">
                <p className="chat-bubble bg-first ml-6">{msg.userQuestion}</p>
              </div>
            )}
            <div className="mt-5">{msg.botResponse}</div>
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
