import Image from "next/image";

const UserPage = () => {
  return (
    <section className="flex flex-col border-[#cecece20] border-x-[1px] w-2/4 h-full mx-auto items-center pt-6">
      <div className="flex flex-col gap-3">
        <Image
          src={
            "https://i.pinimg.com/736x/b9/a3/1c/b9a31c7869815dfddd573a501351f60d.jpg"
          }
          className="rounded-full m-auto"
          width={150}
          height={150}
          alt="profile image"
        ></Image>
        <div className="text-center w-full">
          <p className="text-sm font-bold">Gabriel do PvP</p>
          <div>
            <span className="text-xs text-[#dedede]">
              Tenho 10 anos e sou galã de novela
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
