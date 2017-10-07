import React from 'react';
import { Loader, Progress, Segment, Button } from 'semantic-ui-react';
import Page from 'components/Page/Page';
import styles from './LoadingPage.scss'

class LoadingPage extends React.Component{
  render(){
    return(
      <Page title="Becoming Friends ;-)" viewer={this.props.viewer}>
        <section className={styles.container}>

            <div className={styles.root}>

                <Segment padded='very' className={styles.becomingFriends}>
                  <div className={styles.emoji}></div>
                  <div className={styles.friends}>
                    <h1>Let's become Friends!</h1>
                    <Progress percent={60} active>
                      Scanning social media profiles...
                    </Progress>
                  </div>
                </Segment>
            </div>

        </section>

      </Page>

    );
  }
}



export default LoadingPage
