import React from 'react';
import styles from './InsuranceModule.scss';
import { Grid, Button, Progress, Rating, Image, Popup, Header } from 'semantic-ui-react';
import Link from 'react-router-dom/es/Link'
import SimilarityPopup from 'components/SimilarityPopup/SimilarityPopup';
import { graphql, createFragmentContainer } from 'react-relay';

class InsuranceModule extends React.Component{

  render(){
    console.log("IModul")
    console.log(this.props.person)
    console.log(this.props.data)
    return(

      <div className={styles.container}>

        <div className={styles.insuranceContainer}>
            <span className={styles.type}>{this.props.data.type}</span>
            <span className={styles.peopleHeading}>People similar to you said...</span>
        </div>

        <div className={styles.insuranceContainer}>
            <span className={styles.price}>${this.props.data.premium}</span>
            <span className={styles.priceExtra}> / month</span>
              <Popup inverted
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.data.pictures[0]} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup data={this.props.data}/>}
            </Popup>

              <Popup
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.data.pictures[1]} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup data={this.props.data}/>}
            </Popup>

              <Popup
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.data.pictures[2]} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup data={this.props.data}/>}
            </Popup>

        </div>

        <div className={styles.insuranceContainer}>

          <div className={styles.bottom}>
            <Link to='#' className={styles.learnMore}>Learn more</Link> or 
            <Button color='green' size="huge" className={styles.buyButton}>Buy now</Button>
          </div>
        </div>
      </div>


    );
  }

}

export default createFragmentContainer(
  InsuranceModule,
  graphql`
    fragment InsuranceModule_person on Person {
          age
          occupation
          company
          profilePicture
          devices {
            edges {
              node {
                estimatedPrice
                type
              }
            }
          }
          activities {
            edges {
              node {
                name
                frequency
              }
            }
          }

          nbCon1 {
            contractName
            startDate
            endDate
            contractType
            contractClass
            dueData
            amountMoney
            autoExtensions
            url
            description
          }
          nbCon2 {
            contractName
            startDate
            endDate
            contractType
            contractClass
            dueData
            amountMoney
            autoExtensions
            url
            description
          }
          nbCon3 {
            contractName
            startDate
            endDate
            contractType
            contractClass
            dueData
            amountMoney
            autoExtensions
            url
            description


          }
    }
  `,
)
