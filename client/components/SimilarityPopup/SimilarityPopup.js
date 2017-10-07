import React from 'react';
import styles from './SimilarityPopup.scss';
import { Grid, Button, Rating, Image, Popup, Header } from 'semantic-ui-react';

class SimilarityPopup extends React.Component{

  render(){
    return(
      <div>
        <Grid centered divided columns={1}>
          <Grid.Column textAlign='center'>
            <Header as='h4'>{this.props.data.similar[0]}</Header>
            <Image className={styles.picture} src={this.props.data.pictures[0]} size='tiny' shape='circular' />
            <p><b>2</b> projects, $10 a month</p>
            <Rating defaultRating={3} maxRating={5} disabled />
            <Button>Choose</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export default SimilarityPopup
