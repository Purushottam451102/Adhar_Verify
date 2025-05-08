import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './SendOTP.css';

export default function SendOTP() {
    const [otp, setOtp] = useState('');

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        if (/^\d{6}$/.test(otp)) {
            toast.success('OTP verified successfully!');
            // Proceed with the next step (e.g., create Safe Rate entry)
        } else {
            toast.error('Invalid OTP. Must be 6 digits.');
        }
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
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
