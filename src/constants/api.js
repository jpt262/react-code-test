const GRAPHQL_URI = "http://code-test.matchsquare.com/graphql-beta"

const LIST_SHOPS_QUERY = `query {
  shops ( first: 20, offset: 0, sortBy: name )
    {
      totalCount
      nodes
      {
        _id
        name
        shopLogoUrls {
          primaryShopLogoUrl
        }
      }
    }
  }`;

export {
  GRAPHQL_URI,
  LIST_SHOPS_QUERY
}
