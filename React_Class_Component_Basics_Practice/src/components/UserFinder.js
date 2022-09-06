import { Fragment, useState, useEffect, Component } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {

    constructor() {
        super();
        this.state ={
            filteredUsers:DUMMY_USERS,
            searchTerm:''
        }
    }
   componentDidUpdate(prevProps, prevState) {
        if(prevProps.searchTerm !== this.state.searchTerm){
            this.state({filteredUsers:DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))})
        }
   }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <Fragment>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} className={classes.finder}/>
                <Users users={filteredUsers} />
            </Fragment>
        );
    }
}


export default UserFinder;