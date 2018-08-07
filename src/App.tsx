import * as React from 'react';
import { Layout, LoginForm, RouteComponentProps } from 'webpanel-antd';
import { AuthContentProps, AuthFormProps, DummyAuth } from 'webpanel-auth';

import { charts } from './pages/charts';
import { users } from './pages/users';
import { userDetail } from './pages/users-detail';

const layout = (props: AuthContentProps) => (
  <Layout logout={props.logout}>
    <Layout.Menu>
      <Layout.MenuItem key="/" title="Dashboard" icon="exclamation-circle-o" />
      <Layout.MenuItem key="users" title="Users" icon="user" />
      <Layout.MenuItem key="charts" title="Charts" icon="line-chart" />
      <Layout.MenuItem key="menu" title="Menu tree" icon="folder">
        <Layout.MenuItem key="item1" title="Item 1" icon="folder" />
        <Layout.MenuItem key="item2" title="Item 2" icon="folder">
          <Layout.MenuItem key="notfound" title="Not found" icon="folder" />
        </Layout.MenuItem>
      </Layout.MenuItem>
    </Layout.Menu>
    <Layout.Structure>
      <Layout.StructureItem
        key="/"
        content="Hello world, welcome in demo app."
        name="Dashboard"
      />
      <Layout.StructureItem key="users" name="Users" content={users}>
        <Layout.StructureItem
          key=":id"
          content={(route: RouteComponentProps<any>) => {
            return userDetail(route.match.params.id);
          }}
          name="Detail"
        />
      </Layout.StructureItem>
      <Layout.StructureItem key="charts" name="Charts" content={charts} />
      <Layout.StructureItem key="menu" name="Tree">
        <Layout.StructureItem
          key="item1"
          name="Item 1"
          content={'Menu tree page1 content'}
        />
      </Layout.StructureItem>
    </Layout.Structure>
  </Layout>
);

export const content = (
  <DummyAuth
    username="demo"
    password="demo"
    content={layout}
    form={(props: AuthFormProps) => {
      return <LoginForm authorizationInfo={props} />;
    }}
  />
);
