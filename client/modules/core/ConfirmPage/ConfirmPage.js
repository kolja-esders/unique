import React from 'react'
import styles from './ConfirmPage.scss'
import Link from 'react-router-dom/es/Link'
import { Button } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'
import { authenticatedRoute } from 'modules/auth/utils'

class ConfirmPage extends React.Component {

  render() {
    const isLoggedIn = this.props.viewer != null
    return (
      <header className={styles.root}>
        <h1 className={styles.brand_name}>
          <Link to="/home" className={styles.brand_name_link}>Done</Link>
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
