import React from 'react';




class result extends React.Component{

    


    constructor(props){
      
        super(props);
        
        const {location, history } = this.props;
        if(location.state === undefined){
            document.location.href = '/'
            history.push('/')
        }




        this.f_result = "nodata";

        
        const q_result = props.location.state;


        

        if(q_result.q_first === "highschool" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "연희";
        }else if(q_result.q_first === "highschool" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "한나";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "보영";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "사나";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "with"){
            this.f_result = "진솔";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "alone"){
            this.f_result = "소현";
        }else{
            this.f_result="누군데 이거 하고 있는건데"
        }



    }

    componentDidMount(){
        
        const {location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }

        
    }



    render(){
        return (
            <section className = "container">
                짠 너는 
                <div>{this.f_result}</div> 
            </section>
           

        )
    }



}

export default result;