import Hero from "./ui/Home/Hero";
import Navbar from "./ui/Home/Navbar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
        <Navbar/>
        <Hero/>
    </main>
  );
}
