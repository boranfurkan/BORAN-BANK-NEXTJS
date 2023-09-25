import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export default async function AuthLayout({ children }) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (data.session) {
        redirect('/')
    }

    return (
        <>
        <div className="w-screen h-screen bg-blur-[10px] bg-pig-pattern bg-repeat bg-[length:350px_350px] fixed -z-50"></div>
        {children}
        </>
    )
}
