import HeroOne from "@/components/HeroOne";
import HeroTwo from "@/components/HeroTwo";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="px-6 md:px-28">
      <div className="flex flex-col md:flex-row items-start justify-between py-20 min-h-screen">
        <div className="w-full md:w-1/2 md:fixed md:top-20">
          <HeroOne />
        </div>
        <div className="w-full md:w-1/2 md:ml-[50%] h-screen overflow-y-auto">
          <HeroTwo />
          <Projects />
        </div>
      </div>
    </div>
  );
}
