import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
