import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import MyBookList from 'components/MyBookList/MyBookList';
import { authenticatedRoute } from 'modules/auth/utils'
import { Button, Grid } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link'
import styles from './Landing.scss';
import LogoImg from './image.jpg';
import FacebookProvider, { Login } from 'react-facebook';



class Landing extends React.Component {

  handleResponse = (data) => {
    console.log(data);
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (

        <section className={styles.container}>
          <h1>Insurance is unique.</h1>
          <h3>As are you.</h3>
          <img  src={LogoImg}/>

          <p>
            <Button primary as={Link} to='/add-book' className={styles.addBook}>Explore</Button>
          </p>

          <p>
            <a
              href="https://www.youtube.com/watch?v=p6N-ad52Z60" id="gtm_link_watch_the_video_above_the_fold" class="link-video js-btn-video"><i></i>Watch the video
            </a>
          </p>

          <FacebookProvider appId="365404513910530">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>


        </section>

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
