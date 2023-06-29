import UnderHeader from "../components/UnderHeader/UnderHeader";
import FreeTrial from "../components/FreeTrial";
import TrialDescription from "../components/TrialDescription";
import AboutTutor from "../components/AboutTutor";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <UnderHeader />
        <FreeTrial />
        <TrialDescription />
        <AboutTutor />
        <Services />
        <Reviews />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
