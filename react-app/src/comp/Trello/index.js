//this used to be trello.js

import React, { Component } from 'react';
import { Board } from 'react-trello';
import { SIGTSTP } from 'constants';
// import { EditableBoard } from 'react-trello';
// import { eventBusHandle } from 'react-trello';

let eventBus = undefined
// const eventBusHandle = undefined
let data = undefined

// eventBusHandle = () => {
//     console.log("This is a special function that providers a publishHook to pass new events to the board")
// }

class Trello extends Component {

    setEventBus = eventBus => {
        this.setState({ eventBus })
    }
    //this is new for ^^^setEventBus^^^

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    setEventBus = (handle) => {
        eventBus = handle
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    };

    handleSubmit(event) {
        alert('From has been submitted: ' + SIGTSTP.state.value);
        event.pareventDefault();
    };

    onDataChange = () => {
        console.log("I'm a changing...")
    };

    onCardClick = () => {
        console.log("I'm clicking things")
    };

    onCardAdd = () => {
        eventBus.publish({ type: 'ADD_CARD', laneId: 'COMPLETED', card: { id: "M1", title: "Buy Milk", label: "15 mins", description: "Also set reminder" } })
        console.log("I'm adding things")
    };

    onCardDelete = () => {
        //delete stuff has to update state to re-render
        eventBus.publish({ type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: "M1" })
    };

    // <Board data={data} eventBusHandle={setBusHandle}/>
    // };

    //         <onDataChange
    //     onClick={() => { this.onDataChange(card.id) }
    //     } />

    // <button onclick="function onCardDelete()"> Click me {
    //     console.log("I'm deleting something")
    // }
    // </button>

    render() {
        return (
            <Board data={data}
                const data={{
                    lanes: [
                        {
                            id: 'Waiting for drop off',
                            title: 'Waiting for drop off',
                            label: '20/70',

                        },
                        {
                            id: 'Waiting for pick up',
                            title: 'Waiting for pick up',
                            label: '10/20',

                        },
                        {
                            id: 'In transport',
                            title: 'In transport',
                            label: '0/0',

                        },
                        {
                            id: 'Done',
                            title: 'Done',
                            label: '0/0',
                        }

                    ]
                }}
                data={this.state.boardData}
                draggable laneDraggable={false}
                editable={true}
                customCardLAyout={true}
                id="EditableBoard1"
                //onDataChange={this.onDataChange}
                //old one^
                onDataChange={this.ReceiveNewData}
                onCardDelete={this.onCardDelete}
                onCardAdd={this.onCardAdd}
                onCardClick={this.onCardClick}
                eventBusHandle={this.setEventBus} />
        )
    }
}

class App extends React.Component {
    render() {
        return <Board data={data} />
    }
}
export default App

//old verison \/
// export default Trello