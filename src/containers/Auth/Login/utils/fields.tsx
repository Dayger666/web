import React from 'react';
import { Checkbox, Input } from 'antd';

export const fields = [
  {
    label: 'Email',
    name: 'email',
    rules: [{
      required: true,
      message: 'Please enter your email!',
    }],
    element: <Input type='email' placeholder='Enter email'/>,

  },
  {
    label: 'Password',
    name: 'password',
    rules: [{
      required: true,
      message: 'Please enter your password!',
    }],
    min: 6,
    element: <Input.Password placeholder='Enter password'/>,
  },
  {
    name: 'remember',
    valuePropName: 'checked',
    element: <Checkbox>Remember me</Checkbox>,
  },
];
