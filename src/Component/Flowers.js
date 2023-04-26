import React from 'react'
import Data from './Data'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Flowers = () => {
    return (
        <div>
            <div className='conatiner'>
                <div className='row'>
                    <h1 className="text-center my-5">Flowers</h1>
                    {
                        Data.map((val) => {

                            return (
                                <div className="col-md-4 mt-1">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={val.img} height="200" />
                                        <Card.Body>
                                            <Card.Title><u>{val.name}</u></Card.Title>
                                            <Card.Text>
                                                <b>About:</b><br/>{val.about}<br />
                                                <b>Scientific Name:</b>    {val.scientificname}
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

export default Flowers;