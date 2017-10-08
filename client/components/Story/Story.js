import React from 'react';
import { Button, Grid, Items, Image, Content, Meta, Description, Extra, Item } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import LogoImg from './image.jpg';
import map_img from '../../assets/map.png'

class Story extends React.Component {

  render() {

    //var story = this.props.viewer.stories;  // `viewer` is the active user
    // console.log(this.props.viewer.stories[0])
    // Get from database
    //console.log(story[0].author)
    //console.log(story[0].content)
    //console.log(story[1].author)
    //console.log(story[1].content)

    return (
      <Page title='' viewer={this.props.viewer}>
        <section className={styles.root}>
          <h1 className={styles.heading}>Your Feed</h1>
          <div className={styles.container}>

            <Item.Group>
                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src="https://www.lvcriminaldefense.com/wp-content/uploads/2015/03/burglary.jpg"/>
                  <Item.Content>
                    <Item.Header className={styles.header} as='a'>Household Insurance</Item.Header>
                    <Item.Meta className={styles.meta}>Currently, the probability for burglary in your neighbourhood is high.</Item.Meta>
                    <Item.Description>
                         <Image src={map_img} />
                         </Item.Description>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src="http://www.uspassporthelpguide.com/wp-content/uploads/2016/07/optimized-kw6b.jpeg"/>
                  <Item.Content>
                    <Item.Header as='a'>Foreign Health Insurance</Item.Header>
                    <Item.Meta>We noticed, you accepted the offer for a job in Spain? You might update your health insurance.</Item.Meta>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src={LogoImg}/>
                  <Item.Content>
                    <Item.Header as='a'>Travel Insurance</Item.Header>
                    <Item.Meta>You are flying to Hawaii? You should update your travel insurance.</Item.Meta>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src="http://dreamicus.com/data/baby/baby-04.jpg"/>
                  <Item.Content>
                    <Item.Header as='a'>Health Insurance for Children</Item.Header>
                    <Item.Meta>Congrats to your first child. You might want to add a health insurance.</Item.Meta>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image className={styles.images} shape='circular' size='tiny' src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAg9AAAAJGU4N2U1OGFiLTBmNjQtNDczMC04YjViLTc0YTIyOWQwNTVlYg.jpg"/>
                  <Item.Content>
                    <Item.Header as='a'>Mountainbike Insurance</Item.Header>
                    <Item.Meta>You might want to add an insurance for your new mountainbike.</Item.Meta>
                  </Item.Content>
                </Item>

            </Item.Group>
          </div>
        </section>
      </Page>
    )
  }
}

export default Story;

//export default createFragmentContainer(
  //Story,
  //graphql`
    //fragment Story_viewer on Viewer {
      //stories {
       //author
       //content
     //}
    //}
  //`,
//)
