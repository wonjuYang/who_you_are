import React from 'react';
import './Home.css';




class Home extends React.Component{


    constructor(props) {
        super(props);
        this.state = { username: '' };
        console.log(props)
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
    }

    

    render(){
        return (
            <section className = "container">
                <header id="header">
                    <a href="index.html" className="logo"><strong>Binary</strong> by TEMPLATED</a>
                    <nav>
                        <a href="#menu">Menu</a>
                    </nav>
			    </header>
                <form onSubmit={this.mySubmitHandler}>
                    <label>
                        Name:
                        <input type="text" onChange={this.myChangeHandler} name="name" />
                    </label>
                    <input type="submit" value="Submit"  /> 
                </form>
                {/*<span>{this.state.username}</span>*/}
            </section>
           

        )
    }



}

export default Home;