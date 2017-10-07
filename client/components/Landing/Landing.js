import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import { authenticatedRoute } from 'modules/auth/utils'
import { Button, Grid } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link'
import styles from './Landing.scss';
import LogoImg from './image.jpg';
import FacebookProvider, { Login } from 'react-facebook';
import SignupUserMutation from '../../modules/auth/mutations/Signup';
import { isAuthenticated } from '../../modules/auth/utils';

class Landing extends React.Component {

  handleResponse = (data) => {
    const { environment, router } = this.props

    let input = {
      firstName: data['profile']['first_name'],
      lastName: data['profile']['last_name'],
      password: 'yolo1337',
      email: data['profile']['email']
    }

    function test(data) {
      return true;
    }

    SignupUserMutation(environment, test, input)
    this.props.router.history.push('/setup')
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
        <section className={styles.container}>
          <h1>Insurance is unique.</h1>
          <h3>As are you.</h3>
          <img src={LogoImg} style={styles.backgroundImage}/>

          <p>
            <Button primary as={Link} to='/becoming-friends' className={styles.addBook}>Explore</Button>
            <FacebookProvider appId="133394323974213">
              <Login
                  scope="email"
                  onResponse={this.handleResponse}
                  onError={this.handleError}>
                  <Button className={styles.loginButtonFacebook}>Login via Facebook</Button>
              </Login>

            </FacebookProvider>
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=p6N-ad52Z60" id="gtm_link_watch_the_video_above_the_fold" class="link-video js-btn-video"><i></i>Watch the video
            </a>
          </p>
        </section>

    );
  }
}

export default createFragmentContainer(
  Landing,
  graphql`
    fragment Landing_viewer on Viewer {
      id
      user {
        id
      }
    }
  `,
)
