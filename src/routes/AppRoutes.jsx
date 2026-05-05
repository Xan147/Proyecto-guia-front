import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} /> {/*Pagina principal*/}
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        </>
    )
    
}