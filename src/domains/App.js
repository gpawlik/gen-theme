import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import PostList from 'domains/Posts/PostList';
import PostSingle from 'domains/Posts/PostSingle';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/posts" />
          <DefaultLayout path="/posts" component={PostList} />
          <DefaultLayout path="/post/:id" component={PostSingle} />
        </Switch>
      </div>
    );
  }
}
