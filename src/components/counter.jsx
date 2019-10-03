import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count:1
    }

    render() { 
        return <span>{this.state.count}</span>;
    }
}
 
export default Counter;