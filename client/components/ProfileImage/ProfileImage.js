import React from 'react'
import styles from './ProfileImage.scss'
import Link from 'react-router-dom/es/Link'
import { Button } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';

class ProfileImage extends React.Component {

  render() {
    return (
      <header className={styles.root}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={this.props.imagePath}/>
        </div>
      </header>
    )
  }
}

export default ProfileImage
