import Image from 'next/image'
import React from "react";
import { Inter } from 'next/font/google'
import HeaderSection from '../../component/header-section'
import CardComp from '../../component/card';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<React.Fragment>

  
    <header className='md:flex md:justify-center'>
      nav
    </header>
    <main
      className={` md:flex md:justify-center  ${inter.className}`}
    >
    <HeaderSection/>
    </main>
   

    <CardComp/>
    
    </React.Fragment>
  )
}
