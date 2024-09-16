"use client";

import { BaseSyntheticEvent, useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassord] = useState<string>("");

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  console.log(email, password);

  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <div className="rounded-lg m-auto p-4 w-1/3 bg-zinc-900 border-[1px] border-[#cecece20]">
        <div className="w-full">
          <h2 className=" font-bold text-lg uppercase text-center">Login</h2>
        </div>
        <form
          action="post"
          className="flex flex-col gap-3 justify-center items-center w-full"
        >
          <div className="w-2/3">
            <label className="block text-sm text-gray-300" htmlFor="">
              E-mail
            </label>
            <input
              onChange={(e: BaseSyntheticEvent) => setEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Type your e-mail"
              value={email}
              className="bg-transparent border-[1px] outline-none text-sm border-[#cecece20] rounded-md p-2 w-full"
              id="login-email"
            />
          </div>
          <div className="w-2/3">
            <label className="block text-sm text-gray-300" htmlFor="">
              Password
            </label>
            <input
              onChange={(e: BaseSyntheticEvent) => setPassord(e.target.value)}
              type="password"
              name="password"
              value={password}
              placeholder="Type your password"
              className="bg-transparent border-[1px] outline-none text-sm border-[#cecece20] rounded-md p-2 w-full"
              id="login-password"
            />
          </div>
          <div className="w-2/3">
            <button
              type="submit"
              className="py-2 px-4 w-full rounded-md bg-green-600 transition-all ease-in-out hover:bg-green-500"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
