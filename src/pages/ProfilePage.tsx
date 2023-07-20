import { useFetchData } from "../utils/hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LoadingSpinner from "../components/LoadingSpinner";
import ActivityBarChart from "../components/ActivityBarChart";
import AverageSessionsLineChart from "../components/AverageSessionsLineChart";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import ScoreRadialBarChart from "../components/ScoreRadialBarChart";

/* 
React component that represent the Profile Page
*/
function ProfilePage() {
  // Fetch user main data, error and loading state with custom hook
  const { fetchedData,error,isDataLoading } = useFetchData();

  //if there is an error with API call, display an error message on the page
  if (error) {
    return (
      <>
        <Header />

        <main className="Profile-main">
          <SideBar />

          <p className="error-msg">Suite à une erreur, vos données utilisateur n'ont pu être récupérées.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="Profile-main">
        <SideBar />

        {isDataLoading ? (
          <LoadingSpinner />
        ) : (
          fetchedData.length > 0 &&
          <section className="main-content">
            <div className="main-content__title">
              <h1>Bonjour <span>{fetchedData[0].firstName}</span></h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="main-content__charts-grid">
              <ActivityBarChart chartData={fetchedData[1].sessions} />
              <AverageSessionsLineChart chartData={fetchedData[2].sessions} />
              <PerformanceRadarChart chartData={fetchedData[3].data} />
              <ScoreRadialBarChart chartData={[{ dailyScore: fetchedData[0].dailyScore }]} />
              <div style={{ maxWidth: 258,height: 613,gridArea: "KIC",backgroundColor: "lightblue" }}>Card infos clés</div>
            </div>
          </section>
        )}
      </main >
    </>
  );
}

export default ProfilePage;