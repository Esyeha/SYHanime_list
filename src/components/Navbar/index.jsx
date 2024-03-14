import Link from "next/link"
import InputSearch from "./InputSearch"
import UserAuthBtn from "./UserAuthbtn"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between  md:items-center p-4 gap-2">
               <Link href="/" className="font-bold text-color-dark text-3xl mt-1">SYHanimeList</Link>
             <InputSearch />
             <UserAuthBtn />
            </div>
        </header>
    )
}

export default Navbar



