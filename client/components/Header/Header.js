import React from 'react'
import styles from './Header.scss'
import Link from 'react-router-dom/es/Link'
import { Button } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'

class Header extends React.Component {

  logOut() {
    logoutViewer()
  }

  render() {
    const isLoggedIn = this.props.viewer != null
    return (
      <header className={styles.root}>
          <h1 className={styles.brand_name}>
              <Link to="/" className={styles.brand_name_link}>Your Insurance</Link>
          </h1>
          <nav className={styles.nav}>
              { isLoggedIn ? (
                  <div>
                  <Button primary as={Link} to='/home' className={styles.item}>Recommendations</Button>
                  <Button primary as={Link} to='/feed' className={styles.item}>Feed</Button>
                  <Button basic primary className={styles.item} onClick={() => {logoutViewer()}} >Log out</Button>
                </div>
              ) : (
                <div>
                  <Button primary as={Link} to='/home' className={styles.item}>Insurances</Button>
                  <Button basic as={Link} to='/feed' className={styles.item}>Feed</Button>
                </div>
              )}
          </nav>
      </header>
    )
  }
}

export default createFragmentContainer(
  Header,
  graphql`
    fragment Header_viewer on Viewer {
      id
      user {
        email
      }
    }
  `,
)
