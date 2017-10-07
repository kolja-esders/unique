import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import MyBookList from 'components/MyBookList/MyBookList';
import { authenticatedRoute } from 'modules/auth/utils'
import { Button, Grid } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link'
import styles from './Landing.scss';


class Landing extends React.Component {
  render() {
    return (
      <Page title='' viewer={this.props.viewer}>

        <section className={styles.container}>
          <h1>Insurance is unique.</h1>
          <h3>As are you.</h3>

          <p>
            <Button primary as={Link} to='/add-book' className={styles.addBook}>Explore</Button>
          </p>

          <p>
            <a
              href="https://www.youtube.com/watch?v=p6N-ad52Z60" id="gtm_link_watch_the_video_above_the_fold" class="link-video js-btn-video"><i></i>Watch the video
            </a>
          </p>
        </section>

      </Page>
    );
  }
}

const AuthenticatedLanding = authenticatedRoute(Landing);

export default createFragmentContainer(
  AuthenticatedLanding,
  graphql`
    fragment Landing_viewer on Viewer {
      ...Page_viewer
      id
      user {
        email
        username
        bookshelf {
          ...MyBookList_bookshelf
        }
      }
    }
  `,
)
