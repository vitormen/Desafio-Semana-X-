import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import * as C from "./styles";

const Profile = () => {
  return (
    <>
      <Navbar
        thereIsLoggedOut={false}
        thereIsProfile={true}
        thereIsUserEdit={true}
      />
      <C.Container>Profile</C.Container>
      <Footer />
    </>
  );
};

export default Profile;
