import React from 'react';


class Q_third extends React.Component {


    componentDidMount(){
        
        const {location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    constructor(props) {
        console.log(props);
        super(props);
        this.state = { q_third: '' };
    }

    myChangeHandler = (event) => {
        this.setState({q_third: event.target.value});
        console.log(this.state);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        
        this.props.history.push({
            pathname : '/Q_forth',
            state : {
                userName :this.props.location.state.userName,
                q_first: this.props.location.state.q_first,
                q_second: this.props.location.state.q_second,
                q_third: this.state.q_third,
            }
        });

        /*alert("You are submitting " + this.state.username);*/

    }

    render(){
        
        const { location } = this.props;
        if(location.state){    
            return (
                <section>
                    <span>q_third</span>
                    <form onSubmit={this.mySubmitHandler}> 
                        <input type="radio" value="sister" checked={this.state.q_third === "sister"}  onChange={this.myChangeHandler} name="family"/> 나는 여동생이 있다.
                        <input type="radio" value="brother" checked={this.state.q_third === "brother"}  onChange={this.myChangeHandler} name="family"/> 나는 남동생이 있다.
                        <input type="submit" value="Submit"  /> 
                    </form>
                </section>
                
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_third

    

