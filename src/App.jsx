import LoginProvider from "./context/LoginContext";
import LoginPage from "./pages/1LoginPage/LoginPage";
import RegisterPage from "./pages/2RegisterPage/RegisterPage";
import HabitPage from "./pages/3HabitPage/HabitPage";
import TodayPage from "./pages/4TodayPage/TodayPage"; 
import HistoricPage from "./pages/5HistoricPage/HistoricPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";


export default function App() {

    axios.defaults.headers.common['Authorization'] = 'RezoRWO4FXvcUVBAe3vVkwS5';

    return (
        <>
        <BrowserRouter>
           <LoginProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} /> 
                    <Route path="/cadastro" element={<RegisterPage />} /> 
                    <Route path="/habitos" element={<HabitPage />} /> 
                    <Route path="/hoje" element={<TodayPage />} /> 
                    <Route path="/historico" element={<HistoricPage />} />                   
                </Routes>
            </LoginProvider>
        </BrowserRouter>            
        </>
    )
}

