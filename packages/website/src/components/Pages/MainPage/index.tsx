import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import axios from 'axios'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { ModifiedFile } from '../../../pages'
import PageLayout from '../../layouts/PageLayout'
import FileUploadWithPreview from '../../widgets/FileUploadWithPreview'

type Props = {
  docs: ModifiedFile[]
}
const MainPage: React.FC<Props> = ({ docs }) => {
  const [files, setFiles] = useState<FileList | null>()

  const handleSubmit = (): void => {
    if (files) {
      Array.from(files).map(async (file) => {
        const data = new FormData()
        data.append('file', file)
        axios
          .postForm('http://localhost:8000/api/v1/files/upload/', data)
          .then((res) => console.log(res))
          .catch((err) => console.log(err))
      })
    }
    setFiles(null)
  }

  const handleShare = (url: string): void => {
    navigator.clipboard.writeText(url)
    toast('link copied to clipboard to share!')
  }

  const htmlContent = '<a href="www.google.com" style="color:red;">here it is</a>'
  return (
    <PageLayout>
      <ToastContainer
        className="w-1/4 flex flex-col text-center self-center justify-center content-center"
        toastClassName="rounded-md shadow-md active:scale-90 active:transform transition-all capitalize bg-green-300 text-black border-b border-b-8 border-b-white"
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        draggable
        closeButton={false}
      />
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col content-start items-start w-full p-4">
          <p className="text-black text-2xl mb-2">- Stored files</p>
          {Array.from(docs).map((file, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between text-gray-500 text-lg w-1/2"
              >
                <a href={`${file.file}`} target="__blank" className="w-1/2" download>
                  {file.file.substring(file.file.lastIndexOf('/') + 1).trim()}
                </a>
                <a
                  href={`${file.file}`}
                  target="__blank"
                  className="hover:text-black active:scale-90 active:transform transition-all capitalize flex flex-row items-center"
                  download
                >
                  download
                  <DownloadForOfflineRoundedIcon />
                </a>
                <span
                  onClick={() => handleShare(file.file)}
                  className="hover:text-black active:scale-90 active:transform transition-all capitalize flex flex-row items-center cursor-pointer"
                >
                  share
                  <ShareOutlinedIcon />
                </span>
              </div>
            )
          })}
        </div>
        <div className="p-4 border-b-gray-600 flex flex-col lg:flex-row justify-between items-center w-full gap-4">
          <p className="text-black text-2xl">- Store and share your documents with others.</p>
          <FileUploadWithPreview files={files} setFiles={setFiles} />
        </div>
        <button
          className="w-24 bg-gradient-to-tr from-gradient-end to-gradient-start hover:ring-2 hover:ring-gradient-start text-white active:scale-90 active:transform font-bold hover:ring-opacity-50 flex items-center justify-center leading-0 text-center text-xs tracking-wider transition-all uppercase whitespace-nowrap p-2 rounded-md"
          onClick={handleSubmit}
        >
          submit
        </button>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </PageLayout>
  )
}

export default MainPage
