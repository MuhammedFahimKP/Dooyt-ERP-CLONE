import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";


export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#F8F7F5]">
    <div className="container mx-auto px-4">   
      <Navbar/>
      <Hero/>
    </div>
    </main>
  );
}
