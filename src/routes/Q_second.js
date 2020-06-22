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
        console.log(props);
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
                    
                    <div className="row uniform 50%">
                        <div className="6u">
                            <input type="radio" id="priority-normal" value="yescountry" checked={this.state.q_second === "yescountry"}  onChange={this.myChangeHandler} name="country" />
                            <label htmlFor="priority-normal">나는 3개월 이상 해외에 머무른 적이 있다.</label>
                        </div>
                        <div className="6u$">
                            <input type="radio" id="priority-high" value="nocountry" checked={this.state.q_second === "nocountry"}  onChange={this.myChangeHandler} name="country" />
                            <label htmlFor="priority-high">나는 3개월 이상 해외에 머무른 적이 없다.</label>
                        </div>
                        {/* 
                        <input type="radio" value="yescountry" checked={this.state.q_second === "yescountry"}  onChange={this.myChangeHandler} name="country"/> 나는 3개월 이상 해외에 머무른 적이 있다.
                        <input type="radio" value="nocountry" checked={this.state.q_second === "nocountry"}  onChange={this.myChangeHandler} name="country"/> 나는 3개월 이상 해외에 머무른 적이 없다.
                        */}

                        <input type="submit" value="Submit"  /> 
                    </div>
                </form>
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_second

    

