import React from 'react';
import styles from './SimilarityPopup.scss';
import { Grid, Button, Rating, Image, Popup, Header, Progress } from 'semantic-ui-react';
import { graphql, createFragmentContainer } from 'react-relay';

class SimilarityPopup extends React.Component{

  render(){
    console.log(this.props.similar)
    console.log(this.props.data)
    return(
      <div>
        <Grid centered divided columns={1} className={styles.grid}>
          <Grid.Column textAlign='center'>
            <Header as='h4'>{this.props.similar.givenName}</Header>


            <p>{this.props.similar.occupation}</p>
            <p>Age: {this.props.similar.age}</p>
            <p>Likes: {this.props.similar.activities.edges[0].node.name}</p>
            <p>Rating: <Rating defaultRating={3} maxRating={5} disabled /></p>
            <p>Similarity: <Progress className={styles.progress} percent={this.props.data.fit[0]} progress color='blue' size="small"/></p>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}


export default createFragmentContainer(
 SimilarityPopup,
  graphql`
    fragment SimilarityPopup_similar on Person {
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
