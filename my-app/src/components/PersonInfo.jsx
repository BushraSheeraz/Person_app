import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function PersonInfo(props) {
    return (
        <div>
            <Card.Body>
                <Card.Title>{props.personData.name} , {props.personData.age}</Card.Title>
                <Card.Text>
                    {props.personData.description}
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Edit</Button>
                    <Button variant="secondary">Delete</Button>
                </ButtonGroup>
            </Card.Body>
        </div>
    )
}

PersonInfo.propTypes = {
    personData: PropTypes.object
}