import React from 'react'

import Data1 from './Data1'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Animals = () => {
    return (
        <div>
            <div className='conatiner'>
                <div className='row'>
                    <h1 className="text-center my-5">Animals</h1>
                    {
                        Data1.map((cval) => {

                            return (
                                <div className="col-md-4 mt-1">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={cval.img1} height="200" />
                                        <Card.Body>
                                            <Card.Title><u>{cval.name1}</u></Card.Title>
                                            <Card.Text>
                                                <b>About:</b><br/>{cval.about1}<br />
                                                <b>Scientific Name:</b>{cval.scientificname1}<br/>
                                                <b>Lifespan:</b>{cval.lifespan}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Animals;