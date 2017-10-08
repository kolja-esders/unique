import React from 'react';
import styles from './SimilarityPopup.scss';
import { Grid, Button, Rating, Image, Popup, Header, Progress } from 'semantic-ui-react';

class SimilarityPopup extends React.Component{

  render(){
    return(
      <div>
        <Grid centered divided columns={1} className={styles.grid}>
          <Grid.Column textAlign='center'>
            <Header as='h4'>{this.props.data.similar[0]}</Header>


            <p>Software Enigineer</p>
            <p>32</p>
            <p>Married</p>
            <p>Rating: <Rating defaultRating={3} maxRating={5} disabled /></p>
            <p>Similarity: <Progress className={styles.progress} percent={this.props.data.fit[0]} progress color='blue' size="small"/></p>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export default SimilarityPopup
