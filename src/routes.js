import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import DefaultLayout from 'layouts/DefaultLayout';
import PostList from 'domains/Posts/PostList';
import PostSingle from 'domains/Posts/PostSingle';

export default (
  <BrowserRouter>
    <div>
      <Switch>
        <Redirect exact from="/" to="/posts" />
        <DefaultLayout path="/posts" component={PostList} />
        <DefaultLayout path="/post/:id" component={PostSingle} />
      </Switch>
    </div>
  </BrowserRouter>
);
