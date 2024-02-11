import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedLayout = () => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/login" replace={true} />;
	}

	return <Outlet />;
};

export default ProtectedLayout;
