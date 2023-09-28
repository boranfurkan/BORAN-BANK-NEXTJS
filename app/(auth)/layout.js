import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Navbar from "@/app/components/navbar/Navbar";

export default async function AuthLayout({ children }) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/')
    }

    return (
        <>
        <Navbar isForHomeRoute={false}/>
        <div className="w-screen h-screen bg-pig-pattern bg-repeat bg-[length:350px_350px] absolute -z-50"></div>
        {children}
        </>
    )
}
