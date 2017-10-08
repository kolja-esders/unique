import React from 'react';
import styles from './InsuranceModule.scss';
import { Grid, Button, Progress, Rating, Image, Popup, Header } from 'semantic-ui-react';
import SimilarityPopup from 'components/SimilarityPopup/SimilarityPopup';
import { graphql, createFragmentContainer } from 'react-relay';

class InsuranceModule extends React.Component{

  render(){
    console.log("IModul")
    console.log(this.props.person)
    console.log(this.props.data)
    console.log(this.props.similar)

    return(

      <div className={styles.container}>

        <div className={styles.insuranceContainer}>
            <span className={styles.type}>{this.props.person.contractType}</span>
            <span className={styles.peopleHeading}>People with similar interests</span>
        </div>


        <div className={styles.insuranceContainer}>
            <span className={styles.price}>${this.props.person.amountMoney}</span>

              <Popup
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.similar.profilePicture} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup similar={this.props.similar} data={this.props.data}/>}
            </Popup>

              <Popup
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.data.pictures[0]} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup similar={this.props.similar} data={this.props.data}/>}
            </Popup>

              <Popup
                className={styles.popup}
                trigger={  <Image className={styles.simPicture} src={this.props.data.pictures[1]} size='tiny' shape='circular' />}
                flowing
                hoverable
              >
              {<SimilarityPopup similar={this.props.similar}  data={this.props.data}/>}
            </Popup>


        </div>

        <div className={styles.insuranceContainer}>

          <Button color='blue' size="huge" className={styles.buyButton}>Buy</Button>
          <Button color='light grey' size="huge" className={styles.buyButton}>Details</Button>
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
          nbP1 {
             profilePicture
             age
             surname
             givenName
             gender
             occupation
             kids
             income
             activities {
               edges {
                 node {
                   name
                   frequency
             }
           }
         }
       }
         nbP2 {
            profilePicture
            age
            surname
            givenName
            gender
            occupation
            kids
            income
            activities {
              edges {
                node {
                  name
                  frequency
            }
          }
        }
      }
        nbP3 {
           profilePicture
           age
           surname
           givenName
           gender
           occupation
           kids
           income
           activities {
             edges {
               node {
                 name
                 frequency
           }
         }
       }
     }
    }
  `,
)
