import React from 'react'
import styles from './ConfirmPage.scss'
import Link from 'react-router-dom/es/Link'
import { Button, Divider, Form, Grid, Image } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'
import { authenticatedRoute } from 'modules/auth/utils'
import ProfileImage from 'components/ProfileImage/ProfileImage.js'

class ConfirmPage extends React.Component {

  render() {
    return (
      <header className={styles.root}>
        <div className={styles.personal}>
          <ProfileImage imagePath="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/15271783_1242828795739861_3065007741581304786_o.jpg?oh=bc827532805d7e451af6ffa279e01a32&oe=5A7B1765" />
          <h1 className={styles.name}>Kolja<span className={styles.welcome}>, meet Ginger</span></h1>
        </div>

        <Form>
          <section className={styles.infoSection}>
          {/*<header>
              <h2>About You</h2>
            </header> */}

            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className={styles.greetingEmoji}></div>

                  <Form.Field>
                    <label>First name</label>
                    <input placeholder='First name' value='Kolja'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Last name</label>
                    <input placeholder='Last name' value='Esders'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age' value='24'/>
                  </Form.Field>
                </Grid.Column>

                <Grid.Column>
                  <div className={styles.homeEmoji}></div>

                  <Form.Field>
                    <label>Street address</label>
                    <input placeholder='' value='Hildebrandstr. 39'/>
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input placeholder='City' value='Karlsruhe'/>
                  </Form.Field>
                  <Form.Field>
                    <label>Zip code</label>
                    <input placeholder='Zip code' value='76227'/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>

          <section className={styles.infoSection}>
            <header>
              <h2>
                <div className={styles.runningEmoji}></div>
                Activities
              </h2>
            </header>

            <div className={styles.activityContainer}>
              <span className={styles.heavyActivity}>Snowboarding</span>
              <span className={styles.desc}>Very active</span>
            </div>
            <div className={styles.activityContainer}>
              <span className={styles.regularActivity}>Running</span>
              <span className={styles.desc}>Active</span>
            </div>
          </section>

          <section className={styles.infoSection}>
            <header>
              <h2>
                <div className={styles.runningEmoji}></div>
                Lifestyle
              </h2>
            </header>

            <div className={styles.activityContainer}>
              <span className={styles.aspect}>Smoking</span>
              <span className={styles.desc}>Very active</span>
            </div>
            <div className={styles.activityContainer}>
              <span className={styles.heavyActivity}>Snowboarding</span>
              <span className={styles.desc}>Very active</span>
            </div>
            <div className={styles.activityContainer}>
              <span className={styles.heavyActivity}>Snowboarding</span>
              <span className={styles.desc}>Very active</span>
            </div>

          </section>
        </Form>

        <h1 className={styles.brand_name}>
          <Button as={Link} color="green" size="huge" to="/home" className={styles.continueBtn}>Looking good</Button>
        </h1>
      </header>
    )
  }
}

const AuthenticatedConfirmPage = authenticatedRoute(ConfirmPage);

export default createFragmentContainer(
  AuthenticatedConfirmPage,
  graphql`
    fragment ConfirmPage_viewer on Viewer {
      id
      user {
        email
      }
    }
  `,
)
