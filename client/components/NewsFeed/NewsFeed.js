import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './NewsFeed.scss';
import { authenticatedRoute } from 'modules/auth/utils'
import Link from 'react-router-dom/es/Link'
import { graphql, createContainer } from 'react-relay';
import PropTypes from 'prop-types'
import _ from 'lodash'
import cx from 'classnames'


import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
} from '../../lib'
import FeedContent from './FeedContent'
import FeedDate from './FeedDate'
import FeedEvent from './FeedEvent'
import FeedExtra from './FeedExtra'
import FeedLabel from './FeedLabel'
import FeedLike from './FeedLike'
import FeedMeta from './FeedMeta'
import FeedSummary from './FeedSummary'
import FeedUser from './FeedUser'

class NewsFeed extends React.Component {

  render() {
    return (
            <h1>Hallo</h1>
    );
  }
}

export default NewsFeed
