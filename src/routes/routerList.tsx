import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Edit from "../pages/Edit-Profile";
import SignUp from "../pages/Sign-up"

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
};
