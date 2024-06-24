export const getImageBuffer = async (file: File) => {
    const buffer = await file.arrayBuffer()
    const blob = new Blob([buffer]);
    const url = URL.createObjectURL(blob)
    return url
}