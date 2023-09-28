import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Navbar from "@/app/components/navbar/Navbar";

export default async function DashboardLayout({ children }) {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()

    if (!data.session) {
        redirect('/login')
    }

    return (
        <>
            <Navbar isForHomeRoute={true}/>
            {children}
        </>
    )
}