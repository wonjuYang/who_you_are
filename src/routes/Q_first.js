import React from 'react';


class Q_first extends React.Component {

    componentDidMount(){
        console.log(this.props);
        const {location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }

    render(){
        
        const { location } = this.props;
        if(location.state){    
            return <span>{location.state.userName}</span>;
        }else{
            return null;
        }  
    }
}


export default Q_first

    

