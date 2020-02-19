import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import { Box, Button, TextField, Typography } from "@material-ui/core"

import useAuth from "../firebase/useAuth"

const LoginForm: React.FC<{}> = () => {
    const history = useHistory()
    const { authUser, firebase } = useAuth()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    if (authUser !== undefined && authUser !== null) {
        return (
            <Box textAlign="center">
                <Typography variant="h4">Welcome back</Typography>

                <br />

                <Button variant="contained" style={{ width: 350 }} onClick={() => firebase.auth().signOut()}>
                    Logout
                </Button>

                <br />
                <br />

                <Button variant="contained" color="secondary" style={{ width: 350 }} onClick={() => history.push("/")}>
                    Activities Page
                </Button>
            </Box>
        )
    }

    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault()

                try {
                    await firebase.auth().signInWithEmailAndPassword(email, password)

                    history.push("/")
                } catch (error) {
                    alert(error)
                }
            }}
        >
            <Typography variant="h4">Sign in</Typography>

            <br />

            <TextField value={email} onChange={(event) => setEmail(event.target.value)} variant="outlined" label="Email" />

            <br />
            <br />

            <TextField value={password} onChange={(event) => setPassword(event.target.value)} variant="outlined" label="Password" type="password" />

            <br />
            <br />

            <Button type="submit" variant="contained" color="secondary">
                Sign in
            </Button>
        </form>
    )
}
export default LoginForm
