import React from 'react';
import styles from './InsuranceModule.scss';
import { Grid, Button } from 'semantic-ui-react';


class InsuranceModule extends React.Component{

  render(){
    return(
      <div>
        <h2>{this.props.data.type}</h2>
        <h3>Coverage:</h3>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              {this.props.data.coverage[0]}
            </Grid.Column>
            <Grid.Column>
                {this.props.data.coverage[1]}
            </Grid.Column>
            <Grid.Column>
                {this.props.data.coverage[2]}
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>

    );
  }

}

export default InsuranceModule
