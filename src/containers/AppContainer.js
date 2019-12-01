import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ScrollTop from '../components/ScrollTop';
import SearchShops from './SearchShops.js';
import ShopDetail from './ShopDetail.js';
import TopNav from '../components/TopNav.js';
import { Switch, Route, useHistory } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { GRAPHQL_URI } from '../constants/api'

const client = new ApolloClient({
  link: createHttpLink({
    uri: GRAPHQL_URI,
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

export default function AppContainer() {
  const history = useHistory()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginBottom: 150}}>
        <TopNav history={history} />
        <ApolloProvider client={client}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <SearchShops history={history} />} />
            <Route
              exact
              path="/shop/:id"
              component={ShopDetail} />
          </Switch>
        </ApolloProvider>
      </Container>
      <ScrollTop />
    </React.Fragment>
  );
}
