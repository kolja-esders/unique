import * as React from 'react'
import { withRouter } from 'found'
import { debounce } from 'lodash'

const replace = debounce(
  (router: InjectedFoundRouter, to: string) => {
    router.replace(to)
  },
  30000,
  {
    leading: true,
  },
)

class RedirectOnMount extends React.Component<Props, {}> {
  componentWillMount() {
    replace(this.props.router, this.props.to)
  }

  render() {
    return null
  }
}

export default withRouter(RedirectOnMount)
