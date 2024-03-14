import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()
  
  const topAnime = await getAnimeResponse("top/anime","limit=8")
  let rekomAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  rekomAnime = reproduce(rekomAnime, 4)
  
  return (
    <>
    <section>
      <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer"/>
      <AnimeList api={topAnime}/>
    </section>
    <section>
      <Header title="Rekomendasi" linkTitle="Lihat Semua"/>
      <AnimeList api={rekomAnime}/>
    </section>
    </>
  )
}

export default Page