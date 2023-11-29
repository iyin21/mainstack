import Navbar from "./navbar"
import Appbar from "@assets/appbar.png"
import { ReactNode } from "react"
import { useUser } from "@hooks/revenue.hook"
import { CgSpinner } from "react-icons/cg"
import Logo from "@assets/mainStackLogo.svg"

const Layout = ({ children }: { children: ReactNode }) => {
    const { data, isLoading } = useUser()
    return (
        <>
            {isLoading ? (
                <div className="h-screen w-full flex items-center justify-center">
                    <img
                        src={Logo}
                        alt=""
                        className="animate-pulse "
                        width={40}
                    />
                    <CgSpinner className="animate-spin text-black-100 text-3xl " />
                </div>
            ) : (
                <div className="h-screen">
                    <div className="w-full sticky top-0 right-0 z-20 bg-white-100 sm:pb-3 md:pb-0">
                        <Navbar data={data} />
                    </div>
                    <div className="relative lg:px-20 h-full mb-6">
                        <div className="fixed left-0 w-20 mt-20">
                            <img src={Appbar} alt="" />
                        </div>

                        <main
                            className={`-full h-full py-6 px-8 pt-6 h-screen`}
                        >
                            {children}
                        </main>
                    </div>
                </div>
            )}
        </>
    )
}

export default Layout
