import React from 'react'
import styles from './Header.scss'
import { Link } from 'found';
import { Button } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'
import { isAuthenticated } from 'modules/auth/utils'

class Header extends React.Component {

  logOut() {
    logoutViewer()
  }

  render() {
    return (
      <header className={styles.root}>
          <h1 className={styles.brand_name}>
              <Link to="/" className={styles.brand_name_link}>Gutenberg</Link>
          </h1>
          <nav className={styles.nav}>
              { this.props.isAuthenticated ? (
                  <div>
                  <Button basic as={Link} to='/shared-books' className={styles.item}>All Books</Button>
                  <Button basic as={Link} to='/' className={styles.item}>My Books</Button>
                  <Button basic primary className={styles.item} onClick={() => {logoutViewer()}} >Log out</Button>
                </div>
              ) : (
                <div>
                  <Button basic as={Link} to='/login' className={styles.item}>Log in</Button>
                  <Button primary as={Link} to='/signup' className={styles.item}>Sign up</Button>
                </div>
              )}
          </nav>
      </header>
    )
  }
}

export default createFragmentContainer(
  isAuthenticated(Header),
  graphql`
    fragment Header_viewer on Viewer {
      id
      user {
        email
      }
    }
  `,
)
