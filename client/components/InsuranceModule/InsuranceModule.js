import React from 'react';
import styles from './InsuranceModule.scss';
import { Grid, Button, Progress, Rating, Image } from 'semantic-ui-react';


class InsuranceModule extends React.Component{

  render(){
    return(

      <div className={styles.container}>

        <div className={styles.insuranceContainer}>
            <span className={styles.type}>{this.props.data.type}</span>
            <span className={styles.peopleHeading}>People with similar interests</span>
        </div>


        <div className={styles.insuranceContainer}>
            <span className={styles.price}>${this.props.data.premium}</span>
            <Image className={styles.simPicture} src={this.props.data.pictures[0]} size='tiny' shape='circular' />
            <Image className={styles.simPicture} src={this.props.data.pictures[1]} size='tiny' shape='circular' />
            <Image className={styles.simPicture} src={this.props.data.pictures[2]} size='tiny' shape='circular' />
            <Image className={styles.simPicture} src={this.props.data.pictures[3]} size='tiny' shape='circular' />

        </div>

        <div className={styles.insuranceContainer}>

          <Button color='blue' size="huge" className={styles.buyButton}>Buy</Button>
          <Button color='light grey' size="huge" className={styles.buyButton}>Details</Button>
        </div>
      </div>






    );
  }

}

export default InsuranceModule
