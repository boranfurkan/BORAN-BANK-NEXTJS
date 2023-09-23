"use client";
import { Great_Vibes } from "next/font/google";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { useState } from "react";
import Image from "next/image";
import bankImg from "../../../public/bank.jpg"

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export default function AuthForm() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className=" w-full h-full flex items-center justify-center text-center">
        <div className="bg-white shadow shadow-primary border-3 border-primary rounded p-6 flex flex-nowrap items-center justify-center max-md:flex-wrap">
            <Image src={bankImg} alt={"bank image"} sizes="45vw, (max-width: 1200px) 50vw" style={{width: '100%', height: 'auto',}} quality={100} width={640} height={480} className="flex-0 rounded"/>
          <form className="flex-1 h-full p-4 flex flex-col justify-items-center items-center">
            <h1 className={greatVibes.className + " text-[5vw] max-sm:text-[10vw] text-tertiary"}>Welcome</h1>
            <Input
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Enter your email"
              className="w-full max-md:min-w-[12rem] min-w-[16rem] my-2"
              color="primary"
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              color="primary"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={(e) => setIsVisible(true)}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full min-w-max my-2"
            />
            <Button color="primary" className="w-full my-2" isLoading>
              Loading
            </Button>
          </form>
        </div>
    </div>
  );
}
