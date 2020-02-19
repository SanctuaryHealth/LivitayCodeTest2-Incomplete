import React from "react"
import { Route, Switch } from "react-router-dom"

import { Box, Typography } from "@material-ui/core"

import LoadingIndicator from "./components/loadingIndicator"
import useAuth from "./firebase/useAuth"
import LoginForm from "./forms/signinForm"

const App: React.FC<{}> = () => {
    const { authUser } = useAuth()

    if (authUser === undefined) {
        return <LoadingIndicator />
    }

    return (
        <Box display="flex" justifyContent="center" p={10}>
            <Switch>
                <Route path={"/login"}>
                    <LoginForm />
                </Route>

                <Route>
                    <Typography variant="h4">This should be dependant on logged in status</Typography>
                </Route>
            </Switch>
        </Box>
    )
}

export default App
