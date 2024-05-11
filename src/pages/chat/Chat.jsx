import ChatFeature from "../../components/chat/ChatFeature";

const Chat = () => {
  return (
    <section className="grid grid-cols-4 ">
      <div className="col-span-1">Welcome to Home</div>
      <div className="col-span-3">
        <ChatFeature/>
    </div>
    </section>
  );
};
export default Chat;
