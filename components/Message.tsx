import { FC } from "react";
import RoundedImage from "./small-components/RoundedImage";
import Link from "next/link";

interface MessageProps {
  message: string;
  username: string;
  profileImage: string;
}

const Message: FC<MessageProps> = ({ message, username, profileImage }) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="h-full flex justify-start gap-4">
        <Link href={`/user/${message.length * username.length}`}>
          <RoundedImage imageUrl={profileImage} alt="user-image" />
        </Link>
      </div>
      <div className="w-full h-2/3">
        <span>
          <Link href={`/user/${message.length * username.length}`}>
            <p className="font-bold transition-all ease-in-out hover:underline">{username}</p>
          </Link>
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
