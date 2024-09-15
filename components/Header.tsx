import Link from "next/link";
import RoundedImage from "./small-components/RoundedImage";

const AppHeader = () => {
  return (
    <header className="flex flex-row gap-4 justify-between items-center px-6 py-2 border-b-[1px] border-[#cecece20]">
      <div>Gnose Media</div>
      <ul>
        <Link href={"/"}>Home</Link>
      </ul>
      <div>
        <RoundedImage
          imageUrl="https://i.pinimg.com/736x/ba/26/e2/ba26e223868c86c41b7520817dbefc0d.jpg"
          alt="snoopy-almosso"
        />
      </div>
    </header>
  );
};

export default AppHeader;
