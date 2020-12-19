import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as multiplyActionTypes from "../actions/multiplyActions";
import "./component.css";
class ClassFunc extends Component {
   
    render() {
        return (
            <div className="component">
                <h1>Counter: {this.props.multiple} </h1>
                <button onClick={ this.props.multiplication }>Multiply by 10</button>
                <button onClick={ this.props.division }>Divide by 10</button>
            </div>
        );
    }

};




const mapStateToProps = state => {
    return {
        multiple: state.multiply,
    }
};

const mapDispatchToProps =  dispatch => {
    
    return {
        multiplication: () => dispatch({type: multiplyActionTypes.multiply}),
        division: () => dispatch({type: multiplyActionTypes.divide})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ClassFunc);