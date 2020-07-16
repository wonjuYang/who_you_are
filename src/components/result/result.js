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

        return (
            <section>
                <div style={{marginTop: "50px", width:"600px"}} className="container App" >
                    <Carousel showDots={true} dot={MyDot} cols={1} rows={1} gap={10} loop>
                        { this.f_img_result.map((img, i) => (
                            <Carousel.Item key={i}>
                            <img alt="" src={img} width="100%" height="500px" />
                            </Carousel.Item>
                    ))}
                    </Carousel>
                </div>
                <div style={{marginTop: "50px"}} className="container App">
                    <div> 짠 {this.name}(은) 는 바로 {this.f_result}</div>
                </div>      
            </section>
        );
    }
}

export default result;