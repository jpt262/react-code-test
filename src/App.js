import React from 'react';
import fetch from 'node-fetch';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { GRAPHQL_URI, LIST_SHOPS_QUERY } from './constants/api'
import './App.css';

const GQL_QUERY = gql(LIST_SHOPS_QUERY)

const client = new ApolloClient({
  link: createHttpLink({
    uri: GRAPHQL_URI,
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

const Content = () => {
  const {
    data: { shops = {} } = {},
    error,
    loading
  } = useQuery(GQL_QUERY, {});

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
        {shops.nodes.map(({name}) => <p>{name}</p>)}
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
