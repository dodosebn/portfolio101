import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/hero'
import Home from '@/components/home'
import ContactMe from '@/HireMe/contactMe'
import { Projects } from './-projects'
import QuickAnimaB4Pj from '#/components/quickAnimationb4Pj'
import ServiceMain from '#/services/serviceMain'
// import { TestimonialSection } from '#/components'
export const Route = createFileRoute('/')({component: App})
function App() {
  return (
    <>
    <div  className="relative lg:px-16 lg:w-full max-w-375 flex flex-col 
      justify-center mx-auto">
  <Hero />
  <Home/>
  <QuickAnimaB4Pj />
    <Projects />
<ServiceMain />
{/* <TestimonialSection /> */}
        <ContactMe />

  </div></>)
 }
