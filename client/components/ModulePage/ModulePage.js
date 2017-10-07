import React from 'react';
import Page from 'components/Page/Page';
import styles from './ModulePage.scss';
import InsuranceModule from 'components/InsuranceModule/InsuranceModule';
import ProfileImage from 'components/ProfileImage/ProfileImage.js'


const data = [{
  type: 'Life',
  premium: 190,
  description: 'asdf',
  coverage: ['suicide', 'accidential death', 'murder'],
  similar: ['Pietro', 'Zöllnel', 'Aase'],
  fit: [85, 76, 63]

},
{
  type: 'House',
  premium: 43,
  description: 'qwert',
  coverage: ['jewelry', 'fine art', 'bikes']
}
]



class ModulePage extends React.Component{
  render(){
    return(
      <Page title='' viewer={this.props.viewer}>

        <section className={styles.container}>
          <ProfileImage imagePath="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/15271783_1242828795739861_3065007741581304786_o.jpg?oh=bc827532805d7e451af6ffa279e01a32&oe=5A7B1765" />

          <h1>Recommended Insurances</h1>
          <InsuranceModule data={data[0]}/>

        </section>
      </Page>
    );
  }
}

export default ModulePage
