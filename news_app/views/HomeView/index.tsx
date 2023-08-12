import CardComp from "../../component/card"
import HeaderSection from "../../component/header-section"
import { Inter } from 'next/font/google'
import NavBar from "../../component/navBar"
const inter = Inter({ subsets: ['latin'] })

const HomeView=()=>{
  const navOptions = [
    { name: "Home", href: "#" },
    { name: "New", href: "#" },
    { name: "Popular", href: "#" },
    { name: "Trending", href: "#" },
    { name: "Categories", href: "#" },
  ];
    return(<>
    <header className='md:flex md:justify-center'>
      <div className=" ">
      <NavBar navOptions={navOptions} logoUrl={"/logo.svg"}/>

      </div>
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
