import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PersonEdit(props) {
    return (
        <div>
            <Card.Body>
                <Card.Title>Person Edit</Card.Title>
                <Card.Text>
                    <input type="text" value={props.personData.name} />
                    <input type="text" value={props.personData.age} />
                    <textarea rows= "2" cols="30">{props.personData.description}</textarea>
                </Card.Text>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">ok</Button>
                    <Button variant="secondary">Cancel</Button>
                </ButtonGroup>
            </Card.Body>
        </div>
    )
}

PersonEdit.propTypes = {
    personData: PropTypes.object
}