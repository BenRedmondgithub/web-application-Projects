import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the import path as necessary
import { onAuthStateChanged } from 'firebase/auth';

export default function useAuth() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return currentUser;
}
