export async function isoFetch(url) {
    try {
        const response = await fetch(url);

        if (response.json === null)
            return response
        else
            return await response.json()

    }
    catch( err) {
        console.log( err)
    }
}