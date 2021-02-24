import React from 'react'
import {Container, Card, Button, CardImg, CardTitle, CardText, CardDeck,CardSubtitle, CardBody, Col, Row} from 'reactstrap'
import {FaSuitcase, FaSchool} from 'react-icons/fa'
import './home.css'
import profile from'../unnamed.jpg'
import reactlogo from '../react-logo.png'
import pythonlogo from '../python.png'
import jslogo from '../logo-javascript.svg'
import nodelogo from '../nodejs.png'
import djangologo from '../django.png'
import html5logo from '../html5.png'
const Home = (props) => {
    return(
        <div>
        <Container>
         <div className="bg-light p-5 rounded-lg m-3 imgheader">
         <img className="profile"  src={profile}></img>
        <h1 className="name">samuel baetz</h1>
        <h2 className="name2">Web Dev, Data Enthusiast, Writer </h2>
       
         </div>
         <CardDeck>
      <Card>
        <CardBody>
          <CardTitle tag="h5"><FaSuitcase/> Employment</CardTitle>
        <ul>
          <li>Target Corporation 2016-2019 Sr. TL Hardlines</li>
          <li>Barnes and Noble 2019-2020 Assistant Store Manager</li>
          <li>Postmates 2018- Delivery Driver</li>
          <li>Freelance Developer 2020-</li>
        </ul>
          
         
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5"><FaSchool/> Education</CardTitle>
          <ul>
            <li>St Cloud State University 2019-2020 Political Science</li>
            <li>University of North Carolina Chapel Hill 2020-2021 Full Stack Dev Bootcamp</li>
          </ul>
          
        </CardBody>
      </Card>

    </CardDeck>
    <div className="skills">
        <CardDeck>
            <Card>
                <CardBody>
                    <CardTitle tag='h5'>Skills</CardTitle>
                    <CardDeck>
      <Card>
        <CardImg top width="100%" src={reactlogo} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">React</CardSubtitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={jslogo} alt="Card image cap" /> 
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Javascript</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={pythonlogo} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Python</CardSubtitle>
          
        </CardBody>
      </Card>
    </CardDeck>
    <div className="second">
    <CardDeck>
      <Card>
        <CardImg top width="100%" src={nodelogo} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Node.js</CardSubtitle>
         
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={djangologo} alt="Card image cap" /> 
        <CardBody>
          
          <CardSubtitle tag="h6" className="mb-2 text-muted">Django</CardSubtitle>
          
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={html5logo} alt="Card image cap" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">HTML5</CardSubtitle>
          
        </CardBody>
      </Card>
    </CardDeck>
    </div>
                         </CardBody>
            </Card>
        </CardDeck>
        </div>
        </Container>
    
        </div>       
    )
}

export default Home