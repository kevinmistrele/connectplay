import {Header} from "@/components/header.tsx";
import {FeaturesSection} from "@/components/features-section.tsx";
import {CTASection} from "@/components/cta-section.tsx";
import {Footer} from "@/components/footer.tsx";
import {HeroSection} from "@/components/hero-section.tsx";
import {HowItWorksSection} from "@/components/how-it-works-section.tsx";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-cp-background text-cp-text-light">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
            <Footer />
        </div>
    )
}
