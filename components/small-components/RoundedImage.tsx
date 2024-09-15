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
        width={28}
        height={28}
        loading="lazy"
        src={imageUrl}
        alt={alt}
      ></Image>
    </div>
  );
};

export default RoundedImage;
