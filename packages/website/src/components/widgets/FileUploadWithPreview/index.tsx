import { Viewer } from '@react-pdf-viewer/core'
import { useRef, useState } from 'react'

type Props = {
  files?: FileList | null | undefined
  setFiles?: (file: FileList | null | undefined) => void | Promise<void>
}
const FileUploadWithPreview: React.FC<Props> = ({ files, setFiles }) => {
  const [urls, setUrls] = useState<string[]>([''])

  const acceptedTypes =
    'application/pdf,application/msword,application/vnd.ms-excel,text/plain,image/*'
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target?.files
    setFiles?.(files)
    if (files) {
      const filesUrls: string[] = []
      Array.from(files).map((file) => {
        const objectUrl = URL.createObjectURL(file)
        filesUrls.push(objectUrl)
        setUrls(filesUrls)
      })
    }
  }

  const handleClick = (): void => {
    fileRef.current?.click()
  }
  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex={0}
      role="button"
      className="w-1/2 p-5 bg-gray-300 bg-opacity-50 overflow-scroll max-h-72 flex flex-col items-center content-center text-gray-500 rounded-md shadow-sm active:scale-90 active:transform border-gray-500 border border-dashed transition-all tracking-wider"
    >
      {files &&
        Array.from(files).map((file, index) => (
          <div key={index}>
            {file.name} - {file.type}
            <Viewer fileUrl={urls[index]} />
          </div>
        ))}
      <p className="text-3xl">+</p>
      <p className="capitalize">upload files</p>
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        accept={acceptedTypes}
        multiple
        onChange={handleChange}
      />
    </div>
  )
}

export default FileUploadWithPreview
