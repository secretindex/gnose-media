import { FC } from "react";
import Image from "next/image";

interface RoundedImageProps {
  imageUrl: string;
  alt: string;
}

const RoundedImage: FC<RoundedImageProps> = ({ imageUrl, alt }) => {
  return (
    <div className="w-full h-full">
      <Image
        className="rounded-md"
        width={30}
        height={30}
        loading="lazy"
        src={imageUrl}
        alt={alt}
      ></Image>
    </div>
  );
};

export default RoundedImage;
