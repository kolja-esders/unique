import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';

class Story extends React.Component {

  render() {

    var story = this.props.viewer.stories[0];  // `viewer` is the active user
    // console.log(this.props.viewer.stories[0])
    console.log(story.author)
    console.log(story.content)
    console.log(story)

    return (
      <h1>{story.content}</h1>

    );
  }
}

export default createFragmentContainer(
  Story,
  graphql`
    fragment Story_viewer on Viewer {
      stories {
        author
        content
      }
    }
  `,
)
