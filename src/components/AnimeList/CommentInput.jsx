"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({  anime_mal_id, user_email, user_name, anime_title }) => {
    const [comment, setCommnet] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (event) => {
        setCommnet(event.target.value)
    }

    const handlePost = async (event) => {
        event.preventDefault()
        const data = { anime_mal_id, user_email, comment, user_name, anime_title}
        
        const response = await fetch("/api/v1/comment" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postcomment = await response.json()

        if(postcomment.status == 200) {
            setIsCreated(true)
            // setelah koment clear text
            setCommnet("")
            // setelah kirim koment langsung muncul koment nya
            router.refresh()
        }
        return
    }

    return (
        <div className="flex flex-col gap-2">
            {isCreated && <p className="text-color-primary">commentar terkirim</p>}

           <textarea 
           onChange={handleInput} 
           value={comment}
           className="w-full h-32 text-xl p-4 font-semibold" />
           <button onClick={handlePost} className="w-52 py-2 px-3 bg-color-accent">Kirim</button>
        </div>
    )
}

export default CommentInput