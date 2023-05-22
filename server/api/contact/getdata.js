export default defineEventHandler(async () => {

    const {baseApiUrl} = useRuntimeConfig()

    const data = await $fetch(`${baseApiUrl}/contact`, {
        method: 'GET'
    })

    return data
})