import Header from "@/components/Dashboard/Header"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Link from "next/link"


const page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where: { user_email : user.email}})

    return (
        <section className="mt-2 px-4 w-full">
        <Header title="My Comments"/>
            <div className="grid grid-cols-1 px-4 mt-2 gap-4 border-2 border-color-accent">
            {
                comments.map(coment => {
                    return (
                        <Link
                        href={`/anime/${coment.anime_mal_id}`}
                        key={coment.id} 
                        className="rounded-xl bg-color-primary text-color-dark p-4">
                            <p className="italic">~{coment.anime_title}</p>
                            <p>{coment.comment}</p>
                        </Link>
                    )
                })
            }
            </div>
        </section>
    )
}

export default page