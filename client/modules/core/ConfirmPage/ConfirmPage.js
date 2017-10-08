import React from 'react'
import styles from './ConfirmPage.scss'
import Link from 'react-router-dom/es/Link'
import { Button, Divider, Form, Grid, Image, Popup } from 'semantic-ui-react'
import { graphql, createFragmentContainer } from 'react-relay';
import { logoutViewer } from 'modules/auth/jwtUtils'
import { authenticatedRoute } from 'modules/auth/utils'
import ProfileImage from 'components/ProfileImage/ProfileImage.js'
import img from '../../../assets/logo2.png'


let getPriceFormatting = function(estimatedPrice) {
  return '~ ' + estimatedPrice + ' €';
}


let getAgeFormatting = function(age) {
  return age + ' years old';
}


let getInjuryDateFormatting = function(date) {
  return 'happened on ' + date;
}

let getInjuryTypeFormatting = function(type) {
  return 'Injured ' + type
}

let getActivity = function(name, frequency) {
  return (
    <div className={styles.entityContainer}>
      <span className={styles.entity}>{ name }</span>
      <span className={styles.freq}>{ frequency }</span>
    </div>
  );
}

class ConfirmPage extends React.Component {

  render() {
    console.log(this.props.viewer)
    const user = this.props.viewer.user;
    const person = user.person;

    return (
      <header className={styles.root}>
        <div className={styles.personal}>
          <ProfileImage imagePath="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/15271783_1242828795739861_3065007741581304786_o.jpg?oh=bc827532805d7e451af6ffa279e01a32&oe=5A7B1765" />
          <h1 className={styles.name}>{ user.firstName }<span className={styles.welcome}>, verify your data.</span></h1>
        </div>
        <Form>
          <section className={styles.infoSection}>
          {/*<header>
              <h2>About You</h2>
            </header> */}

            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className={styles.greetingEmoji}></div>
                  <h2 className={styles.headText}>Personal</h2>

                  <Form.Field>
                    <label>First name</label>
                    <input placeholder='First name' defaultValue={ user.firstName }/>
                  </Form.Field>
                  <Form.Field>
                    <label>Last name</label>
                    <input placeholder='Last name' defaultValue={ user.lastName }/>
                  </Form.Field>
                  <Form.Field>
                    <label>Age</label>
                    <input placeholder='Age' defaultValue={ user.person.age }/>
                  </Form.Field>
                  <Form.Field>
                    <label>Occupation</label>
                    <input placeholder='Occupation' defaultValue={ user.person.occupation }/>
                  </Form.Field>
                  <Form.Field>
                    <label>Employer / School</label>
                    <input placeholder='Employer / School' defaultValue={ user.person.company }/>
                  </Form.Field>
                </Grid.Column>

                <Grid.Column>
                  <div className={styles.homeEmoji}></div>
                  <h2 className={styles.headText}>Address</h2>

                  <Form.Field>
                    <label>Street address</label>
                    <input placeholder='Street address' defaultValue=''/>
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input placeholder='City' defaultValue=''/>
                  </Form.Field>
                  <Form.Field>
                    <label>Zip code</label>
                    <input placeholder='Zip code' defaultValue=''/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>

          <section className={styles.infoSection}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className={styles.runningEmoji}></div>
                  <h2 className={styles.headText}>Activities</h2>
                  {person.activities.edges.map(function(obj, i) {
                    return (
                      <Popup key={i} position='left center' inverted hoverable trigger= { getActivity(obj.node.name, obj.node.frequency) }>
                          Facebook {obj.node.detectionReason.type} from {obj.node.detectionReason.date}: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                      </Popup>
                  )
                  })}
                </Grid.Column>

                <Grid.Column>
                  <div className={styles.sunEmoji}></div>
                  <h2 className={styles.headText}>Lifestyle</h2>
                  {person.lifestyleEntities.edges.map(function(obj, i) {
                    return (
                      <Popup key={i} position='right center' inverted hoverable trigger= { getActivity(obj.node.name, obj.node.frequency) }>
                          Facebook { obj.node.detectionReason.type } from { obj.node.detectionReason.date }: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                      </Popup>
                  )
                  })}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>

          <section className={styles.infoSection}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className={styles.deviceEmoji}></div>
                  <h2 className={styles.headText}>Items</h2>
                    {person.devices.edges.map(function(obj, i) {
                      return (
                        <Popup key={i} position='left center' inverted hoverable trigger= { getActivity(obj.node.type, getPriceFormatting(obj.node.estimatedPrice)) }>
                          Facebook { obj.node.detectionReason.type} from { obj.node.detectionReason.date }: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                        </Popup>
                    )
                    })}
                </Grid.Column>

                <Grid.Column>
                  <div className={styles.familyEmoji}></div>
                  <h2 className={styles.headText}>Family</h2>
                    {person.familyMembers.edges.map(function(obj, i) {
                      return (
                        <Popup key={i} position='right center' inverted hoverable trigger= { getActivity(obj.node.name, getAgeFormatting(obj.node.age)) }>
                          Facebook { obj.node.detectionReason.type } from { obj.node.detectionReason.date }: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                        </Popup>
                    )
                    })}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>

          <section className={styles.infoSection}>
            <Grid divided='vertically'>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <div className={styles.injuryEmoji}></div>
                  <h2 className={styles.headText}>Injuries</h2>
                    {person.injuries.edges.map(function(obj, i) {
                      return (
                        <Popup key={i} position='left center' inverted hoverable trigger= { getActivity(getInjuryTypeFormatting(obj.node.type), getInjuryDateFormatting(obj.node.date)) }>
                          Facebook { obj.node.detectionReason.type  } from { obj.node.detectionReason.date }: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                        </Popup>
                    )
                    })}
                </Grid.Column>

                <Grid.Column>
                  <div className={styles.vacationEmoji}></div>
                  <h2 className={styles.headText}>Vacation</h2>
                  {person.locations.edges.map(function(obj, i) {
                    return (
                      <Popup key={i} position='right center' inverted hoverable trigger={ getActivity(obj.node.name, '') }>
                          Facebook { obj.node.detectionReason.type } from { obj.node.detectionReason.date }: <br/>
                          { obj.node.detectionReason.text } <br/>
                          <Image src={ obj.node.detectionReason.image }/> <br/>
                      </Popup>
                  )
                  })}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>
        </Form>

        <h1 className={styles.brand_name}>
          <Button as={Link} color="green" size="huge" fluid to="/home" className={styles.continueBtn}>Looks good!</Button>
        </h1>
      </header>
    )
  }
}

const AuthenticatedConfirmPage = authenticatedRoute(ConfirmPage);

export default createFragmentContainer(
  AuthenticatedConfirmPage,
  graphql`
    fragment ConfirmPage_viewer on Viewer {
      id
      user {
        email
        firstName
        lastName
        person {
          age
          occupation
          company
          devices {
            edges {
              node {
                estimatedPrice
                type
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
          activities {
            edges {
              node {
                name
                frequency
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
          familyMembers {
            edges {
              node {
                name
                age
                gender
                relation
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
          lifestyleEntities {
            edges {
              node {
                name
                frequency
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
          locations {
            edges {
              node {
                name
                exampleImage
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
          injuries {
            edges {
              node {
                date
                type
                detectionReason {
                  id
                  text
                  hrefToImage
                  date
                  type
                }
              }
            }
          }
        }
      }
    }
  `,
)
