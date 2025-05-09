import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './AdharNumber.css';

export default function AdharNumber() {
    const [adhar, setAdhar] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!/^\d{12}$/.test(adhar)) {
            toast.error('Aadhaar number must be exactly 12 digits.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3500/gov/v1/addhar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ addhar_number: adhar }),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('OTP sent successfully!');
                setTimeout(() => {
                    navigate('/enter-otp');
                }, 2000);
            } else {
                toast.error(result.message || 'Failed to send OTP');
            }
        } catch (error) {
            toast.error('Server error. Please try again later.');
            console.error('Error:', error);
        }
    };

    return (
        <div className="adhar-container">
            <h2 className="adhar-title">Aadhaar Verification</h2>
            <form onSubmit={handleSubmit} className="adhar-form">
                <label className="adhar-label">Enter Aadhaar Number</label>
                <input
                    type="text"
                    value={adhar}
                    onChange={(e) => setAdhar(e.target.value)}
                    maxLength="12"
                    placeholder="12-digit Aadhaar"
                    className="adhar-input"
                />
                <button type="submit" className="adhar-button">Send OTP</button>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
