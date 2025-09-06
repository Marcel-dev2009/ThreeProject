import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/footer";
export default function Home() {
  return (
    <>
    <main className="overflow-x-hidden overflow-y-auto">
       <Navbar/>
        <Hero/>
        <Highlight /> 
        <Model/>
        <Features/>
        <Chip/>
        <Footer/>
    </main>
    </>
  );
}
