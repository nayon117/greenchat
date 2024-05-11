import Sidebar from "../../components/chat/Sidebar";
import ChatFeature from "../../components/chat/ChatFeature";

const Chat = () => {
  return (
    <section className="grid grid-cols-4 ">
      <div className="col-span-1 hidden md:block">
        <Sidebar />
      </div>
      <div className="col-span-4 md:col-span-3 px-3">
        <ChatFeature />
      </div>
    </section>
  );
};
export default Chat;
