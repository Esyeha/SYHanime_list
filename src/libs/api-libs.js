export const getAnimeResponse = async (resource, query) => {
    const respone = await fetch( `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}` )
    const anime = await respone.json()
    return anime
}


export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const respone = await getAnimeResponse(resource)
    return respone.data.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap
    
    const respone = {
        data: data.slice(first, last)
    }

    return respone
}