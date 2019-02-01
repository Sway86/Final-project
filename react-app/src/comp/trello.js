import React from 'react'
import { Board } from 'react-trello'

const data = {
    lanes: [
        {
            id: 'lane1',
            title: 'Waiting',
            label: '2/2',
            cards: [
                { id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins' },
                { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
            ]
        },
        {
            id: 'lane2',
            title: 'In Trasnport',
            label: '0/0',
            cards: []
        }
    ]
}

export default class Trello extends React.Component {
    render() {
        return <Board data={data} />
    }
}
