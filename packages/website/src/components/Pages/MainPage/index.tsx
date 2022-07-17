import axios from 'axios'
import { useState } from 'react'
import PageLayout from '../../layouts/PageLayout'
import FileUploadWithPreview from '../../widgets/FileUploadWithPreview'

const MainPage: React.FC = () => {
  const [files, setFiles] = useState<FileList | null>()
  const handleSubmit = (): void => {
    if (files) {
      Array.from(files).map((file) => {
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
  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-10">
        <div className="p-4 border-b-gray-600 flex flex-col lg:flex-row justify-between items-center w-full gap-4">
          <p className="text-black text-2xl">- Store and share their documents with others.</p>
          <FileUploadWithPreview files={files} setFiles={setFiles} />
        </div>
        <button
          className="w-24 bg-gradient-to-tr from-gradient-end to-gradient-start hover:ring-2 hover:ring-gradient-start text-white active:scale-90 active:transform font-bold hover:ring-opacity-50 flex items-center justify-center leading-0 text-center text-xs tracking-wider transition-all uppercase whitespace-nowrap p-2 rounded-md"
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </PageLayout>
  )
}

export default MainPage
