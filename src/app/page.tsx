import UnderHeader from "../components/UnderHeader/UnderHeader";
import FreeTrial from "../components/FreeTrial";
import TrialDescription from "../components/TrialDescription";
import AboutTutor from "../components/AboutTutor";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import SeveralLessons from "../components/SeveralLessons";

export default function Home() {
  return (
    <>
      <main>
        <UnderHeader />
        <FreeTrial />
        <TrialDescription />
        <Services />
        <SeveralLessons />
        <AboutTutor />
        <Reviews />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
