import React from 'react';
import Page from 'components/Page/Page';
import styles from './ModulePage.scss';
import InsuranceModule from 'components/InsuranceModule/InsuranceModule';
import ProfileImage from 'components/ProfileImage/ProfileImage.js';
import { graphql, createFragmentContainer } from 'react-relay';

import Aaron from '../../assets/Aaron_Eckhart.jpg';
import Anna from '../../assets/Anna_Nicole_Smith.jpg';
import Astrid from '../../assets/Astrid_Betancourt.jpg';
import Atsushi from '../../assets/Atsushi_Sato.jpg';

/*
const data = [{
  type: 'Life',
  premium: 190,
  description: 'asdf',
  similar: ['Aaron', 'Anna', 'Astrid', 'Atsushi'],
  pictures: [Aaron, Anna, Astrid, Atsushi],
  fit: [85, 76, 63],

},
{
  type: 'House',
  premium: 43,
  description: 'qwert',
  similar: ['Aaron', 'Anna', 'Astrid', 'Atsushi'],
  pictures: [Atsushi, Anna, Aaron, Astrid],
  fit: [85, 76, 63],
}
]
*/
const similar = [{
  similar:  ['Aaron', 'Anna', 'Astrid', 'Atsushi'],
  pictures: [Aaron, Anna, Astrid, Atsushi],
  fit: [96, 63, 34],
},
{
  similar: ['Atsushi', 'Anna', 'Aaron', 'Astrid'],
  pictures: [Atsushi, Anna, Aaron, Astrid],
  fit: [81, 76, 63]
},
{
similar: ['Atsushi', 'Anna', 'Aaron', 'Astrid'],
pictures: [Atsushi, Anna, Aaron, Astrid],
fit: [76, 55, 45]
},

]



class ModulePage extends React.Component{

  render() {

    console.log(this.props.viewer)
    return(
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.root}>
          <h1 className={styles.heading}>Your Recommendations</h1>


          <InsuranceModule person={this.props.viewer.user.person.nbCon1} similar={this.props.viewer.user.person.nbP1} data={similar[0]}/>
          <InsuranceModule person={this.props.viewer.user.person.nbCon2} similar={this.props.viewer.user.person.nbP2} data={similar[1]}/>
          <InsuranceModule person={this.props.viewer.user.person.nbCon3} similar={this.props.viewer.user.person.nbP3} data={similar[2]}/>

        </section>
      </Page>
    );
  }
}

export default createFragmentContainer(
  ModulePage,
  graphql`
    fragment ModulePage_viewer on Viewer {
      id
      user {
        email
        firstName
        lastName
        person {
          ...InsuranceModule_person
          ...SimilarityPopup_similar

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
      }
    }
  `,
)
