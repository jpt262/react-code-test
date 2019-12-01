import React, {ReactElement} from "react";
const useHistory = () => ({push: jest.fn()})
const Link = ReactElement => {
  return <span/>;
}
const BrowserRouter = ReactElement => {
  return <span/>;
}
const Switch = ReactElement => {
  return <span/>;
}
const Route = ReactElement => {
  return <span/>;
}

export {useHistory, Link, BrowserRouter, Switch, Route}
