import ProgressBar from "app/components/progress-bar/ProgressBar"
import Link from "next/link"
import { FaRegUserCircle } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs'
import { BiLineChart } from 'react-icons/bi'
import { MdQuestionAnswer } from 'react-icons/md'
import { TbPigMoney } from 'react-icons/tb'
import { FaMoneyBillTransfer } from 'react-icons/fa6'
import UserDropdown from "./user-dropdown/UserDropdown"

export default function Navbar() {
    return (
        <>
            <nav className="w-full fixed z-20 top-0 left-0 bg-white text-black text-lg max-lg:text-sm">
                <ul className="container mx-auto flex justify-between items-center h-16 px-4 rounded">
                    <li className="space-x-2">
                        <div className="w-full flex flex-row items-center gap-2">
                            <TbPigMoney className="w-[48px] h-auto text-primary" />
                            <h2 className="font-bold text-center text-primary">BORAN BANK</h2>
                        </div>
                    </li>
                    <li className="hidden md:flex space-x-4 mx-16">
                        <div className="w-full h-full flex flex-row justify-center gap-8 flex-nowrap">
                            <Link className="flex flex-row gap-2 items-center transition-colors hover:text-primary" href="/"><BsBank className="text-primary" />Home</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors hover:text-primary" href="/account"><FaRegUserCircle className="text-primary" /> Account</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors hover:text-primary" href="/transfer"><FaMoneyBillTransfer className="text-primary" /> Transfer</Link>
                            <Link className="flex flex-row gap-2 items-center transition-colors hover:text-primary" href="/investments"><BiLineChart className="text-primary" /> Investments</Link>
                        </div>
                    </li>
                    <li className="flex items-center space-x-2">
                        <UserDropdown />
                    </li>
                </ul>
                <div className="w-full h-[5px] bg-primary"></div>
                <ProgressBar />
            </nav>
        </>
    )
}
