import { useState, useEffect, createContext, useContext } from "react"
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const UserAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {
  // Set User State
  const [user, setUser] = useState([])

  // Setting Auth Function-Values
  const register = async (email, password, confirmPassword) => {
		await createUserWithEmailAndPassword(auth, email, password, confirmPassword);

    try {
      await setDoc(doc(db, 'users', email), {
        watchList: [],
      })
    } catch (error) {
      console.log(error.message)
    }
    
	};

	const login = async (email, password) => {
		return await signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserAuthContext.Provider
			value={{
				register,
				login,
				logout,
				user,
			}}
		>
			{children}
		</UserAuthContext.Provider>
	);
}

export const UserAuth = () => {
  return useContext(UserAuthContext)
}
