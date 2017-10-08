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



class ModulePage extends React.Component{

  render() {
    console.log(this.props.viewer)
    return(
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.root}>
          <h1 className={styles.heading}>Your Recommendations</h1>

          <InsuranceModule data={data[0]}/>

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
          familyMembers {
            edges {
              node {
                name
                age
                gender
                relation
              }
            }
          }
          lifestyleEntities {
            edges {
              node {
                name
                frequency
              }
            }
          }
          locations {
            edges {
              node {
                name
                exampleImage
              }
            }
          }
          injuries {
            edges {
              node {
                date
                type
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
      }
    }
  `,
)
