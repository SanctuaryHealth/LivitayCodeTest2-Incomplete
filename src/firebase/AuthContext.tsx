/* eslint-disable @typescript-eslint/array-type */

import "firebase/auth"

import * as firebase from "firebase"
import React, { createContext, useEffect, useState } from "react"

firebase.initializeApp({
    apiKey: "AIzaSyCVdvUYYasTqouD1MyW8gcKXcFTd8ExnVE",
    authDomain: "livitay-test.firebaseapp.com",
    databaseURL: "https://livitay-test.firebaseio.com",
    projectId: "livitay-test",
    storageBucket: "livitay-test.appspot.com",
    messagingSenderId: "279265658629",
    appId: "1:279265658629:web:1519be3651e9c7b815996c"
})

export interface IAuthContext {
    authUser?: firebase.User | null
    firebase: typeof firebase
}

const defaultData: IAuthContext = { firebase }

export const AuthContext = createContext(defaultData)

const AuthContextProvider: React.FC<{}> = (props) => {
    const [authUser, setAuthUser] = useState<firebase.User | null>()

    useEffect(() => {
        const firebaseUnsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser !== null) {
                if (!firebaseUser.emailVerified) {
                    firebaseUser.sendEmailVerification()
                    alert("Please verify your email")

                    firebase.auth().signOut()
                } else {
                    return setAuthUser(firebaseUser)
                }
            }

            setAuthUser(null)
        })

        return () => firebaseUnsubscribe()
    }, [])

    return <AuthContext.Provider value={{ authUser, firebase }}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider
