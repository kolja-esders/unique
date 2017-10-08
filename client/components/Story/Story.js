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
    // Get from database
    console.log(story[0].author)
    console.log(story[0].content)
    console.log(story[1].author)
    console.log(story[1].content)

    return (
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.root}>
          <h1 className={styles.heading}>Your Feed</h1>
          <div className={styles.container}>
            <Item.Group>
              <Item>
                <Item.Image className={styles.images} shape='circular' size='tiny' src="https://www.lvcriminaldefense.com/wp-content/uploads/2015/03/burglary.jpg"/>
                <Item.Content>
                  <Item.Header as='a'>Household Insurance</Item.Header>
                  <Item.Meta>Currently, the probability for burglary in your neighbourhood is high.</Item.Meta>
                  <Item.Description>
                           <Image src="http://i.telegraph.co.uk/multimedia/archive/01815/Glovers-Court_1815707a.jpg" />
                         </Item.Description>
                </Item.Content>
              </Item>

                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src="http://www.uspassporthelpguide.com/wp-content/uploads/2016/07/optimized-kw6b.jpeg"/>
                  <Item.Content>
                    <Item.Header as='a'>Foreign Health Insurance</Item.Header>
                    <Item.Meta>We noticed, you have accepted the offer for a job abroad? You might update your foreign health insurance.</Item.Meta>

                  </Item.Content>
                </Item>

                  <Item>
                    <Item.Image className={styles.images} shape='circular' size='tiny' src={LogoImg}/>
                    <Item.Content>
                      <Item.Header as='a'>Travel Insurance</Item.Header>
                      <Item.Meta>You are flying to Hawaii? You should update your travel insurance.</Item.Meta>

                    </Item.Content>
                  </Item>

            </Item.Group>
          </div>
        </section>
      </Page>


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
