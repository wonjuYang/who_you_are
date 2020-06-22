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
            pathname : '/result',
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
                    <form onSubmit={this.mySubmitHandler}> 
                        <div className="row uniform 50%">
                            <div className="6u">
                                <input type="radio" id="priority-normal" value="with" checked={this.state.q_third === "with"}  onChange={this.myChangeHandler} name="family" />
                                <label htmlFor="priority-normal"> 나는 가족(동생)과 함께 산다. </label>
                            </div>
                            <div className="6u$">
                                <input type="radio" id="priority-high" value="alone" checked={this.state.q_third === "alone"}  onChange={this.myChangeHandler} name="family" />
                                <label htmlFor="priority-high">나는 가족과 떨어져 산다.</label>
                            </div>
                            {/* 
                            <input type="radio" value="sister" checked={this.state.q_third === "sister"}  onChange={this.myChangeHandler} name="family"/> 나는 여동생이 있다.
                            <input type="radio" value="brother" checked={this.state.q_third === "brother"}  onChange={this.myChangeHandler} name="family"/> 나는 남동생이 있다.
                            */}
                        
                            <div className="12u$">
                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Submit" className="special" />      
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </section>
                
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_third

    

