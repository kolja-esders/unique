import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './NewsFeed.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createContainer } from 'react-relay';

class NewsFeed extends React.Component {

  render() {
    return (
        <section className={styles.container}>
          <h1>Insurance is unique.</h1>
          <h3>As are you.</h3>
          <p>
            <Button primary as={Link} to='/add-book' className={styles.addBook}>Explore</Button>
          </p>

        </section>
    );
  }
}

export default NewsFeed
