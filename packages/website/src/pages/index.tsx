import axios from 'axios'
import type { GetServerSideProps, NextPage } from 'next'
import MainPage from '../components/pages/MainPage'

export interface ModifiedFile {
  id: number
  file: string
}

type Props = {
  docs: ModifiedFile[]
}

const Home: NextPage<Props> = ({ docs }) => {
  return <MainPage docs={docs} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const docs = await axios.get('http://localhost:8000/api/v1/files/')

  return {
    props: {
      docs: docs.data as ModifiedFile[],
    },
  }
}

export default Home
