import React from 'react';
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { Bar } from '@ant-design/charts';


const SegmentContainer = () => {
  const data = [
    { segment: 'A', month: 'Jan', value: 30 },
    { segment: 'A', month: 'Feb', value: 40 },
    { segment: 'A', month: 'Mar', value: 35 },
    { segment: 'B', month: 'Jan', value: 20 },
    { segment: 'B', month: 'Feb', value: 25 },
    { segment: 'B', month: 'Mar', value: 30 },
    { segment: 'C', month: 'Jan', value: 50 },
    { segment: 'C', month: 'Feb', value: 55 },
    { segment: 'C', month: 'Mar', value: 60 },
    // Add more data as needed
  ];

  const config = {
    data,
    isGroup: true,
    xField: 'value',
    yField: 'month',
    seriesField: 'segment',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <div>
        <div className="site-layout-content">
          <Card title="Segmented Analysis" bordered={false}>
            <Bar {...config} />
          </Card>
        </div>
      </div>
  );
};

export default SegmentContainer;