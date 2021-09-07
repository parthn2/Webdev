import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import Tilt from 'react-tilt'
import Particles from 'react-particles-js';
import React, {Component, Fragment} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: [],
      number: 1
    }
  }

  async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/photos')                      //Fetching data from server
      .then(res => res.json())
      .then(data => {
        let posts = data.map(post => {
       
         if(post.albumId === this.state.number){
              return(
                <div key = {post.albumId} class="fullwindow">
                  <CardGroup className="container">                            {/*Card Model from bootstrap*/}
                    <Tilt>                                                     {/*Tilt.js*/}
                      <Card className="box">
                        <Card.Img src={post.url} className="cardImage" />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            {post.url}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tilt>
                    <Tilt>
                      <Card className="box">
                        <Card.Img src={post.url} className="cardImage" />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            {post.url}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Tilt>
                  </CardGroup>
                </div>
                )
            }

        })
          this.setState({
            post: posts
          })
      })
  }

  render(){
  return(
    <Fragment>
      <div id="particles-js">
        <Particles height="100vh" width="100vw"                 //Particle.js 
          params={{                                             //parameters for particle properties
            "particles": {
                "number": {
                    "value": 150
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }} />
      </div>
      <div className = "grid">
        {this.state.post}
      </div>
    </ Fragment>
  )
  }
}

export default App;

