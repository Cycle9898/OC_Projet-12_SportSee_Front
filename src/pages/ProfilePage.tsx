import Header from "../components/Header";
import SideBar from "../components/SideBar";

/* 
React component that represent the Profile Page
*/
function ProfilePage() {
  return (
    <>
      <Header />

      <main className="Profile-main">
        <SideBar />

        <div>test</div>
      </main>
    </>
  );
}

export default ProfilePage;
