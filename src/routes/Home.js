import React from 'react';
import './Home.css';

class Home extends React.Component{

    render(){
        return (
            <section className = "container">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </section>

        )
    }



}

export default Home;