import React from 'react'
import { Board } from 'react-trello'

function Person(name, address, phone) {
    this.Name = name;
    this.address = address;
    this.phone = phone;

    var person = [
        "name",
        "address",
        "phone"
    ]
}


function Trello() {
    function onDataChange() {
        console.log("I'm a changing...")
    }
    function onCardDelete() {
        <button onclick="function onCardDelete()"> Click me</button>

        // <button onclick="function onCardDelete()"> Click me {
        //     console.log("I'm deleting something")
        // }
        // </button>
        // function onCardDelete() {
        //     console.log("I'm deleteing something")
    }
    // function onCardAdd() {
    //     console.log("I'm adding something")
    // }
    // function onCardClick() {
    //     console.log("I'm clicking stuff")


    return (

        <Board
            data={{
                lanes: [
                    {
                        id: 'Waiting for drop off',
                        title: 'Drop Off',
                        cards: [
                            {
                                id: 'Waiting for drop off',
                                title: 'Name: John Doe',
                                description: 'Address: 901 Interntional Parkway Lake Mary',
                                label: '30 mins'
                            },
                        ]

                    },

                    {
                        id: 'Waitng for pick up',
                        title: 'Pick Up',
                        cards: [
                            {
                                id: 'Waitng for pick up',
                                title: 'Name: Jeb Bush',
                                description: 'Address: 1601 Pennsylvania Ave Washington',
                                label: '2 years'
                            },
                        ]
                    },

                    {
                        id: 'In transport',
                        title: 'In transposrt',
                        cards: [
                            {
                                id: 'In Transport',
                                title: 'Name: Jane Doe',
                                description: 'Address: 1099 Heathrow Park Lane',
                                label: '30mins'
                            },
                        ]

                    },
                    {
                        id: 'Done',
                        title: 'Done',
                        cards: [
                            {
                                id: 'Done',
                                title: 'Name: El Presidente',
                                description: 'Address: 1601 Pennsylvania Ave Washington',
                                label: '2 years'
                            }
                        ]

                    },

                ]
            }}
            draggable laneDraggable={false}
            id="EditableBoard1"
            onDataChange={onDataChange}
            onCardDelete={onCardDelete}
        // onCardAdd={onCardAdd}
        // onCardClick={onCardClick}
        />
    )
}

export default Trello