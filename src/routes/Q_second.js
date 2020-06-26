import React from 'react';
import pic1 from '../image/pic03.jpg'
import pic2 from '../image/pic04.jpg'


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
        this.setState({q_second: event.target.value});
       
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
                <div className='container'>
                    <header id="header">
                        <a href="/" className="logo"><strong>WHO ARE YOU</strong></a>
			        </header>
                    <form onSubmit={this.mySubmitHandler}>
                        <div className="row 50% uniform">
                        <div className="6u"><span className="image fit"><label htmlFor="yescountry"><img src={pic1} alt="" /></label></span></div>
                            <div className="6u$"><span className="image fit"><label htmlFor="nocountry"><img src={pic2} alt="" /></label></span></div>
                        </div>
                        <div className="row uniform 50%">
                            <div className="6u">
                                <input type="radio" id="yescountry" value="yescountry" checked={this.state.q_second === "yescountry"}  onChange={this.myChangeHandler} name="country" />
                                <label htmlFor="yescountry">나는 3개월 이상 해외에 머무른 적이 있다.</label>
                            </div>
                            <div className="6u$">
                                <input type="radio" id="nocountry" value="nocountry" checked={this.state.q_second === "nocountry"}  onChange={this.myChangeHandler} name="country" />
                                <label htmlFor="nocountry">나는 3개월 이상 해외에 머무른 적이 없다.</label>
                            </div>
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


export default Q_second

    

