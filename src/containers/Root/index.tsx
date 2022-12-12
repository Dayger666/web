import React, {
  FC,
  ReactNode,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';

import MainLayout from 'HOC/MainLayout';
import { firebaseAuth } from 'utils/firebase-service';

import { fetchUserRequest } from '../../redux/reducers/user';

interface IRoot {
  children: ReactNode
}

const Root: FC<IRoot> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((firebaseUser: any) => {
      dispatch(fetchUserRequest(firebaseUser.id));
    });

    return unsubscribe;
  }, []);

  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
};

export default Root;
