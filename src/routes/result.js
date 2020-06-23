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


        this.name = q_result.userName;

        if(q_result.q_first === "highschool" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "랑랑이야ㅠ 행복하자ㅠ";
        }else if(q_result.q_first === "highschool" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "내 칭구 항나륑~!";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "보영이지요";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "사나가 틀림없어 .. ! ";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "with"){
            this.f_result = "소링 ~";
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "alone"){
            this.f_result = "고앵 애옹 소현";
        }else{
            this.f_result="누군데 이거 하고 있는건데?? 내 친구 맞아?? 다시 해"
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
                <div> 짠 {this.name}(은) 는 바로 {this.f_result}</div>                 
            </section>
           
        )
    }



}

export default result;