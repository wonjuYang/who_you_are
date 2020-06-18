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
                    <input type="radio" value="yescountry" checked={this.state.q_second === "yescountry"}  onChange={this.myChangeHandler} name="country"/> 나는 3개월 이상 해외에 머무른 적이 있다.
                    <input type="radio" value="nocountry" checked={this.state.q_second === "nocountry"}  onChange={this.myChangeHandler} name="country"/> 나는 3개월 이상 해외에 머무른 적이 없다.
                    <input type="submit" value="Submit"  /> 
                </form>
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_second

    

