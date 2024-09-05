import React from 'react';
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { Heatmap } from '@ant-design/charts';


const RetentionContainer = () => {
    const data = [
        { month: 'Jan', week: '1', value: 70 },
        { month: 'Jan', week: '2', value: 50 },
        { month: 'Jan', week: '3', value: 30 },
        { month: 'Jan', week: '4', value: 20 },
        { month: 'Feb', week: '1', value: 60 },
        { month: 'Feb', week: '2', value: 40 },
        { month: 'Feb', week: '3', value: 20 },
        { month: 'Feb', week: '4', value: 10 },
        { month: 'Mar', week: '1', value: 50 },
        { month: 'Mar', week: '2', value: 30 },
        { month: 'Mar', week: '3', value: 10 },
        { month: 'Mar', week: '4', value: 5 },
        // Add more data as needed
      ];
    
      const config = {
        data,
        xField: 'week',
        yField: 'month',
        colorField: 'value',
        color: ['#d6e4ff', '#adc6ff', '#85a5ff', '#597ef7', '#2f54eb'],
        meta: {
          week: { type: 'cat' },
          month: { type: 'cat' },
        },
        tooltip: {
          showTitle: false,
          formatter: (datum:any) => ({
            name: 'Retention Rate',
            value: `${datum.value}%`,
          }),
        },
      };
    
      return (
        <div className="layout">
            <div className="site-layout-content">
              <Card title="Retention Chart" bordered={false}>
                <Heatmap {...config} />
              </Card>
            </div>
        </div>
      );
  };
export default RetentionContainer;