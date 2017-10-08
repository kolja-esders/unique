import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';


import styles from './BuyComplete.scss';



class BuyComplete extends React.Component {


  render() {
    return (
        <section className={styles.root}>
          <h1 className={styles.headingFirst}>Congratulations for your <span className={styles.emph}>unique</span> insurance!</h1>


        </section>

    );
  }
}

export default BuyComplete
