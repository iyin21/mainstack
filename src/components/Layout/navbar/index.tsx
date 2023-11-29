import Logo from "@assets/mainStackLogo.svg"
import { NavLink } from "react-router-dom"
import { routes } from "./utils/routes"
import styles from "./navbar.module.scss"
import NotificationIcon from "@assets/notificationIcon.svg"
import MessageIcon from "@assets/messageIcon.svg"

import { VscMenu } from "react-icons/vsc"
import { UserResponse } from "../../../types/api/user.type"

const Navbar = ({ data }: { data?: UserResponse }) => {
    console.log(data)
    return (
        <nav className="p-4">
            <div className="rounded-full flex justify-between p-4 shadow-md ">
                <img src={Logo} alt="" />
                <div className="flex gap-6 ">
                    {routes?.map((route, index) => (
                        <div className={` my-1  font-medium`} key={index}>
                            <NavLink
                                end
                                to={route?.link}
                                key={index}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.active}  gap-4 text-white-100   `
                                        : `${styles.inactive}  hover:text-white-100  w-full text-[#56616B]  `
                                }
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`flex items-center gap-2 w-full hover:bg-black-100  hover:rounded-full p-2 items-center px-3  ${
                                            isActive &&
                                            "bg-black-100 rounded-full "
                                        }`}
                                    >
                                        <route.Icon />
                                        <h4 className=" font-medium text-2md">
                                            {route?.name}
                                        </h4>
                                    </div>
                                )}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="flex gap-x-8">
                    <img src={NotificationIcon} alt="" />
                    <img src={MessageIcon} alt="" />
                    <div className="bg-[#EFF1F6] gap-2 p-2 flex items-center rounded-full">
                        <img
                            src={`https://ui-avatars.com/api/?name=${data?.first_name} ${data?.last_name}&background=rgba(92, 102, 112, 1)&color=ffffff`}
                            className="rounded-full w-8"
                            alt=""
                        />
                        <VscMenu size="26px" color="#56616B" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
