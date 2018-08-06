import { Card } from 'antd';
import * as React from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ResourceCollection, ResourceCollectionLayer } from 'webpanel-data';
import {
  ResourceAreaChart,
  ResourceBarChart,
  ResourceComposedChart,
  ResourceLineChart,
  ResourceRadarChart,
  ResourceRadialBarChart
} from 'webpanel-recharts';

import { api } from '../model/api';

const valueDataKey = 'username';
const getValue = (data: any) => data[valueDataKey].length;

export const charts = (
  <ResourceCollectionLayer
    name="users"
    dataSource={api}
    fields={[]}
    render={(resource: ResourceCollection) => (
      <>
        <Card title="Line Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceLineChart resourceCollection={resource}>
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey={valueDataKey} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={getValue} />
            </ResourceLineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Area Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceAreaChart resourceCollection={resource}>
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey={valueDataKey} />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey={getValue} />
            </ResourceAreaChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Bar Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceBarChart resourceCollection={resource}>
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey={valueDataKey} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={getValue} fill="#49A49D" />
            </ResourceBarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Composed Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceComposedChart resourceCollection={resource}>
              <CartesianGrid strokeDasharray="5" />
              <XAxis dataKey={valueDataKey} />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey={getValue} fill="#EF6F6C" />
              <Bar dataKey={getValue} fill="#49A49D" />
            </ResourceComposedChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Radar Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceRadarChart resourceCollection={resource}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey={valueDataKey}
                tickFormatter={(value: string) => value}
              />
              <PolarRadiusAxis tickFormatter={(value: string) => value} />
              <Radar dataKey={getValue} fill="#EF6F6C" fillOpacity={0.6} />
            </ResourceRadarChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Radial Bar Chart">
          <ResponsiveContainer width="100%" aspect={4}>
            <ResourceRadialBarChart
              resourceCollection={resource}
              innerRadius={20}
              outerRadius={140}
              barSize={10}>
              <RadialBar dataKey={getValue} background={true} />
            </ResourceRadialBarChart>
          </ResponsiveContainer>
        </Card>
      </>
    )}
  />
);
