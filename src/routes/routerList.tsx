import { Route, Routes } from "react-router-dom";
import  Login   from '../pages/Login';

export const RouteList = () => {

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    )
}