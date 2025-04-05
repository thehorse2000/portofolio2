import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Nav from '@/components/nav'

export default function Header() {
  return (
    <>
      <Nav />
      {/* Main Header Content */}
      <header className="dark:bg-secondaryBlack inset-0 flex w-full flex-col items-center justify-center bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] mt-20">
        <div className="mx-auto w-container max-w-full px-5 py-[110px] lg:py-[150px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Column - Introduction */}
            <div className="text-left md:w-1/2">
              <p className="text-secondary dark:text-darkTextSecondary">Hi There! <span className="text-2xl">👋</span></p>
              <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl">
                I am Amr Osama
              </h1>
              <p className="my-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
                A passionate developer crafting digital experiences with modern technologies.
                Let's build something amazing together!
              </p>
              <Button
                size="lg"
                className="h-12 text-base font-heading md:text-lg lg:h-14 lg:text-xl hover:translate-x-1 hover:-translate-y-1 transition-transform"
              >
                Get in touch
              </Button>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative mt-8 md:mt-0">
              <div className="relative inline-block">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Amr Profile Image" 
                  width={400} 
                  height={500} 
                  className="rounded-xl border-4 border-black shadow-brutal" 
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
