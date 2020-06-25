import React from 'react';
import pic1 from '../image/pic01.PNG'
import pic2 from '../image/pic02.PNG'



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

    isEveryFieldValid = () => {
        const { isNameValid } = this.state;
        return isNameValid;
      }

    renderSubmitBtn = () => {
        if (this.isEveryFieldValid()) {
          return (
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          )
        } 
      
        return (
          <button type="submit" className="btn btn-primary btn-block" disabled>
            Submit
          </button>
        )
    }


    myChangeHandler = (event) => {
        this.setState({q_first: event.target.value});

        if(event.target.value === undefined || event.target.value === "" || event.target.value === " " || event.target.value === null){
            this.setState({
                isNameValid: false})
        }else{
            this.setState({
                isNameValid: true})
        }
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
                <div className='container'>
                    <header id="header">
                        <a href="/" className="logo"><strong>WHO ARE YOU</strong></a>
			        </header>
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="row 50% uniform">
                            <div className="6u"><span className="image fit"><img src={pic1} alt="" /></span></div>
                            <div className="6u$"><span className="image fit"><img src={pic2} alt="" /></span></div>
                        </div>
                        <div className="row uniform 50%">
                            <div className="6u">
                                <input type="radio" id="priority-normal" value="highschool" checked={this.state.q_first === "highschool"}  onChange={this.myChangeHandler} name="study" />
                                <label htmlFor="priority-normal">나는 원주와 고등학교 동창이다.</label>
                            </div>
                            <div className="6u$">
                                <input type="radio" id="priority-high" value="universe" checked={this.state.q_first === "universe"}  onChange={this.myChangeHandler} name="study" />
                                <label htmlFor="priority-high">나는 원주와 대학교 동창이다.</label>
                            </div>
                            {/* 
                            <input type="radio" value="universe" checked={this.state.q_first === "universe"}  onChange={this.myChangeHandler} name="study"/> 나는 원주와 대학교 동창이다.
                            <input type="radio" value="highschool" checked={this.state.q_first === "highschool"}  onChange={this.myChangeHandler} name="study"/> 나는 원주와 고등학교 동창이다.
                            */}
                            
                        </div>
                        <div className="12u$">
                            <ul className="actions">
                                <li>
                                    {this.renderSubmitBtn()}  
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_first

    

