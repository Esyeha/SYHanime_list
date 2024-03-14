"use client"

import { ArrowCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter() 

    const handleback = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
    <div className="flex justify-between items-center p-4">
        <button onClick={handleback} className="text-color-primary">
            <ArrowCircleLeft size={32} />
        </button>
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
    </div>
    )
}

export default Header