import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { ThankYouPage } from "./components/ThankYouPage";

export default function App() {
  if (window.location.pathname === "/thank-you") {
    return <ThankYouPage />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
