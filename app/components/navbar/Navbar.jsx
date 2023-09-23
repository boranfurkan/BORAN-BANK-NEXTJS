import ProgressBar from "app/components/progress-bar/ProgressBar"
import Link from "next/link"
import { FaRegUserCircle } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs'
import { BiLineChart } from 'react-icons/bi'
import { TbPigMoney } from 'react-icons/tb'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import UserDropdown from "./user-dropdown/UserDropdown"

export default function Navbar() {
    return (
        <>
            <nav className="w-full sticky top-0 z-20 bg-white text-black text-lg max-lg:text-sm ">
                <ul className="container mx-auto flex justify-between items-center h-16 rounded px-4">
                    <li className="space-x-2 ">
                        <div className="w-full flex flex-row items-center gap-2 ">
                            <TbPigMoney className="w-[48px] h-auto text-primary max-md:w-[38px]" />
                            <h2 className="font-bold text-center text-tertiary">BORAN <span className="text-primary">BANK</span></h2>
                        </div>
                    </li>
                    <li className="hidden md:flex space-x-4 mx-12 font-medium ">
                        <div className="w-full h-full flex flex-row justify-center gap-8 flex-nowrap">
                            <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/"><BsBank className="text-primary" />Home</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/account"><FaRegUserCircle className="text-primary" /> Account</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/transfer"><FaMoneyBillTransfer className="text-primary" /> Transfer</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors text-tertiary hover:text-primary" href="/investments"><BiLineChart className="text-primary" /> Investments</Link>
                        </div>
                    </li>
                    <li className="flex text-tertiary items-center space-x-2">
                        <UserDropdown />
                    </li>
                </ul>
                <div className="flex flex-col w-full items-center">
                <div className="w-full h-[5px] bg-primary"></div>
                <ProgressBar />
                </div>
            </nav>
        </>
    )
}
