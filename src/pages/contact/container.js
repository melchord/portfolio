import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Component from './component';
import {
  actions,
  selectHeader,
  selectTitle,
  selectSubtitle,
  selectDescription,
  selectLinks,
} from './slice';

import BindComponent from '../../components/utils/bind_component';

const getComponentProps = ({ db }) => {
  const dispatch = useDispatch();

  const currentHeader = useSelector(selectHeader);
  const currentTitle = useSelector(selectTitle);
  const currentSubtitle = useSelector(selectSubtitle);
  const currentDescription = useSelector(selectDescription);
  const currentLinks = useSelector(selectLinks);

  const onChangeHeader = (header) => dispatch(actions.setHeader(header));
  const onChangeTitle = (title) => dispatch(actions.setTitle(title));
  const onChangeSubtitle = (subtitle) => dispatch(actions.setSubtitle(subtitle));
  const onChangeDescription = (description) => dispatch(actions.setDescription(description));
  const onChangeLinks = (links) => dispatch(actions.setLinks(links));

  db.collection('Pages')
    .doc('Contact')
    .get()
    .then((snapshot) => {
      onChangeHeader(snapshot.data().header);
      onChangeTitle(snapshot.data().title);
      onChangeSubtitle(snapshot.data().subtitle);
      onChangeDescription(snapshot.data().description);
      onChangeLinks(snapshot.data().links);
    })
    .catch((error) => {
      console.log('Error getting documents', error);
    });

  return {
    header: currentHeader,
    title: currentTitle,
    subtitle: currentSubtitle,
    description: currentDescription,
    links: currentLinks,
  };
};

const displayName = 'ContactContainer';

const propTypes = {
  db: PropTypes.shape({
    collection: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
