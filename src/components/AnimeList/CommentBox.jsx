import prisma from "@/libs/prisma"
import React from "react"

const commentBox = async ({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({where: { anime_mal_id }})


    
    return (
        <div className="max-w-2xl h-60 grid grid-rows gap-4 mb-4 overflow-y-auto p-4 bg-color-dark rounded scroll-bar">
            {comments.map(comment => {
                return (
                    
                    <div key={comment.id} className="text-color-dark bg-color-primary p-3 rounded-md h-auto">
                        <i className="italic">~{comment.user_name}</i>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
            <div></div>
        </div>
    )
}
 
export default commentBox