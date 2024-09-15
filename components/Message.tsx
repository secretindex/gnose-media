import { FC } from "react";
import RoundedImage from "./small-components/RoundedImage";

interface MessageProps {
  message: string;
  username: string;
  profileImage: string;
}

const Message: FC<MessageProps> = ({ message, username, profileImage }) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="h-full flex justify-start gap-4">
        <RoundedImage imageUrl={profileImage} alt="user-image" />
      </div>
      <div className="w-full h-2/3">
        <span>
          <p className="font-bold">{username}</p>
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
