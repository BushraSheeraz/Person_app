import React from 'react';
import PersonInfo from './PersonInfo';
import PersonEdit from './PersonEdit';
import { Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Person(props) {
    return (
        <div className="person">
            <Card style={{ width: '18rem' }}>
                {props.personDetails.isEditMode ? <PersonEdit personData= {props.personDetails} /> : <PersonInfo personData ={props.personDetails} />}
            </Card>
        </div>
    )
}

Person.propTypes = {
    personData: PropTypes.object
}