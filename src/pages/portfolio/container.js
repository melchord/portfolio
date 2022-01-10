import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Component from './component';
import {
  actions,
  selectHeader,
  selectTitle,
  selectSubtitle,
  selectDescription,
  selectProjects,
} from './slice';

import BindComponent from '../../components/utils/bind_component';

const getComponentProps = ({ db }) => {
  const dispatch = useDispatch();

  const currentHeader = useSelector(selectHeader);
  const currentTitle = useSelector(selectTitle);
  const currentSubtitle = useSelector(selectSubtitle);
  const currentDescription = useSelector(selectDescription);
  const currentProjects = useSelector(selectProjects);

  const onChangeHeader = (header) => dispatch(actions.setHeader(header));
  const onChangeTitle = (title) => dispatch(actions.setTitle(title));
  const onChangeSubtitle = (subtitle) => dispatch(actions.setSubtitle(subtitle));
  const onChangeDescription = (description) => dispatch(actions.setDescription(description));
  const onChangeProjects = (projects) => dispatch(actions.setProjects(projects));

  db.collection('Pages')
    .doc('Portfolio')
    .get()
    .then((snapshot) => {
      onChangeHeader(snapshot.data().header);
      onChangeTitle(snapshot.data().title);
      onChangeSubtitle(snapshot.data().subtitle);
      onChangeDescription(snapshot.data().description);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection('Projects')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        onChangeProjects({
          title: doc.data().title,
          summary: doc.data().summary,
          link: doc.data().link,
          tags: doc.data().tags,
        });
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });

  return {
    header: currentHeader,
    title: currentTitle,
    subtitle: currentSubtitle,
    description: currentDescription,
    projects: currentProjects,
  };
};

const displayName = 'PortfolioContainer';

const propTypes = {
  db: PropTypes.shape({
    collection: PropTypes.func.isRequired,
  }),
};

const defaultProps = {};

export default BindComponent(Component, getComponentProps, propTypes, defaultProps, displayName);
