import UnderHeader from "../components/UnderHeader/UnderHeader";
import FreeTrial from "../components/FreeTrial";
import TrialDescription from "../components/TrialDescription";
import AboutTutor from "../components/AboutTutor";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <UnderHeader />
      <FreeTrial />
      <TrialDescription />
      <AboutTutor />
      <Services />
    </main>
  );
}
