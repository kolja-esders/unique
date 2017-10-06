import React from 'react';
import { graphql, createFragmentContainer, QueryRenderer } from 'react-relay';


class TestView extends React.Component {
  render() {
  
    return (
      <p>yoyoyo</p>
    ) 
  }
}

export default createFragmentContainer(TestView, graphql`
  fragment TestView_viewer on Viewer {
    id
  }
`);


//export default TestView;
