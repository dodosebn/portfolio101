import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/hero'
import Home from '@/components/home'
import AboutMe from '@/components/aboutMe'
import { Projects } from './projects'
import ContactMe from '@/HireMe/contactMe'
import QuickAnimaB4Projects from '@/components/quickAnimaB4Projects'
import CusorWrite from '@/components/cursorWrite'


export const Route = createFileRoute('/')({
  component: App,
})
function App() {
  return (
    <>
    <div  className="relative lg:px-16 lg:w-full max-w-[1500px] flex flex-col 
      justify-center mx-auto">
  <Hero />
  <Home/>
  <AboutMe />
  <QuickAnimaB4Projects />
  <Projects />
        <ContactMe />

  {/* <ProjectImageView /> */}
  </div></>)
 }
