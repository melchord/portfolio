import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Component from './component';
import { actions, selectHeader, selectTitle, selectSubtitle, selectDescription } from './slice';

import BindComponent from '../../components/utils/bind_component';

const getComponentProps = ({ db }) => {
  const dispatch = useDispatch();

  const currentHeader = useSelector(selectHeader);
  const currentTitle = useSelector(selectTitle);
  const currentSubtitle = useSelector(selectSubtitle);
	const currentDescription = useSelector(selectDescription);

  const onChangeHeader = (header) => dispatch(actions.setHeader(header));
  const onChangeTitle = (title) => dispatch(actions.setTitle(title));
  const onChangeSubtitle = (subtitle) => dispatch(actions.setSubtitle(subtitle));
	const onChangeDescription = (description) => dispatch(actions.setDescription(description));

  db.collection('Pages')
    .doc('Home')
    .get()
    .then((snapshot) => {
      onChangeHeader(snapshot.data().header);
      onChangeTitle(snapshot.data().title);
      onChangeSubtitle(snapshot.data().subtitle);
			onChangeDescription(snapshot.data().description);
    });

  return {
    header: currentHeader,
    title: currentTitle,
    subtitle: currentSubtitle,
		description: currentDescription,
  };
};

const displayName = 'HomeContainer';

const propTypes = {
  db: PropTypes.shape({
    collection: PropTypes.func.isRequired,
  }),
};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
