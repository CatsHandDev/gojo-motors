import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import NewCarSales from "@/components/NewCarSales/NewCarSales"
import UsedCarSearch from "@/components/UsedCarSearch/UsedCarSearch"
import CompanyInfo from "@/components/CompanyInfo/CompanyInfo"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NewCarSales />
      <UsedCarSearch />
      <CompanyInfo />
      <Footer />
    </main>
  )
}

