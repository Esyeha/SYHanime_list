import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSession()

    return (
        <div className="mt-7 text-color-primary flex flex-col justify-center items-center">
            <h5 className="text-2xl font-bold mb-2 pb-2">Welcome, {user?.name}</h5>
            <Image className="rounded-full shadow-2xl hover:shadow-color-secondary" src={user?.image} alt="..." width={240} height={240}/>
            <div className="py-8 flex gap-6 flex-wrap">
                <Link 
                    href="/users/dashboard/collection"
                    className="border-2 border-color-accent rounded-3xl text-color-accent font-bold px-5 py-3 text-lg hover:scale-105 hover:text-color-primary
                    hover:bg-color-accent shadow hover:shadow-[0px_0px_50px_rgba(225,199,57)]  transition-all">My Collection
                </Link>

                <Link 
                    href="/users/dashboard/comment"
                    className="border-2 border-color-accent rounded-3xl text-color-accent font-bold px-5 py-3 text-lg hover:scale-105 hover:text-color-primary
                    hover:bg-color-accent shadow hover:shadow-[0px_0px_50px_rgba(225,199,57)]  transition-all">My Comment
                </Link>       
            </div>
        </div>
    )
}

export default Page