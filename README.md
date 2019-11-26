This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## MatchSquare Code Test

#### Setup
Clone this repo and use this React project as a starting point. There is already a simple ping query with the necessary GraphQL endpoint.

#### Test 1: List Shops
Replace the ping GraphQL query with the following GraphQL query to generate a list of shop names.
```
query {shops ( first: 20, offset: 0, sortBy: name )
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
}
```
#### Test 2: Pagination
- Use the `first` and `offset` query parameters to return a specified number of shops in a series of pages. The `first` parameter indicates the number of items to return. The `offset` parameter indicates the offset position to start returning items from the data set. (i.e. { first: 20, offset: 0 } returns the first page of 20 items. { first: 20, offset: 20 } returns the second page of 20 items.) 
- The `data.shops.totalCount` value in the query response indicates the number of shops in the data set.
#### Test 3: Shop Detail Page
- Create a route for a shop detail page
- When a shop name is clicked from the list of shops, the shop detail page should be shown with the name of the shop and the shop logo.
#### Deploy
Create a zip archive of the project minus the node_modules directory and email it to your MatchSquare contact.