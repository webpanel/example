import { Card } from 'antd';
import * as React from 'react';
import { Line, Tooltip, XAxis } from 'recharts';
import { ResourceCollection, ResourceCollectionLayer } from 'webpanel-data';
import { ResourceLineChart } from 'webpanel-recharts';

import { api } from '../model/api';

export const charts = (
  <ResourceCollectionLayer
    name="todos"
    dataSource={api}
    fields={[]}
    render={(resource: ResourceCollection) => {
      return (
        <Card title="Line Chart">
            <ResourceLineChart resourceCollection={resource} width={1280} height={600}>
                <Line type="monotone" dataKey={data => data.title.length} stroke="#aaa" />
                <XAxis dataKey="title" hide={true} />
                <Tooltip />
            </ResourceLineChart>
        </Card>
      );
    }}
  />
);
