import React, { Component } from 'react'
import './Home.css'
import { Loader, Dimmer, Grid  } from 'semantic-ui-react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  validateForm() {
    return 'success'
  }

  render() {


    let divStyle = {
      width: '100%',
      height: '100%',
padding:'0px !important',
margin:'0px !important',
    }


    let headerStyle = {
      width: '100%',
      height: '100%',
padding:'0px !important',
margin:'0px !important',

background: 'grey'      
      //      width: '100%'
    }



    return (
      [
          <Grid  basic  style={divStyle}>
                <Grid.Column width={8} style={divStyle} >
                  <Dimmer style={divStyle} active >
                    <Loader style={divStyle}>Loading</Loader>
                  </Dimmer>
                  </Grid.Column>

                <Grid.Column width={8}  >
                  <Dimmer style={headerStyle}  active >
                    <Loader  >Loading</Loader>
                  </Dimmer>

                </Grid.Column>



          </Grid>
      ]
    )
  }
}

/*
                </Grid.Column>
                <Grid.Column  width={8}>
                  <Dimmer style={headerStyle}  active >
                    <Loader  >Loading</Loader>
                  </Dimmer>

                </Grid.Column>

          <Grid  basic  >
            <Grid.Row style={divStyle} >
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>

                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>

            </Grid.Row>

          <Grid.Row style={divStyle} >
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>

                </Grid.Column>

            </Grid.Row>

             <Grid.Row style={divStyle} >
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>

                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>

            </Grid.Row>

          <Grid.Row style={divStyle} >
                <Grid.Column style={headerStyle}  width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column  style={headerStyle}  width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>
                </Grid.Column>
            </Grid.Row>
           <Grid.Row style={divStyle} >
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>

                </Grid.Column>
                <Grid.Column style={headerStyle} width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>

            </Grid.Row>
            <Grid.Row style={divStyle} >
                <Grid.Column style={headerStyle}  width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
               <Grid.Column width={4} >
                          <Dimmer active >
                            <Loader>Loading</Loader>
                          </Dimmer>
                </Grid.Column>
                <Grid.Column  style={headerStyle}  width={4} >
                   <Header as='h2' >
                      <Icon name='settings' />
                      <Header.Content>
                        Busche Reporter
                      </Header.Content>
                    </Header>      
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dimmer active >
                    <Loader>Loading</Loader>
                  </Dimmer>
                </Grid.Column>
            </Grid.Row>

          </Grid>
*/
