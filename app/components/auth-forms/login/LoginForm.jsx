"use client";

import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../EyeFilledIcon";
import { EyeSlashFilledIcon } from "../EyeSlashFilledIcon";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { toast } from 'react-toastify';
import Image from "next/image";
import bankImg from "../../../../public/bank.jpg"


export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function loginSubmit(e){
      e.preventDefault()
      const toastLoading = toast.loading('Logging you in!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });

      const supabase = createClientComponentClient()
      const { error } = await supabase.auth.signInWithPassword({
          email,
          password
      })

      if (error) {
          toast.update(toastLoading, {render: error.message, type: "error", isLoading: false, autoClose: 5000  })
      }

      if (!error) {
          toast.update(toastLoading, { render: "You are successfully logged in.", type: "success", isLoading: false, autoClose: 5000 });
          router.push('/')
      }
  }

  return (
    <div className=" w-full h-full my-[9%] flex items-center justify-center text-center">
        <div className="bg-white shadow shadow-primary border-3 border-primary rounded p-6 flex flex-nowrap items-center justify-center max-md:flex-wrap">
            <Image src={bankImg} alt={"bank image"} sizes="45vw, (max-width: 1200px) 50vw" style={{width: '100%', height: 'auto',}} quality={100} width={640} height={480} className="shadow shadow-gray-100 flex-0 rounded"/>
          <form onSubmit={loginSubmit} className="flex-1 h-full p-4 flex flex-col justify-items-center items-center">
            <h4 className="text-[4vw] max-sm:text-[10vw] text-tertiary">LOG<span className="text-primary">IN</span></h4>
            <Input
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Enter your email"
              className="w-full max-md:min-w-[12rem] min-w-[16rem] my-2"
              color="primary"
              onChange={(e) => setEmail(e.target.value)}
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
                  onClick={(e) => setIsVisible(pre => !pre)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type={"submit"} color="primary" className="w-full my-2">
              Login
            </Button>
          </form>
        </div>
    </div>
  );
}
