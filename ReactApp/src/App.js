import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
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

    this.addNumber = this.addNumber.bind(this);
  }

 addNumber(event){
    this.setState({
      number: event.target.value
    })
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        let posts = data.map(post => {
       
         if(post.albumId == this.state.number){
              return(
                <div key = {post.albumId}>
                  <CardGroup className="container">
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
          // console.log(`Data Is ${post}`);
      })
  }

  render(){
  return(
    <Fragment>
      <div id="particles-js">
      <Particles height="100vh" width="100vw"
        params={{
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


// function App() {
//   return (
    
//     <div className="App">
//             <div style={{ position: 'absolute' ,height: 1000}}>

      // <Particles height="100vh" width="100vw"
      //   params={{
      //     "particles": {
      //         "number": {
      //             "value": 150
      //         },
      //         "size": {
      //             "value": 3
      //         }
      //     },
      //     "interactivity": {
      //         "events": {
      //             "onhover": {
      //                 "enable": true,
      //                 "mode": "repulse"
      //             }
      //         }
      //     }
      // }} />
//       </div>
//       <CardGroup>
//         {/* <Tilt> */}
        // <Card>
        //   <Card.Img variant="top" src="holder.js/100px160" />
        //   <Card.Body>
        //     <Card.Title>Card title</Card.Title>
        //     <Card.Text>
        //       This is a wider card with supporting text below as a natural lead-in to
        //       additional content. This content is a little bit longer.
        //     </Card.Text>
        //   </Card.Body>
        //   <Card.Footer>
        //     <small className="text-muted">Last updated 3 mins ago</small>
        //   </Card.Footer>
        // </Card>
//         {/* </Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//       <CardGroup>
//         {/* <Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         {/* </Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//       <CardGroup>
//         {/* <Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         {/* </Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//       <CardGroup>
//         {/* <Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         {/* </Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//       <CardGroup>
//         {/* <Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This content is a little bit longer.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         {/* </Tilt> */}
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This card has supporting text below as a natural lead-in to additional
//               content.{' '}
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px160" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>
//               This is a wider card with supporting text below as a natural lead-in to
//               additional content. This card has even longer content than the first to
//               show that equal height action.
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>

//     </div>
//   );
// }
// 
// export default App;
