import Link from "next/link"
import { authUserSession} from "@/libs/auth-libs"

export const UserAuthBtn = async () => {
    const user = await authUserSession()

    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL =  user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-5">
            {
             user ? <Link href="/users/dashboard" className="py-1 inline-block font-bold text-color-dark">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark rounded text-color-accent py-1 px-12 inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserAuthBtn