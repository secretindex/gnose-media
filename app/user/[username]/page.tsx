import Image from "next/image";

const UserPage = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-3">
        <Image src={""} alt="profile image"></Image>
        <div>
          <p className="text-sm font-bold">Username</p>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
