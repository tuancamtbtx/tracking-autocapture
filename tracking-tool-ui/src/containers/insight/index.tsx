import React from "react";
import {Tabs} from "antd";

import FunnelContainer from "./funnel";
import RetentionContainer from "./retention";
import SegmentContainer from './segment'
import { HeaderWrapper, ContentWrapper } from '@/components/wrapper'

const InsightContainer: React.FC = () => {
    const onChange = (key:string) => {
        console.log(key);
    };
    const items = [
        {
          key: '1',
          label: 'Funnel',
          children: <FunnelContainer />,
        },
        {
          key: '2',
          label: 'Retention',
          children: <RetentionContainer/>,
        },
        {
          key: '3',
          label: 'Segment',
          children: <SegmentContainer/>,
        },
      ];
  return (
      <ContentWrapper>
      <HeaderWrapper>
        <h1>Insight</h1>
      </HeaderWrapper>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ContentWrapper>
  );
};
export default InsightContainer;