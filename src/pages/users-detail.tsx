import { Card, Form } from 'antd';
import * as React from 'react';
import { Input, ResourceForm, ResourceSelect } from 'webpanel-antd';
import {
  Resource,
  ResourceCollection,
  ResourceCollectionLayer,
  ResourceLayer
} from 'webpanel-data';

import { api } from '../model/api';

export const userDetail = (id: string) => (
  <ResourceCollectionLayer
    name="users"
    dataSource={api}
    fields={[]}
    render={(resource: ResourceCollection) => {
      return (
        <Card title="Users">
          <ResourceLayer
            name="users"
            dataSource={api}
            id={id}
            fields={[]}
            render={(detail: Resource) => (
              <ResourceForm formResource={detail}>
                <Form.Item>
                  <Input name="name" />
                </Form.Item>
                <Form.Item>
                  <Input name="username" />
                </Form.Item>
                <Form.Item>
                  <Input name="email" />
                </Form.Item>
                <Form.Item>
                  <ResourceSelect
                    labelKey={(v: any) => `${v.name} (${v.username})`}
                    valueKey={(v: any) => `${v.id}`}
                    resourceCollection={resource}
                    mode="tags"
                    name="friends"
                  />
                </Form.Item>
              </ResourceForm>
            )}
          />
        </Card>
      );
    }}
  />
);
