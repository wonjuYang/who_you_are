import React, { Component } from 'react';
import Carousel from 'react-grid-carousel';



class result extends Component {

    
    render() {

        
        const MyDot = ({ isActive }) => (
            <span
              style={{
                display: 'inline-block',
                height: isActive ? '10px' : '8px',
                width: isActive ? '10px' : '8px',
                background: '#F8E0E6'
              }}
            ></span>
          )

          const { f_result, f_result_name, name } = this.props;
          console.log(f_result)
          const f_final_result = f_result.map(
            (f_result, i) => (
                <Carousel.Item key={i}>
                    <img alt="" src={f_result.pic} width="100%" height="500px" />
                    <div>{f_result.text}</div>
                </Carousel.Item>
            )
        )
        console.log(f_final_result);
        for(var i=0; i<f_result.length; i++){
            console.log(f_result.text);
        }
        
        


        return (
            <section>
                <div style={{marginTop: "50px", width:"600px"}} className="container App" >
                    <Carousel showDots={true} dot={MyDot} cols={1} rows={1} gap={10} loop>
                        { f_final_result}
                    </Carousel>
                </div>
                <div style={{marginTop: "50px"}} className="container App">
                    <div> 짠 {name}(은) 는 바로 {f_result_name}</div>
                </div>      
            </section>
        );
    }
}

export default result;