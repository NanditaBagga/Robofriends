import React, { Component } from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary'

// class based component
class App extends Component{ 
    constructor(){
        super()
        this.state={//Smart components
            robots: [],
            searchfield:''
        }
        //console.log('constructors');
    }
    componentDidMount(){
        //console.log('check');
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users=> this.setState({robots: users}));
        
        //console.log('componentDidMount');
    }
    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const { robots, searchfield }=this.state;
        const filteredRobots = robots.filter(robot => {
            // return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            return robot.name.toLowerCase().startsWith(searchfield.toLowerCase())
        })
        //console.log('render');
        if(!robots.length){
            return <h1 className='tc'>LOADING...</h1>
        }else{
        return(
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
        }
    }

}
export default App;
//VirtualDOM is a javascript object that collects the state and react uses this state to render and pass them as props to the components
//So that the components that are just pure functions that can render
//Mounting-Start of the app 
//Updating
//Unmounting