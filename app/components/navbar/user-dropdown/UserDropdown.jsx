"use client"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import Link from "next/link"
import { FaRegUserCircle } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs'
import { BiLineChart, BiLogOut } from 'react-icons/bi'
import { MdQuestionAnswer } from 'react-icons/md'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import { AiFillSetting } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function UserDropdown() {
    const router = useRouter()
    async function handleLogout(){
        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signOut()

        if (!error) {
            router.push('/login')
            router.refresh()
        }
    }
    return (
        <Dropdown showArrow placement="bottom-start" backdrop="opaque" >
            <DropdownTrigger >
                <User
                    as="button"
                    avatarProps={{
                        isBordered: false,
                        size: "small",
                        src: "man.png",
                        className: "max-lg:w-8 max-lg:h-8 w-11 h-11",
                    }}
                    className="transition-transform max-width user-img"
                    description="8374582"
                    name="Tony Reichert"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="home">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/"><BsBank className="text-primary" />Home</Link>
                </DropdownItem>
                <DropdownItem key="account">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/account"><FaRegUserCircle className="text-primary" /> Account</Link>
                </DropdownItem>
                <DropdownItem key="transfer">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/transfer"><FaMoneyBillTransfer className="text-primary" /> Transfer</Link>
                </DropdownItem>
                <DropdownItem key="investments">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/investments"><BiLineChart className="text-primary" /> Investments</Link>
                </DropdownItem>
                <DropdownItem key="settings">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/settings"><AiFillSetting className="text-primary" /> Settings</Link>
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                    <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/contact"><MdQuestionAnswer className="text-primary" /> Contact Us</Link>
                </DropdownItem>
                <DropdownItem key="logout">
                    <div onClick={handleLogout} className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary"><BiLogOut className="text-primary" /> Log out</div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>

    );
}
