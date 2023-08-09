import CardComp from "../../component/card"
import HeaderSection from "../../component/header-section"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const HomeView=()=>{
    return(<>
    <header className='md:flex md:justify-center'>
      nav
    </header>
    <main
      className={` md:flex md:justify-center  ${inter.className}`}
    >
    <HeaderSection/>
    </main>
    

    <CardComp/>
    
    </>)
}
export default HomeView;
