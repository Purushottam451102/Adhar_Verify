import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdharNumber from "./AdharNumber";
import "./App.css";
import SendOTP from "./SendOTP";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdharNumber />} />
                <Route path="/enter-otp" element={<SendOTP />} />
            </Routes>
        </Router>
    );
}
