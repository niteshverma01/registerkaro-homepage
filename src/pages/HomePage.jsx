import AboutSection from "../components/About/AboutSection"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import TrustedBy from "../components/ServicesSection/TrustedBy"
import WhyChooseSection from "../components/About/WhyChooseSection"
import VideoIntroductionSection from "../components/About/VideoIntroductionSection"
import HappyClientsSection from "../components/About/HappyClientsSection"
import GetStartedInfo from "../components/About/GetStartedInfo"
import BlogSection from "../components/BlogSection"
import FAQSection from "../components/FAQSection"
import MobileAppSection from "../components/MobileAppSection"
import StatisticsSection from "../components/StatisticsSection"
import WelcomeSection from "../components/WelcomeSection"
import CompaniesLogoStrip from "../components/CompaniesLogoStrip"
import Footer from "../components/Footer"
import TestimonialsSection from "../components/TestimonialsSection"

function HomePage() {
  return (
    <main className="m-0 p-0 h-screen ">
      <HeroSection />
      <TrustedBy />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <VideoIntroductionSection />
      <HappyClientsSection />
      <GetStartedInfo />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <MobileAppSection />
      <StatisticsSection />
      <WelcomeSection />  
      <CompaniesLogoStrip />
      <Footer />
    </main>
  )
}

export default HomePage