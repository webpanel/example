import { Card } from 'antd';
import * as React from 'react';
import { Area, Line, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { ResourceCollection, ResourceCollectionLayer } from 'webpanel-data';
import { ResourceAreaChart, ResourceLineChart } from 'webpanel-recharts';

import { api } from '../model/api';

export const charts = (
  <ResourceCollectionLayer
    name="todos"
    dataSource={api}
    fields={[]}
    render={(resource: ResourceCollection) => (
      <>
        <Card title="Line Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceLineChart resourceCollection={resource}>
              <Line type="monotone" dataKey={data => data.title.length} />
              <XAxis dataKey="title" hide={true} />
              <Tooltip />
            </ResourceLineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Area Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceAreaChart resourceCollection={resource}>
              <Area type="step" dataKey={data => data.title.length} />
              <XAxis dataKey="title" hide={true} />
              <Tooltip />
            </ResourceAreaChart>
          </ResponsiveContainer>
        </Card>
      </>
    )}
  />
);
