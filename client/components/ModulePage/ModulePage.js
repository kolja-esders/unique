import React from 'react';
import Page from 'components/Page/Page';
import styles from './ModulePage.scss';
import InsuranceModule from 'components/InsuranceModule/InsuranceModule';


const data = [{
  type: 'Life',
  premium: 10,
  description: 'asdf',
  coverage: ['suicide', 'accidential death', 'murder']
},
{
  type: 'House',
  premium: 7,
  description: 'qwert',
  coverage: ['jewelry', 'fine art', 'bikes']
}
]



class ModulePage extends React.Component{
  render(){
    return(
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.container}>
          <h1>Fancy Insurances</h1>
          <InsuranceModule data={data[0]}/>
          <InsuranceModule data={data[1]}/>
        </section>
      </Page>
    );
  }
}

export default ModulePage
