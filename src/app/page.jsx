import UnderHeader from "../components/UnderHeader/UnderHeader";
import FreeTrial from "../components/FreeTrial";
import TrialDescription from "../components/TrialDescription";
import AboutTutor from "../components/AboutTutor";
import Services from "../components/Services";
import GetStarted from "../components/GetStarted";
import { Reviews } from "../components/Reviews/Reviews";
import { ReviewsList } from "../components/Reviews/ReviewsList";

export default async function Home() {
  return (
    <>
      <main>
        <UnderHeader />
        <FreeTrial />
        <TrialDescription />
        <Services />
        {/*<SeveralLessons />*/}
        <AboutTutor />
        <Reviews>
          <ReviewsList />
        </Reviews>
        <GetStarted />
      </main>
    </>
  );
}
