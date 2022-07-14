export async function encodeFileToBase64(file: File): Promise<string | ArrayBuffer> {
  return new Promise((resolve) => {
    const reader = new FileReader()
    if (file) {
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string | ArrayBuffer)
    }
  })
}
