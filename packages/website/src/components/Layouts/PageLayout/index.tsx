import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../../public/images/SEAL.png'

type Props = React.PropsWithChildren

const PageNavbar: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex flex-col flex-1 min-h-screen min-w-full bg-gray-100">
      <div className="w-full p-4 shadow-lg">
        <Link href="/">
          <span className="flex flex-row items-center">
            <Image src={logo} width={150} height={100} alt="" />
            <p className="capitalize text-4xl font-bold">SEAL App</p>
          </span>
        </Link>
      </div>
      <div className="container py-10">
        <div>{children}</div>
      </div>
    </main>
  )
}
export default PageNavbar
