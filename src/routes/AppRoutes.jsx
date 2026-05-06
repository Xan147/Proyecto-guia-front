import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/comHome/Nav";

export default function AppRoutes() {
    return (
        <>
        <Routes>
            <Route element={<NavBar />}>
                <Route path="/" element={<Home />} /> {/*Pagina principal*/}
                <Route path="/*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
        </>
    )
    
}