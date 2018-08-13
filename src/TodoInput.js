import React, { Component } from 'react';

export default class TodoInput extends Component {
    render(){
        return <input type="text" Value={this.props.content}
        onKeyPress={this.submit.bind(this)}
        onChange={this.changeTitle.bind(this)}/>

    }
    submit(e){
        if (e.key ==='Enter'){
            this.props.onSumibt(e)
        }
    }

    changeTitle(e){
        this.props.onChange(e)
    }
    }