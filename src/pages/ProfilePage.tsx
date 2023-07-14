import { useFetchData } from "../utils/hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LoadingSpinner from "../components/LoadingSpinner";
// import ActivityBarChart from "../components/ActivityBarChart";

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
          fetchedData.length === 4 &&
          <section className="main-content">
            <div className="main-content__title">
              <h1>Bonjour <span>{fetchedData[0].firstName}</span></h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="main-content__charts-grid">
              {/* <ActivityBarChart chartData={fetchedData[1].sessions} /> */}
              <div style={{ width: 258,height: 263,gridArea: "LC",backgroundColor: "red" }}>LineChart durée sessions</div>
              <div style={{ width: 258,height: 263,gridArea: "RC",backgroundColor: "darkslategrey" }}>RadarChart type activité</div>
              <div style={{ width: 258,height: 263,gridArea: "RBC",backgroundColor: "coral" }}>RadialBarChart Score moyen</div>
              <div style={{ width: 258,height: 613,gridArea: "KIC",backgroundColor: "lightblue" }}>Card infos clés</div>
            </div>
          </section>
        )}
      </main >
    </>
  );
}

export default ProfilePage;