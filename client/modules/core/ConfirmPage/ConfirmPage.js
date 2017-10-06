import React from 'react'
import styles from './ConfirmPage.scss'
import Link from 'react-router-dom/es/Link'
import { Button } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'
import { authenticatedRoute } from 'modules/auth/utils'
import ProfileImage from 'components/ProfileImage/ProfileImage.js'

class ConfirmPage extends React.Component {

  render() {
    const isLoggedIn = this.props.viewer != null
    return (
      <header className={styles.root}>

      <div className={styles.personal}>
        <ProfileImage imagePath="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/15271783_1242828795739861_3065007741581304786_o.jpg?oh=bc827532805d7e451af6ffa279e01a32&oe=5A7B1765" />
        <h1 className={styles.name}><span className={styles.welcome}>Nice to meet you,</span> Kolja!</h1>
      </div>

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
