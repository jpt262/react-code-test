import React from 'react';
import fetch from 'node-fetch';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import './App.css';

const PING = gql`
  query {ping}
`;

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://code-test.matchsquare.com/graphql-beta",
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

const Content = () => {
  const {
    data: { ping = "" } = {},
    error,
    loading
  } = useQuery(PING, {});

  if(error){
    return (
      <p>{error}</p>
    )
  }

  if(loading){
    return (
      <p>{loading}</p>
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>ping: {ping}</p>
      </header>
    </div>
  );
}

const App = () => (
  <ApolloProvider client={client}>
    <Content />
  </ApolloProvider>
)

export default App;
