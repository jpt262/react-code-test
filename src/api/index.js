import gql from "graphql-tag";

const getList = (first, offset) => {
  return gql`query {
    shops ( first: ${first}, offset: ${offset}, sortBy: name ) {
      totalCount
      nodes {
        _id
        name
        shopLogoUrls {
          primaryShopLogoUrl
        }
      }
    }
  }`
}

const getShop = (id) => {
  return gql`query {
    shop(id: "${id}") {
      _id
      name
      shopLogoUrls {
        primaryShopLogoUrl
      }
    }
  }`
}

export {getList, getShop}
