import React from 'react';
import { Loader, Progress, Segment, Button } from 'semantic-ui-react';
import Page from 'components/Page/Page';
import styles from './LoadingPage.scss'
import { graphql, createFragmentContainer } from 'react-relay';
import ProfileImage from 'components/ProfileImage/ProfileImage.js'
import img from '../../assets/logo_unique.png'

const fancyText = [
  'Handling the basics',
  'Listening to stories',
  'Re-experiencing your vacations',
]

class LoadingPage extends React.Component {
  state = { percent: 10 }

  constructor(props) {
    super()
    this.state.percent = 0;
  }

  componentDidMount = () => {
    this.inter = setInterval((function () {
      this.setState({ percent: this.state.percent + 30 })
      if (this.state.percent >= 100) {
        this.props.router.history.push('/setup')
      }
      console.log(this.state.percent)
    }).bind(this), 2000)
  }

  componentWillUnmount = () => {
    clearInterval(this.inter)
  }

  increment = () => this.setState({
     percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  render() {
    const user = this.props.viewer.user
    return(
        <section className={styles.container}>
          <div className={styles.personal}>
            <div className={styles.imageWrapperRow}>
              <div className={styles.imageWrapper}>
                <ProfileImage imagePath="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/15271783_1242828795739861_3065007741581304786_o.jpg?oh=bc827532805d7e451af6ffa279e01a32&oe=5A7B1765" />
              </div>
              <div className={styles.imageWrapper}>
                <ProfileImage imagePath={img} />
              </div>
            </div>
            <h1 className={styles.name}>{ user.firstName }<span className={styles.welcome}>, meet Unique.</span></h1>
            <h1 className={styles.friends}>Let's become friends</h1>

            <Progress className={styles.progress} percent={this.state.percent} indicating />
            <h1 className={styles.social}>Scanning social media profiles...</h1>
          </div>
        </section>
    );
  }
}

export default createFragmentContainer(
  LoadingPage,
  graphql`
    fragment LoadingPage_viewer on Viewer {
      user {
        id
        firstName
      }
    }
  `,
)
