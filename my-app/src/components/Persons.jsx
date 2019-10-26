import React from 'react';
import Person from './Person';

export default function Persons() {
    const personsArr = [
        {
            "name": "Ahmed",
            "age": 10,
            "description": "Self-Employee at Somewhere",
            "isEditMode": true
        },
        {
            "name": "Saif",
            "age": 20,
            "description": "Self-Employee at Somewhere",
            "isEditMode": false

        },
        {
            "name": "Zara",
            "age": 5,
            "description": "Self-Employee at Somewhere",
            "isEditMode": false

        }
    ]
    return (
        <div className="persons">
            <h1>Persons</h1>
            {
                personsArr.map(person => <Person personDetails = {person} />)
            }
        </div>
    )
}
