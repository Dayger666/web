import React, { FC } from 'react';
import {
  Button,
  Form,
  Row,
} from 'antd';
import {
  browserSessionPersistence,
  setPersistence,
  getAuth,
} from 'firebase/auth';

import { firebaseAuth } from 'utils/firebase-service';

import { fields } from './utils/fields';

const Login: FC = () => {
  const onFinish = (values: any) => { // TODO ADD TYPES
    if (!values.checked) { // TODO MOVE IN SAGA
      const auth = getAuth();
      setPersistence(auth, browserSessionPersistence);
    }

    firebaseAuth.signInWithEmailAndPassword(values.email, values.password);
  };

  return (
    <Row>
      <Form
        layout="vertical"
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        requiredMark={false}
      >
        {fields.map(({ name, element, ...props }) => (
          <Form.Item
            key={name}
            name={name}
            {...props}
          >
            {element}
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Login;
