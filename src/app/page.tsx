import BrandsSlider from '@/components/brands-slider'
import Community from '@/sections/community'
import Features from '@/sections/features'
import Header from '@/sections/header'
import Faq from '@/sections/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <BrandsSlider />
      <Features />
      <Community />
      <Faq />
      <Footer />
    </>
  )
}
