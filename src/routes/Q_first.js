import React from 'react';


class Q_first extends React.Component {


    componentDidMount(){
        console.log(this.props);
        const {location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    constructor(props) {
        
        super(props);
        this.state = { q_first: '' };
    }

    myChangeHandler = (event) => {
        this.setState({q_first: event.target.value});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        
        this.props.history.push({
            
            pathname : '/Q_second',
            state : {
                userName: this.props.location.state.userName,
                q_first: this.state.q_first,
            }
        });

        /*alert("You are submitting " + this.state.username);*/

    }

    render(){
        
        const { location } = this.props;
        if(location.state){    
            return (
                <form onSubmit={this.mySubmitHandler}>
                    <input type="radio" value="universe" checked={this.state.q_first === "universe"}  onChange={this.myChangeHandler} name="study"/> 나는 원주와 대학교 동창이다
                    <input type="radio" value="highschool" checked={this.state.q_first === "highschool"}  onChange={this.myChangeHandler} name="study"/> 나는 원주와 고등학교 동창이다.
                    <input type="submit" value="Submit"  /> 
                </form>
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_first

    
