import React from 'react';
import Page from 'components/Page/Page';
import styles from './ModulePage.scss';

class ModulePage extends React.Component{
  render(){
    return(
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.container}>
          <h1>Fancy Insurances</h1>
        </section>
      </Page>
    );
  }
}

export default ModulePage
