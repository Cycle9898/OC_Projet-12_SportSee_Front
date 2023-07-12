import { useFetchData } from "../utils/hooks";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LoadingSpinner from "../components/LoadingSpinner";

/* 
React component that represent the Profile Page
*/
function ProfilePage() {
  // Fetch user main data, error and loading state with custom hook
  const { requestedData,error,isDataLoading } = useFetchData("userInfos");

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
          <section className="main-content">
            <div className="main-content__title">
              <h1>Bonjour <span>{requestedData?.firstName}</span></h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="main-content__charts-grid">

            </div>
          </section>
        )}
      </main >
    </>
  );
}

export default ProfilePage;