import { Fragment, useState, useEffect, Component } from 'react';

import classes from './UserFinder.module.css'
import Users from './Users';
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";



class UserFinder extends Component {
     static contextType = UsersContext;

    constructor() {
        super();
        this.state ={
            filteredUsers: [],
            searchTerm: ''
        }
    }
    //Do Not Do Like This - It will be an Infinite Loop
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.setState({filteredUsers:DUMMY_USERS.filter((user) => user.name.includes(searchTerm))})
    // }
    // componentDidUpdate(prevProps,prevState) {
    //     if(prevState.searchTerm !== this.state.searchTerm){
    //         this.setState({filteredUsers:DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm))})
    //     }
    // }

    // No If Check is required
   //  componentDidMount() {
   //      //send HTTP Request...
   //      this.setState({filteredUsers: this.context.users})
   //
   //  }
   // componentWillUnmount() {
   //      console.log("User will Unmount!!")
   // }

    searchChangeHandler(event){
        this.setState({searchTerm: event.target.value});
    }


    render() {
        return (

            <Fragment>
                <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </Fragment>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
//
//
//
// };

export default UserFinder;