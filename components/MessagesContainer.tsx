import templateMessages from "@/utils/templateMessages";
import { MessageType } from "@/utils/templateMessages";
import Message from "./Message";

const MessagesContainer = () => {
  return (
    <section className="w-2/4 h-full border-[1px] border-[#cecece20]">
      <header className="py-2 px-6 ">
        <h2 className="font-bold text-md">Messages</h2>
      </header>
      <div className="flex flex-col px-6">
        <section className="flex flex-col w-2/4">
          {templateMessages.map((message: MessageType) => {
            return (
              <Message
                key={message.user}
                message={message.message}
                profileImage={message.profileImage}
                username={message.user}
              ></Message>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default MessagesContainer;
