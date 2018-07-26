import * as React from 'react';
import { Layout, LoginForm, RouteComponentProps } from 'webpanel-antd';
import { AuthContentProps, AuthFormProps, DummyAuth } from 'webpanel-auth';

import { users } from './pages/users';

const layout = (props: AuthContentProps) => (
    <Layout
        menu={[
            <Layout.MenuItem
                key="/"
                path="/"
                title="Dashboard"
                icon="exclamation-circle-o"
            />,
            <Layout.MenuItem
                path="/users/"
                key="/users/"
                title="Users"
                icon="user"
            />
        ]}
        structure={{
            '/': <Layout.StructureItem
                content="Hello world, welcome in demo app."
                name="Dashboard"
            />,
            '/users': <Layout.StructureItem
                name="Users"
                content={users}
            />,
            '/users/:id': <Layout.StructureItem
                content={(route: RouteComponentProps<any>) => {
                    return `This is detail page for user ${route.match.params.id}`;
                }}
                name="Users"
            />
        }}
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
