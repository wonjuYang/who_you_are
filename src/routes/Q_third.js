import React from 'react';
import pic1 from '../image/pic06.jpg'
import pic2 from '../image/pic05.jpg'


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
        this.setState({q_third: event.target.value});

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
                <div style={{marginTop: "50px"}} className='container App'>
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="row 50% uniform">
                            <div className="6u"><span className="image fit" ><label htmlFor="with"><img src={pic1} alt="" /></label></span></div>
                            <div className="6u$"><span className="image fit"><label htmlFor="alone"><img src={pic2} alt="" /></label></span></div>
                        </div>
                        <div className="row uniform 50%">
                            <div className="6u">
                                <input type="radio" id="with" value="with" checked={this.state.q_third === "with"}  onChange={this.myChangeHandler} name="family" />
                                <label htmlFor="with"> 나는 가족(동생)과 함께 산다. </label>
                            </div>
                            <div className="6u$">
                                <input type="radio" id="alone" value="alone" checked={this.state.q_third === "alone"}  onChange={this.myChangeHandler} name="family" />
                                <label htmlFor="alone">나는 가족과 떨어져 산다.</label>
                            </div>
                            {/* 
                            <input type="radio" value="sister" checked={this.state.q_third === "sister"}  onChange={this.myChangeHandler} name="family"/> 나는 여동생이 있다.
                            <input type="radio" value="brother" checked={this.state.q_third === "brother"}  onChange={this.myChangeHandler} name="family"/> 나는 남동생이 있다.
                            */}
                        
                            <div className="12u$">
                                <ul className="actions">
                                    <li>
                                        {this.renderSubmitBtn()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
                
                
            );
            
        }else{
            return null;
        }  
    }
}


export default Q_third

    

