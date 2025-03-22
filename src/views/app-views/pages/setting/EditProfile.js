import React, { useState, useEffect } from 'react';
import { Form, Button, Input, DatePicker, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { useParams, useHistory } from 'react-router-dom';
import { useGetUserByIdQuery } from 'redux/usersApi';
import Loading from 'components/shared-components/Loading';

export default function EditProfile () {
  const { id } = useParams();
    const { data } = useGetUserByIdQuery(id);
    const [modifyData, setModifyData] = useState(null);
    const history = useHistory();

  const onFinish = () => {
    const key = 'updatable';
    message.loading({ content: 'Updating...', key });
    setTimeout(() => {
      message.success({ content: 'Done!', key });
      history.push('/app/pages/user-list')
    }, 1000);
  };
  useEffect(() => {
    if (data) {
      const modifiedUser = {
        ...data,
        phone: data.phone.split(' ')[0],
        address: `${data.address.street} ${data.address.suite}`,
        city:`${data.address.city}`,
        postcode: `${data.address.zipcode}`
      };
      setModifyData(modifiedUser);
    }
  }, [data]);
  return (
    <>
    {modifyData ? (
      <div>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
      </Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={modifyData}
          onFinish={onFinish}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Date of Birth" name="dateOfBirth">
                    <DatePicker className="w-100" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Postcode" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">Save Changes</Button>
            </Col>
          </Row>
        </Form>
      </div>
      </div>) : ( <Loading cover="content"/>)}
      
    </>
  );
};