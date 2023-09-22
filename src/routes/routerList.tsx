import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Edit from "../pages/Edit-Profile";
import Profile from "../pages/Profile";
import PasswordRecovery from "../pages/PasswordRecovery";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/edit" element={<Edit />} />,
      <Route path="/profile" element={<Profile />} />,
        <Route path="/PasswordRecovery" element={<PasswordRecovery />} />,
    </Routes>
  );
};
