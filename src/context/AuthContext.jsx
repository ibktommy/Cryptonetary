import { useState, useEffect, createContext, useContext } from "react"
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const UserAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {
  // Set User State
  const [user, setUser] = useState({})

  // Setting Auth Function-Values
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    return setDoc(doc(db, 'users', email), {watchList: []})
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])



  return (
    <UserAuthContext.Provider value={{
      register,
      login,
      logout,
      user
    }}>
      { children }
    </UserAuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserAuthContext)
}
