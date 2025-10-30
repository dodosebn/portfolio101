import { createFileRoute } from '@tanstack/react-router'
import {MainInfoHolder, StackHolderProfile} from '@/components'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
     <div className="py-1 p-4 lg:px-16">
      <div className="lg:flex">
        <StackHolderProfile />
        <div className="flex-1 bottom-10 relative lg:bottom-[4.2rem] lg:left-8">
          <MainInfoHolder />
        </div>
      </div>
    </div>
  )
}
