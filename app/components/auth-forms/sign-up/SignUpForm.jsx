"use client";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../EyeFilledIcon";
import { EyeSlashFilledIcon } from "../EyeSlashFilledIcon";
import { useState } from "react";
import { toast } from 'react-toastify';
import Image from "next/image";
import bankImg from "../../../../public/bank1.jpg"
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function SignUpForm() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const router = useRouter()

    async function signUpSubmit(e){
        e.preventDefault()
        const toastLoading = toast.loading('Signing you up!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        if (rePassword !== password){
            return(
                toast.update(toastLoading, { render: "Your passwords do not match!", type: "error", isLoading: false, autoClose: 5000 })
            )
        }

        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`
            }
        })

        if (error) {
            toast.update(toastLoading, {render: error.message, type: "error", isLoading: false, autoClose: 5000 })
        }

        if (!error) {
            toast.update(toastLoading, { render: "You are successfully signed up. " +
                    "Please verify your email to continue.", type: "success", isLoading: false, autoClose: 5000 });
            router.push('/verify')
        }

    }

    return (
        <div className=" w-full h-full my-[9%] flex items-center justify-center text-center">
            <div className="bg-white shadow shadow-primary border-3 border-primary rounded p-6 flex flex-nowrap items-center justify-center max-md:flex-wrap">
                <Image src={bankImg} alt={"bank image"} sizes="45vw, (max-width: 1200px) 50vw" style={{width: '100%', height: 'auto',}} quality={100} width={640} height={480} className="shadow shadow-gray-100 flex-0 rounded"/>
                <form onSubmit={signUpSubmit} className="flex-1 h-full p-4 flex flex-col justify-items-center items-center">
                    <h4 className="text-[4vw] max-sm:text-[10vw] text-tertiary">SIGN<span className="text-primary">UP</span></h4>
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
                    <Input
                        label="Re-Password"
                        variant="bordered"
                        placeholder="Re-enter your password"
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
                        onChange={(e) => setRePassword(e.target.value)}
                    />
                    <Button type={"submit"} color="primary" className="w-full my-2">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}
