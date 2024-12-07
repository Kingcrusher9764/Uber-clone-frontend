import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import DriverLogin from "./pages/DriverLogin";
import DriverSignup from "./pages/DriverSignup";
import UserProtectedRoute from "./pages/UserProtectedRoute";
import UserLogout from "./pages/UserLogout";
import DriverHome from "./pages/DriverHome";
import DriverProtectedRoute from "./pages/DriverProtectedRoute";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/driver-login" element={<DriverLogin />} />
            <Route path="/driver-signup" element={<DriverSignup />} />
            <Route path="/home" element={
                <UserProtectedRoute>
                    <Home />
                </UserProtectedRoute>
            } />
            <Route path="/user/logout" element={<UserLogout />} />
            <Route path="/driver-home" element={
                <DriverProtectedRoute>
                    <DriverHome />
                </DriverProtectedRoute>
            } />
        </Routes>
    )
}
