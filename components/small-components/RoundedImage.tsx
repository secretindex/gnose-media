import { FC } from "react";
import Image from "next/image";

interface RoundedImageProps {
  imageUrl: string;
  alt: string;
}

const RoundedImage: FC<RoundedImageProps> = ({ imageUrl, alt }) => {
  return (
    <div>
      <Image
        className="rounded-full w-full h-full"
        width={30}
        height={30}
        src={imageUrl}
        alt={alt}
      ></Image>
    </div>
  );
};

export default RoundedImage;
