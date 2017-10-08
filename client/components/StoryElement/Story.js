import React from 'react';
import { Button, Grid, Items, Image } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';

class StoryElement extends React.Component {

  render() {

    var story = this.props.viewer.stories;  // `viewer` is the active user
    // console.log(this.props.viewer.stories[0])
    console.log(story[0].author)
    console.log(story[0].content)

      const ItemExampleItems = () => (
        <Item.Group>
          <Item>
            <Item.Image size='tiny' src='./image.jpg' />

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src='./image.jpg' />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image size='tiny' src='./image.jpg' />

            <Item.Content>
              <Item.Header as='a'>Header</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                <Image src='./image.jpg' />
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      )


    return (
      <h1>{story[0].author}</h1>
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
