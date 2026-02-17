export const idAnimes=[
    'tt0388629',
    'tt12343534',
    'tt0409591',
    'tt0465316',
    'tt2404499',
    'tt9307686',
    'tt7441658',
    'tt1528406',
    'tt4644488',
    'tt13911284',
    'tt13616990',
    'tt9335498'

]

export const apiUrl = 'https://www.omdbapi.com/?apikey=da73609&i='

export async function getAnimeInfo(id) {
    const response=  await fetch (apiUrl +id)
    return await response.json()
    
}
    


