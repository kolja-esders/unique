import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './NewsFeed.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createContainer } from 'react-relay';

class NewsFeed extends React.Component {

  render() {
    return (
            <h1>Hallo</h1>
    );
  }
}

export default NewsFeed
