import React from 'react'
import { Board } from 'react-trello'

// {/* <Board
//     const data={
//         lanes: [
//             {
//                 id: 'lane1',
//                 title: 'Waiting',
//                 label: '2/2',
//                 cards: [
//                     { id: 'Card1', title: 'Name: John Doe', description: 'Address: 901 International Parkway Lake Mary', label: '30 mins' },
//                     { id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } }
//                 ]
//             },
//             {
//                 id: 'lane2',
//                 title: 'In Transport',
//                 label: '0/0',
//                 cards: []
//             },
//             {
//                 id: 'lane3',
//                 title: 'Done',
//                 label: '0/0',
//                 cards: [
//                     { id: 'Card3', title: 'Name: Jane Doe', description: 'Address: 801 Internnational Parkway Lake Mary' }

//                 ]
//             }
//         ]
//     }
// draggable
// onDataChange = { onDataChange }
// handleDragStart = { handleDragStart }
// handleDragEnd = { handleDragEnd }
// handleLaneDragStart = { handleLaneDragStart }
// handleLaneDragEnd = { handleLaneDragEnd }
//     />

// export default class Trello extends React.Component {
//     render() {
//         return <Board data={data} />
//     }
// } 

<Board
    data={{
        lanes: [
            {
                id: 'PLANNED',
                title: 'Planned Tasks',
                label: '20/70'

            },
            {
                id: 'WIP',
                title: 'Work In Progress',
                label: '10/20'

            },
            {
                id: 'BLOCKED',
                title: 'Blocked',
                label: '0/0'

            },

        ]
    }}
    draggable
    onDataChange={onDataChange}
    handleDragStart={handleDragStart}
    handleDragEnd={handleDragEnd}
    handleLaneDragStart={handleLaneDragStart}
    handleLaneDragEnd={handleLaneDragEnd}
/>


export default class Trello extends React.Component {
    render() {
        return <Board data={data} />
    }
} 