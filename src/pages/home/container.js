import { useDispatch, useSelector } from 'react-redux';

import Component from './component';
import { actions, selectors } from './slice';

import BindComponent from '../../components/utils/bind_component';

const getComponentProps = () => {
  const dispatch = useDispatch();

  const currentTitle = useSelector(selectors);
};
