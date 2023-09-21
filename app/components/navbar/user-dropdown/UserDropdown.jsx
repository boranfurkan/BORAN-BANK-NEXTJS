"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User } from "@nextui-org/react";
import manPng from "../../../../public/man.png"
export default function UserDropdown() {
    return (

        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        size: "small",
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                    }}
                    className="transition-transform"
                    description="8374582"
                    name="Tony Reichert"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-bold">@tonyreichert</p>
                </DropdownItem>
                <DropdownItem key="settings">
                    My Settings
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                    Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" color="primary">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>

    );
}
