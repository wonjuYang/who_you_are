import React from 'react';
import './Home.css';




class Home extends React.Component{


    constructor(props) {
        super(props);
        this.state = { username: '' };
        console.log(props)
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

    mySubmitHandler = (event) => {
        event.preventDefault();


        this.props.history.push({
            pathname : '/Q_first',
            state : {
                userName :this.state.username,
            }
        });

        /*alert("You are submitting " + this.state.username);*/

    }
    
    myChangeHandler = (event) => {

        this.setState({username: event.target.value});
        if(event.target.value === undefined || event.target.value === "" || event.target.value === " " || event.target.value === null){
            this.setState({
                isNameValid: false})
        }else{
            this.setState({
                isNameValid: true})
        }
    }

    

    render(){
        return (
            <section className = "container">
                <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Name:
                        <input type="text" onChange={this.myChangeHandler} name="name" />
                    </label>
                    {this.renderSubmitBtn()}

                </form>
                {/*<span>{this.state.username}</span>*/}
            </section>
           

        )
    }



}

export default Home;