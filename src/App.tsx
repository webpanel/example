import * as React from 'react';
import { Layout, LoginForm, RouteComponentProps } from 'webpanel-antd';
import { AuthContentProps, AuthFormProps, DummyAuth } from 'webpanel-auth';

import { todos } from './pages/todos';
import { users } from './pages/users';

const layout = (props: AuthContentProps) => (
  <Layout
    menu={[
      <Layout.MenuItem key="/" title="Dashboard" icon="exclamation-circle-o" />,
      <Layout.MenuItem key="/users/" title="Users" icon="user" />,
      <Layout.MenuItem key="/todos/" title="Todos" icon="user" />
    ]}
    structure={[
      <Layout.StructureItem
        key="/"
        content="Hello world, welcome in demo app."
        name="Dashboard"
      />,
      <Layout.StructureItem key="/users" name="Users" content={users} />,
      <Layout.StructureItem
        key="/users/:id"
        content={(route: RouteComponentProps<any>) => {
          return `This is detail page for user ${route.match.params.id}`;
        }}
        name="Users"
    />,
    <Layout.StructureItem key="/todos" name="Todos" content={todos} />,
    ]}
    logout={props.logout}
  />
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
