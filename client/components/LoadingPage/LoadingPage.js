import React from 'react';
import { Loader } from 'semantic-ui-react';
import Page from 'components/Page/Page';
import styles from './LoadingPage.scss'

class LoadingPage extends React.Component{
  render(){
    return(
      <Page title="Becomming Friends ;-)" viewer={this.props.viewer}>
        <section className={styles.container}>

            <h1>Lets become Friends!</h1>
            <div className={styles.emoji}></div>
        </section>
      </Page>

    );
  }
}



export default LoadingPage
