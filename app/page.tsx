import { StackHolderProfile, MainInfoHolder } from "@/components";
export default function Home() {
  return (
    <div className="py-1 p-4 lg:px-16">
      <div className="lg:flex">
      <StackHolderProfile />
      <div className="flex-1 bottom-[2.5rem] relative lg:bottom-[4.2rem] lg:left-[2rem]">
      <MainInfoHolder />
      </div>
      </div>
    </div>

  );
}
