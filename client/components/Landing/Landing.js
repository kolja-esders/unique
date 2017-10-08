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
import LoginUserMutation from '../../modules/auth/mutations/Login';
import { isAuthenticated } from '../../modules/auth/utils';

class Landing extends React.Component {

  handleResponse = (data) => {
    const { environment, router } = this.props
    console.log(data)

    let input = {
      firstName: data['profile']['first_name'],
      lastName: data['profile']['last_name'],
      password: 'yolo1337',
      email: data['profile']['email'],
      accessToken: data['tokenDetail']['accessToken']
    }

    function test(data) {
      console.log('callback error', data)
      console.log(input)
      LoginUserMutation(environment, null, {password: input['password'], email: input['email'], accessToken: input['accessToken']})
    }

    SignupUserMutation(environment, test, input)
    this.props.router.history.push('/becoming-friends')
  }

  handleError = (error) => {
    console.log(error)
  }

  render() {
    return (
        <section className={styles.root}>
          <h1 className={styles.headingFirst}>You are <span className={styles.emph}>unique</span>.</h1>
          <h1 className={styles.heading}>So should be your insurance.</h1>

          <p>
            <FacebookProvider appId="133394323974213">
              <Login
                  scope="user_about_me,ads_management,ads_read,business_management,instagram_basic,
public_profile,user_about_me,user_birthday,user_hometown,user_likes,user_location
,user_photos,user_posts,user_tagged_places"
                  onResponse={this.handleResponse}
                  onError={this.handleError}>
                  <Button className={styles.loginButtonFacebook}>Login via Facebook</Button>
              </Login>

            </FacebookProvider>
          </p>
          <div className={styles.descWrapper}>
            <h2 className={styles.desc}>
              Classic insurance is <span className={styles.bold}>unpersonal</span> and <span className={styles.bold}>intransparent</span>. Unique is here to help you. We take a look at your social media presence and offer you a <span className={styles.bold}>tailored</span> and <span className={styles.bold}>modern</span> insurance experience.
            </h2>
          </div>
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
