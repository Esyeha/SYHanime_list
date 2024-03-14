import { getAnimeResponse } from "@/libs/api-libs"
import AnimeList from "@/components/AnimeList"
import Header from "@/components/Dashboard/Header"

const Page = async ({params}) => {
  const { keyword } = params

  // cara menghilangkan tanda spasi [%20]
  const decodedKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime",`q=${decodedKeyword}`)

  // console.log(animeApi.data)

  return (
    <>
    <section>
      <Header title={`Pencarian untuk : ${decodedKeyword}`}/>
      <AnimeList api={searchAnime}/>
    </section>
    </>
  )
}

export default Page
