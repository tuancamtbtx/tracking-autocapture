import React, {useState} from 'react';
import {Card, Select } from 'antd';
import { Funnel } from '@ant-design/charts';
import { Col, Row , Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const FunnelContainer = () => {
    const [formFields, setFormFields] = useState([
        { id: '1', label: 'Action Name', name: 'name', type: 'select', rules: [{ required: true, message: 'Please input the experiment name!' }] },
      ]);
    const data = [
      { stage: 'Visitors', count: 5000 },
      { stage: 'Downloads', count: 3500 },
      { stage: 'Sign-ups', count: 2000 },
      { stage: 'Purchases', count: 800 },
    ];
  
    const config = {
      data,
      xField: 'stage',
      yField: 'count',
      label: {
        text: (d:any) => `${d.stage}\n${d.count}`,
      },
    };

  const handleOk = (values:any) => {
  };


  const onDragEnd = (result:any) => {
    if (!result.destination) return;

    const items = Array.from(formFields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

  };

  const columns = [
    {
      title: 'Experiment Name',
      dataIndex: 'name',
      key: 'name',
    }
  ];

    return (
      <div>
          <Row>
            <Col span={8}>
            <Card bordered={false}>
            <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="formFields">
              {(provided:any) => (
                <Form onFinish={handleOk} ref={provided.innerRef} {...provided.droppableProps}>
                  {formFields.map((field, index) => (
                    <Draggable key={field.id} draggableId={field.id} index={index}>
                      {(provided:any) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Form.Item
                            label={field.label}
                            name={field.name}
                            rules={field.rules}
                          >
                            {field.type === 'input' && <Input />}
                            {field.type === 'select' && <Select />}
                          </Form.Item>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Query
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Droppable>
          </DragDropContext>
            </Card>
           
            </Col>
            <Col span={16}>
            <Card bordered={false}>
              <Funnel {...config} />
            </Card>
            </Col>
          </Row>
      </div>
    );
  };
export default FunnelContainer;