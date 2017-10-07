import React from 'react';
import styles from './InsuranceModule.scss';
import { Grid, Button, Progress, Rating } from 'semantic-ui-react';


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


        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
                {this.props.data.similar[0]}
                 <Rating defaultRating={5} maxRating={5} disabled />
                 <Progress percent={this.props.data.fit[0]} progress color='blue'/>
            </Grid.Column>
            <Grid.Column>
                {this.props.data.similar[1]}
                 <Rating defaultRating={4} maxRating={5} disabled />
                <Progress percent={this.props.data.fit[1]} progress color='blue'/>
            </Grid.Column>
            <Grid.Column>
                {this.props.data.similar[2]}
                 <Rating defaultRating={3} maxRating={5} disabled />
                 <Progress percent={this.props.data.fit[2]} progress color='blue'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>

    );
  }

}

export default InsuranceModule
