import {React, useState, useEffect} from 'react'
import API from '../utils/API'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
  } from 'reactstrap';
const ShowcaseCard = (props) => {
    const [item, setItem] = useState(['Items'])
    useEffect(() => {
        API.getItems()
        .then(res => {
           setItem(res.data)
          
        })
    },[])
    console.log(item)
    return(
        <div>
           
            {item.map(i => {
                return (
                    
                        
                    <Card>
                      <CardImg top width="100%" src={i.image} alt={i.title} />
                      <CardBody>
                        <CardTitle tag="h5">{i.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{i.pub_date}</CardSubtitle>
                        <CardText>{i.body}</CardText>
                        
                      </CardBody>
                    </Card>
                   
                 
                )
            })}
           
        </div>
        
    )
}

export default ShowcaseCard