import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import NewCarSales from "@/components/NewCarSales/NewCarSales"
import UsedCarSearch from "@/components/UsedCarSearch/UsedCarSearch"
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo"
import Footer from "@/components/Footer/Footer"
import Head from "next/head"

export default function Home() {
  return (
    <main>
      <Head>
        <title>G-select</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Hero />
      <NewCarSales />
      <UsedCarSearch />
      <CompanyInfo />
      <Footer />
    </main>
  )
}

