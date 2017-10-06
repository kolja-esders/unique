import React from 'react'
import { Element } from 'prop-types'
import Helmet from 'react-helmet'
import styles from './RootView.scss'
import { withRouter } from 'found'
import { authenticatedRoute } from 'modules/auth/utils'

import 'semantic-ui-less/semantic.less'
import '../../styles/global.scss'

interface Props {
  children: Element
}

class RootView extends React.Component<Props, {}> {
  render() {
    console.log(this)
    return (
      <div>
        <Helmet titleTemplate="%s | Gutenberg" />
        {this.props.children}
      </div>
    )
  }
}

1
export default RootView
