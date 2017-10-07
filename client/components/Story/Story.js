import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'

class Story extends React.Component {

  render() {

    // var story = this.props.story;  // `viewer` is the active user

    return (
      <h1>Hallo</h1>
    );
  }
}

export default Story
