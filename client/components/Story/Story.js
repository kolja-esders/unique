import React from 'react';
import { Button, Grid, Items, Image, Content, Meta, Description, Extra, Item } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import LogoImg from './image.jpg';

class Story extends React.Component {

  render() {

    var story = this.props.viewer.stories;  // `viewer` is the active user
    // console.log(this.props.viewer.stories[0])
    console.log(story[0].author)
    console.log(story[0].content)
    console.log(story[1].author)
    console.log(story[1].content)

    return (

      <div className={styles.container}>
        <Item.Group>
          <Item>
            <Item.Image className={styles.img-circle} src="https://www.lvcriminaldefense.com/wp-content/uploads/2015/03/burglary.jpg"/>
            <Item.Content>
              <Item.Header as='a'>{story[0].author}</Item.Header>
              <Item.Meta>{story[0].content}</Item.Meta>
              <Item.Description>
                       <Image src="http://i.telegraph.co.uk/multimedia/archive/01815/Glovers-Court_1815707a.jpg" />
                     </Item.Description>
              <Item.Extra>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </Item.Extra>
            </Item.Content>
          </Item>

            <Item>
              <Item.Image size='small' src="http://www.uspassporthelpguide.com/wp-content/uploads/2016/07/optimized-kw6b.jpeg"/>
              <Item.Content>
                <Item.Header as='a'>{story[0].author}</Item.Header>
                <Item.Meta>{story[0].content}</Item.Meta>

                <Item.Extra>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </Item.Extra>
              </Item.Content>
            </Item>

              <Item>
                <Item.Image size='small' src={LogoImg}/>
                <Item.Content>
                  <Item.Header as='a'>{story[0].author}</Item.Header>
                  <Item.Meta>{story[0].content}</Item.Meta>

                  <Item.Extra>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </Item.Extra>
                </Item.Content>
              </Item>

        </Item.Group>
      </div>
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
