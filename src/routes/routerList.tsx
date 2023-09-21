import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Edit from "../pages/Edit-Profile";
import Profile from "../pages/Profile";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/edit" element={<Edit />} />,
      <Route path="/profile" element={<Profile />} />,
    </Routes>
  );
};
