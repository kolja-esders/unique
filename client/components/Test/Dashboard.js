import React from 'react';
import { List, Header, Feed, Statistic, Segment, Grid, Label } from 'semantic-ui-react';
//import numeral from 'numeral'


function getInitialEvents() {
  let now = new Date()
  return [{
    key: 4,
    actual_date: new Date(now.getTime() - 20000),
    isFleetBoard: true,
    date: '20 seconds ago',
    summary: 'Truck #51F8 (DHL Freight) arrived at dock 12.',
    extraText: ''
  }, {
    key: 3,
    actual_date: new Date(now.getTime() - 70000),
    isFleetBoard: false,
    date: '1 minute ago',
    summary: 'Finished unloading truck #3E44 (DHL Freight).',
    extraText: ''
  }, {
    key: 2,
    actual_date: new Date(now.getTime() - 120000),
    isFleetBoard: true,
    date: '2 minutes ago',
    summary: 'Truck #67C5 (Emons) arrived at dock 3.',
    extraText: ''
  }, {
    key: 1,
    actual_date: new Date(now.getTime() - 300000),
    isFleetBoard: false,
    date: '5 minutes ago',
    summary: 'Finished unloading truck #4113 (Emons).',
    extraText: ''
  }];
}



const data = {
  labels: [
    'Driving (loaded)',
    'Lifting',
    'Idling',
    'Driving (empty)',
    'Charging'
  ],
  datasets: [{
    data: [350, 100, 70, 40, 40],
    backgroundColor: [
    '#5DA5DA',
    '#FAA43A',
    '#60BD68',
    '#F17CB0',
    '#B2912F'
    ]
  }]
};

let triggered = false;
let shouldUpdate = false;
let state = { events: getInitialEvents() };
let currentInstance = null;

(function loop(that) {
  let waitingTime = Math.round(Math.random() * 10000) + 500;
  setTimeout(function() {
    addEvent()
    loop()
  }, waitingTime)
}());


function addEvent() {
  const haulier = ['Riedlin', 'Kühne + Nagel', 'Hannich', 'Emons', 'Genthner', 'DHL Freight']
  let prob = Math.random()
  let now = new Date()
  let summary = ''
  let isFleetBoard = prob < 0.2
  let truckId = Math.round(Math.random() * 0xEEEE + 0x1111).toString(16).toUpperCase()
  let selectedHaulier = haulier[Math.floor(Math.random() * 6)]
  if (isFleetBoard) {
    summary = 'Truck #' + truckId + ' (' + selectedHaulier + ') arrived at dock ' + Math.round((Math.random() * 35 + 1)) + '.'
  } else {
    let action = prob < 0.6 ? 'unloading' : 'loading'
    summary = 'Finished ' + action + ' truck #' + truckId + ' (' + selectedHaulier + ').'
  }

  let event = {
    key: state.events[0].key + 1,
    actual_date: now,
    isFleetBoard: isFleetBoard,
    date: 'just now',
    summary: summary,
    extraText: ''
  }
  if (state.events.length >= 6) {
    state.events.pop()
  }
  for (let event of state.events) {
    let secondsAgo = Math.round((now.getTime() - event.actual_date.getTime()) / 1000)
    if (secondsAgo > 60) {
      event.date = Math.floor(secondsAgo / 60) + (secondsAgo < 120 ? ' minute ago' : ' minutes ago')
    } else {
      event.date = secondsAgo + (secondsAgo == 1 ? ' second ago' :  ' seconds ago')
    }
  }

  state.events.unshift(event)
}

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = state
    shouldUpdate = true
    currentInstance = this
    if (!triggered) {
      triggered = true
      setInterval((() => {
        if (shouldUpdate) {
          currentInstance.state = state
          currentInstance.setState(currentInstance.state)
        }
      }), 1000)
    }
  }

  componentWillUnmount() {
    shouldUpdate = false
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Column computer="8" mobile="16" key="0">
            <Header as="h2" attached="top">
              Events
            </Header>
            <Segment attached>
              <Feed>
                {this.state.events.map((e) => {
                  return (
                    <Feed.Event key={e.key}>
                      <Feed.Content>
                        <Feed.Date content={e.date} />
                        <Feed.Summary>
                          { e.isFleetBoard ? (
                              <Label color='red' horizontal>FleetBoard</Label>
                            ) : (
                              <Label color='grey' horizontal>Vado</Label>
                            )
                          }
                          {e.summary}
                        </Feed.Summary>
                        <Feed.Extra text content={e.extraText} />
                      </Feed.Content>
                    </Feed.Event>
                )})}
              </Feed>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default (Dashboard);
