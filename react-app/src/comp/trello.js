import React from 'react'
import { Board } from 'react-trello'

function Trello() {
    function onDataChange() {
        console.log("I'm a changing...")
    }

    return (

        <Board
            data={{
                lanes: [
                    {
                        id: 'Card1',
                        title: 'Waiting',
                        cards: [
                            {
                                id: 'Card1', title: 'Name: John Doe', description: 'Address: 901 Interntional Parkway LAke Mary', label: '30 mins'
                            },
                        ]

                    },
                    {
                        id: 'In transport',
                        title: 'In transposrt',
                        label: '10/20'

                    },
                    {
                        id: 'Done',
                        title: 'Done',
                        label: '0/0'

                    },

                ]
            }}
            draggable
            onDataChange={onDataChange}
        />
    )
}

export default Trello