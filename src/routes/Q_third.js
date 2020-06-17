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
        this.state = { q_second: '' };
    }

    myChangeHandler = (event) => {
        this.setState({q_first: event.target.value});
        console.log(this.state);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();

        
        this.props.history.push({
            pathname : '/Q_third',
            state : {
                userName :this.state.username,
                q_first: this.state.q_first,
                q_second: this.state.q_second,
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
                        <input type="radio" value="MALE" checked={this.state.q_first === "MALE"}  onChange={this.myChangeHandler} name="gender"/> 나는 원주와 대학교 동창이다
                        <input type="radio" value="FEMALE" checked={this.state.q_first === "FEMALE"}  onChange={this.myChangeHandler} name="gender"/> 나는 원주와 고등학교 동창이다.
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

    

