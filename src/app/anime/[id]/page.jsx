import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilitis/VidioPlayer"
import Image from "next/image"
import CollectionBtn from "@/components/AnimeList/CollectionBtn"
import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
    const animeDetail = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id}
    })
    

    return (
        <>
        <div className="pt-4 px-4">
            <h3 className="text-color-primary text-2xl font-bold">{animeDetail.data.title}
            </h3>
            {
                !collection && user && <CollectionBtn anime_mal_id={id} user_email={user?.email} anime_title={animeDetail.data.title} anime_image={ animeDetail.data.images.webp.image_url }/> 
            }
        
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">

            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>SERIES</h3>
                <p>{animeDetail.data.type}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>PERINGKAT</h3>
                <p>{animeDetail.data.rank}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>SKOR</h3>
                <p>{animeDetail.data.score}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>PENGIKUT</h3>
                <p>{animeDetail.data.members}</p>
            </div>
            <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                <h3>EPISODE</h3>
                <p>{animeDetail.data.episodes}</p>
            </div>

        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image 
            src={animeDetail.data.images.webp.image_url}
            alt={animeDetail.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover"/>
            <p className="text-justify text-xl">{animeDetail.data.synopsis}</p>
        </div>
        <div className="p-4">
            <h3 className="text-color-primary text-2xl font-bold mt-6 mb-2">Komentar</h3>
            <CommentBox anime_mal_id={id}/>
            
            {user && <CommentInput anime_mal_id={id} user_email={user?.email} user_name={user?.name} anime_title={animeDetail.data.title}/>
            }
        </div>
        <div>
            <VideoPlayer youtubeId={animeDetail.data.trailer.youtube_id}/>
        </div>
        </>
    )
}

export default Page