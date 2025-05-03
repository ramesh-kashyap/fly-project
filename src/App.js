import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
} from "react-router-dom";

import Dashboard from "./pages/home/Dashboard";
import NodeDetails from "./pages/home/NodeDetails";

import RechargeFunds from "./pages/invest/RechargeFunds";
import WithdrawReq from "./pages/Withdraw/WithdrawReq";
import AddWallet from "./pages/Withdraw/AddWallet";
import AddWalletAddress from "./pages/Withdraw/AddWalletAddress";
import Whistory from "./pages/Withdraw/Whistory";
import History from "./pages/invest/History";
import Trade from "./pages/team/Trade";
import Assets from "./pages/Withdraw/Assets";
import Server from "./pages/profile/Server";
import ChangePassword from "./pages/profile/ChangePassword";
import PaymentPassword from "./pages/profile/PaymentPassword";
import Team from "./pages/team/Team";
import Level from "./pages/team/Level";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Footer from "./components/Footer";
import TradingChart from "./pages/home/TradingChart";
import Smartrade from "./pages/home/Smartrade";
import { AuthProvider } from "./components/AuthContext";
import { ProtectedRoute, PublicRoute } from './Helper/helper';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Setting from "./pages/home/Setting";

function AppContent() {
    const location = useLocation();
    const hiddenFooterRoutes = [
        "/",                // Login default
        "/login",
        "/register",
        "/Team",
        "/History",
        "/Whistory",
        "/WithdrawReq",
        "/Smartrade",
        "/NodeDetails",
        "/RechargeFunds",
        "/AddWalletAddress",
        "/AddWallet",
        "/ForgotPassword",
        "/ChangePassword"
    ];

    // Check if current path matches any of the above OR dynamic TradingChart route
    const hideFooter =
        hiddenFooterRoutes.includes(location.pathname) ||
        location.pathname.startsWith("/dashboard/TradingChart");

    return (
        <div className="uni-body pages-index-index">
            <div className="uni-app uni-app--showtabbar uni-app--maxwidth">
                <div className="ellipse" style={{ height: 60 }}></div>

                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                    <Route path="/ForgotPassword" element={<PublicRoute><ForgotPassword /></PublicRoute>} />

                    {/* Protected Routes */}
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/Setting" element={<ProtectedRoute><Setting /></ProtectedRoute>} />
                    <Route path="/ChangePassword" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                    <Route path="/trade" element={<ProtectedRoute><Trade /></ProtectedRoute>} />
                    <Route path="/assets" element={<ProtectedRoute><Assets /></ProtectedRoute>} />
                    <Route path="/server" element={<ProtectedRoute><Server /></ProtectedRoute>} />
                    <Route path="/PaymentPassword" element={<ProtectedRoute><PaymentPassword /></ProtectedRoute>} />

                    <Route path="/Team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
                    <Route path="/NodeDetails" element={<ProtectedRoute><NodeDetails /></ProtectedRoute>} />
                    <Route path="/WithdrawReq" element={<ProtectedRoute><WithdrawReq /></ProtectedRoute>} />
                    <Route path="/History" element={<ProtectedRoute><History /></ProtectedRoute>} />
                    <Route path="/Whistory" element={<ProtectedRoute><Whistory /></ProtectedRoute>} />
                    <Route path="/Smartrade" element={<ProtectedRoute><Smartrade /></ProtectedRoute>} />
                    <Route path="/RechargeFunds" element={<ProtectedRoute><RechargeFunds /></ProtectedRoute>} />
                    <Route path="/dashboard/TradingChart/:symbol" element={<ProtectedRoute><TradingChart /></ProtectedRoute>} />
                    <Route path="/add-wallet" element={<ProtectedRoute><AddWallet /></ProtectedRoute>} />
                    <Route path="/Add-WalletAddress/:networkType" element={  <ProtectedRoute><AddWalletAddress /></ProtectedRoute>} />
                </Routes>

                {/* Footer only if route not in hidden list */}
                {!hideFooter && <Footer />}
                <ToastContainer />
            </div>
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
           
                <AppContent />
           
        </AuthProvider>
    );
}

export default App;
