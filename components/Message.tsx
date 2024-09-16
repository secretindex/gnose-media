import { FC } from "react";
import Link from "next/link";

interface MessageProps {
  message: string;
  username: string;
  profileImage: string;
}

const Message: FC<MessageProps> = ({ message, username, profileImage }) => {
  return (
    <div className="flex items-center rounded-md flex-row gap-2 w-full cursor-pointer transition-all ease-in-out p-2 hover:bg-[#cecece10]">
      <div className="h-full">
        <Link href={`/user/${message.length * username.length}`}>
          <img
            src={profileImage}
            alt="oi"
            className="block w-[2.5rem] h-[2.5rem] rounded-full"
          />
        </Link>
      </div>
      <div className="w-full h-2/3">
        <span>
          <Link href={`/user/${message.length * username.length}`}>
            <p className="font-bold text-sm transition-all ease-in-out hover:underline">
              {username}
            </p>
          </Link>
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
