import { useState } from "react";
import { Slant as Hamburger } from "hamburger-react";
import Container from "@/containers/home-page/container";
import Link from "next/link";
import { useRouter } from "next/router";
import FullMenu from "../FullMenu";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps>= ({}) => {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const handleToggle = () => setOpen(!isOpen);

    return(
        <>
        <header
            className={`
                z-20 ${
                    router.pathname! == "/"
                    ? "relative border-b-2 border-light"
                    : "absolute left-0 right-0 top-8"
                }
                `}
        >
            <Container classes="px-7">
            <div className="flex items-center justify-between">
                        <div className="flex-none">
                            <Link href="/">
                                <a>
                                    <h1 className="font-charm text-primary text-4xl font-bold">
                                        FT
                                    </h1>
                                </a>
                            </Link>
                        </div>
                        <div className="flex-none hidden md:block">
                            <nav>
                                <ul className="flex justify-items-end items-center">
                                    <li className="mx-4 relative">
                                        <Link href="/">
                                            <a className="text-white text-base custom__hover--nav block py-6">
                                                Home
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mx-4 relative">
                                        <Link href="/listings">
                                            <a className="text-white text-base custom__hover--nav block py-6">
                                                Lista de propiedades
                                            </a>
                                        </Link>
                                    </li>
                                    <li className="mx-4">
                                        <Hamburger
                                            toggled={isOpen}
                                            toggle={handleToggle}
                                            color="#fff"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex-none md:hidden py-5">
                            <Hamburger
                                toggled={isOpen}
                                toggle={handleToggle}
                                color="#fff"
                            />
                        </div>
                    </div>
            </Container>
        </header>
        {isOpen && <FullMenu handleClose={handleToggle} />}
        </>
    )
}

export default Navbar;