import UnderHeader from "../components/UnderHeader/UnderHeader";
import FreeTrial from "../components/FreeTrial";
import TrialDescription from "../components/TrialDescription";
import AboutTutor from "../components/AboutTutor";
import Services from "../components/Services";
import Reviews from "../components/Reviews";
import GetStarted from "../components/GetStarted";
import SeveralLessons from "../components/SeveralLessons";
import { apiUrl } from "../axiosClient";

export default async function Home() {
  const reviews = await fetchReviews();

  return (
    <>
      <main>
        <UnderHeader />
        <FreeTrial />
        <TrialDescription />
        <Services />
        {/*<SeveralLessons />*/}
        <AboutTutor />
        <Reviews reviews={reviews} />
        <GetStarted />
      </main>
    </>
  );
}

async function fetchReviews() {
  return fetch(apiUrl + "/comments").then((response) => response.json());
}
