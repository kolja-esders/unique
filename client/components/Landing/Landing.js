import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import MyBookList from 'components/MyBookList/MyBookList';
import { authenticatedRoute } from 'modules/auth/utils'
import { Button, Grid } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link'
import styles from './Landing.scss';
import LogoImg from './image.jpg';
import { FacebookLogin } from 'react-facebook-login-component';



class Landing extends React.Component {

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
   console.log(response);
   //anything else you want to do(save to localStorage)...
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

          <div>
            <FacebookLogin socialId="121319955244297"
                           language="en_US"
                           scope="public_profile,email"
                           responseHandler={this.responseFacebook}
                           xfbml={true}
                           fields="id,email,name"
                           version="v2.5"
                           className="facebook-login"
                           buttonText="Login With Facebook"/>
          </div>


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
