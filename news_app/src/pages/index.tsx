import Image from 'next/image'
import React from "react";
import { Inter } from 'next/font/google'
import HeaderSection from '../../component/header-section'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<React.Fragment>

  
    <header className='flex justify-center'>
      nav
    </header>
    <main
      className={` flex justify-between  ${inter.className}`}
    >
    <HeaderSection/>
    </main>
    </React.Fragment>
  )
}
