import Footer from "./Footer"
import Navbar from "./Navbar"

import Head from "next/head"


const Layout = ({children}) => {

  return(
    <>
    <Head>
      <link rel="short cut icon" href="/images/favicon.ico" />
      <title>PokeNext</title>
    </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>

  )
}

export default Layout