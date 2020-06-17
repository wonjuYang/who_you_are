import React from 'react';


class Q_second extends React.Component {


    componentDidMount(){
        
        const {location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    constructor(props) {
        super(props);
        this.state = { q_second: '' };
    }

    myChangeHandler = (event) => {
        this.setState({q_second: event.target.value});
        console.log(this.state);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        
        this.props.history.push({
            pathname : '/Q_third',
            state : {
                userName :this.props.location.state.userName,
                q_first: this.props.location.state.q_first,
                q_second: this.state.q_second,
            }
        });

        /*alert("You are submitting " + this.state.username);*/

    }

    render(){
        
        const { location } = this.props;
        if(location.state){    
            return (
                <form onSubmit={this.mySubmitHandler}>
                    <input type="radio" value="ipad" checked={this.state.q_second === "ipad"}  onChange={this.myChangeHandler} name="gender"/> 나는 아이패드를 가지고 있다.
                    <input type="radio" value="airpot" checked={this.state.q_second === "airpot"}  onChange={this.myChangeHandler} name="gender"/> 나는 에어팟을 가지고 있다.
                    <input type="submit" value="Submit"  /> 
                </form>
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_second

    

