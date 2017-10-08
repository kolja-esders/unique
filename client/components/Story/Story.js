import React from 'react';
import { Button, Grid, Items, Image, Content, Meta, Description, Extra, Item, List, Header, Segment, Label } from 'semantic-ui-react';
import styles from './Story.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createFragmentContainer } from 'react-relay';
import Page from 'components/Page/Page';
import LogoImg from './image.jpg';
import map_img from '../../assets/map.png'

var e = 0

function getInitialEvents() {
  return [
  {
    title: "Household Insurance",
    desc: "Currently, the probability for burglary in your neighbourhood is high.",
    img: "https://www.lvcriminaldefense.com/wp-content/uploads/2015/03/burglary.jpg",
    img2: {map_img},
  }, {
    title: "Foreign Health Insurance",
    desc: "We noticed, you accepted the offer for a job in Spain? You might update your health insurance.",
    img: "http://www.uspassporthelpguide.com/wp-content/uploads/2016/07/optimized-kw6b.jpeg",
    img2: "",
  }, {
    title: "Travel Insurance",
    desc: "You are flying to Hawaii? You should update your travel insurance.",
    img: {LogoImg},
    img2: "",
  }, {
    title: "Health Insurance for Children",
    desc: "Congrats to your first child. You might want to add a health insurance.",
    img:"http://dreamicus.com/data/baby/baby-04.jpg",
    img2: "",
  }];
}

const tmp = {
  title: "Mountainbike Insurance",
  desc: "You might want to add an insurance for your new mountainbike.",
  img: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAg9AAAAJGU4N2U1OGFiLTBmNjQtNDczMC04YjViLTc0YTIyOWQwNTVlYg.jpg",
  img2: "",
};

let state = { events: getInitialEvents() };

class Story extends React.Component {
  state = getInitialEvents()

  componentDidMount() {
    this.state = state
    let events = this.state.events
    events.unshift(tmp)

    this.setState({ events: events })

  }

  constructor(props) {
    super(props)
    this.state.events = {}

  }

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

                {this.state.events.map((e) => {
                  return (
                  <Item>
                    <Item.Image className={styles.images} shape='circular' size='tiny' src={e.img}/>
                    <Item.Content>
                      <Item.Header className={styles.header} as='a'>{e.title}</Item.Header>
                      <Item.Meta className={styles.meta}>{e.img}</Item.Meta>
                      <Item.Description>
                           <Image src={e.img2} />
                      </Item.Description>
                    </Item.Content>
                  </Item>
                )})}
              </Item.Group>
            </div>
          </section>
        </Page>
      )
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
