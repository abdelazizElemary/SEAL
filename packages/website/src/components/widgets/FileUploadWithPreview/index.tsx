import ImageIcon from '@mui/icons-material/Image'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { Viewer } from '@react-pdf-viewer/core'
import Image from 'next/image'
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
    const uploadedFiles = e.target?.files
    setFiles?.(uploadedFiles)
    if (uploadedFiles) {
      const filesUrls: string[] = []
      Array.from(uploadedFiles).map((file) => {
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
        Array.from(files).map((file, index) => {
          if (!file.type.includes('image')) {
            return (
              <div className="flex flex-row items-start justify-around w-full">
                <InsertDriveFileIcon style={{ width: '100px', height: '100px' }} />
                <div className="flex flex-col text-center" key={index}>
                  <Viewer fileUrl={urls[index]} />
                  {file.name}
                </div>
              </div>
            )
          } else {
            return (
              <div className="flex flex-row content-center items-center justify-around w-full">
                <ImageIcon style={{ width: '100px', height: '100px' }} />
                <div className="flex flex-col w-1/2 text-center" key={index}>
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="image"
                    width={50}
                    height={100}
                    className="rounded-md"
                  />
                  {file.name}
                </div>
              </div>
            )
          }
        })}
      {!files && (
        <div className="flex flex-col items-center">
          <p className="text-3xl">+</p>
          <p className="capitalize">upload files</p>
        </div>
      )}
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
