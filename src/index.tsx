import "./styles.css"

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client"

import App from "./app"
import AuthContextProvider from "./firebase/AuthContext"

const httpLink = createHttpLink({
    uri: "https://livitay-test.appspot.com/graphql"
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <AuthContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthContextProvider>
    </ApolloProvider>,
    document.getElementById("root")
)
