import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './SendOTP.css';

export default function SendOTP() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (/^\d{6}$/.test(otp)) {
            toast.success('OTP verified successfully!');
            navigate('/aadhaar-details');
        } else {
            toast.error('Invalid OTP. Must be 6 digits.');
        }
    };

    const handleResendOTP = () => {
        // Add resend OTP logic here if needed
        toast.info('OTP has been resent!');
    };

    return (
        <div className="otp-container">
            <h2 className="otp-title">Enter OTP</h2>
            <form onSubmit={handleOtpSubmit} className="otp-form">
                <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength="6"
                    placeholder="6-digit OTP"
                    className="otp-input"
                />
                <button type="submit" className="otp-button">Verify OTP</button>
                <button type="button" onClick={handleResendOTP} className="otp-resend-button">
                    Resend OTP
                </button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}

