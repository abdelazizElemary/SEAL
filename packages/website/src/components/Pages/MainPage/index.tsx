import { useState } from 'react'
import PageLayout from '../../layouts/PageLayout'
import FileUploadWithPreview from '../../widgets/FileUploadWithPreview'

const MainPage: React.FC = () => {
  const [files, setFiles] = useState<FileList | null>()
  return (
    <PageLayout>
      <div className="p-4 border-b-gray-600 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-black text-2xl">- Store and share their documents with others.</p>
        <FileUploadWithPreview files={files} setFiles={setFiles} />
      </div>
    </PageLayout>
  )
}

export default MainPage
