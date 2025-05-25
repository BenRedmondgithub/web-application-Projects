import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Add any logout logic here (clear tokens, etc.)
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold mb-4">Hello, User!</h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserDashboard;