import React from 'react'
import Result from '../components/result';


import pic1 from '../image/sample.jpg';
import pic2 from '../image/sample.jpg';
import pic3 from '../image/sample.jpg';
import pic4 from '../image/sample.jpg';
import pic5 from '../image/sample.jpg';
import pic6 from '../image/sample.jpg';
import pic7 from '../image/sample.jpg';
import pic8 from '../image/sample.jpg';

import pic9 from '../image/sample.jpg';
import pic10 from '../image/sample.jpg';
import pic11 from '../image/sample.jpg';
import pic12 from '../image/sample.jpg';
import pic13 from '../image/sample.jpg';
import pic14 from '../image/sample.jpg';
import pic15 from '../image/sample.jpg';
import pic16 from '../image/sample.jpg';
import pic17 from '../image/sample.jpg';
import pic18 from '../image/sample.jpg';

import pic19 from '../image/sample.jpg';
import pic20 from '../image/sample.jpg';
import pic21 from '../image/sample.jpg';
import pic22 from '../image/sample.jpg';
import pic23 from '../image/sample.jpg';
import pic24 from '../image/sample.jpg';
import pic25 from '../image/sample.jpg';
import pic26 from '../image/sample.jpg';
import pic27 from '../image/sample.jpg';
import pic28 from '../image/sample.jpg';

import pic31 from '../image/sample.jpg';
import pic32 from '../image/sample.jpg';
import pic33 from '../image/sample.jpg';
import pic34 from '../image/sample.jpg';
import pic35 from '../image/sample.jpg';
import pic36 from '../image/sample.jpg';
import pic37 from '../image/sample.jpg';
import pic38 from '../image/sample.jpg';
import pic39 from '../image/sample.jpg';
import pic40 from '../image/sample.jpg';
import pic41 from '../image/sample.jpg';
import pic42 from '../image/sample.jpg';
import pic43 from '../image/sample.jpg';
import pic44 from '../image/sample.jpg';


import pic45 from '../image/sample.jpg';
import pic46 from '../image/sample.jpg';
import pic47 from '../image/sample.jpg';
import pic48 from '../image/sample.jpg';
import pic49 from '../image/sample.jpg';
import pic50 from '../image/sample.jpg';
import pic51 from '../image/sample.jpg';
import pic52 from '../image/sample.jpg';

import pic53 from '../image/sample.jpg';
import pic54 from '../image/sample.jpg';
import pic55 from '../image/sample.jpg';
import pic56 from '../image/sample.jpg';
import pic57 from '../image/sample.jpg';
import pic58 from '../image/sample.jpg';
import pic59 from '../image/sample.jpg';
import pic60 from '../image/sample.jpg';
import pic61 from '../image/sample.jpg';
import pic62 from '../image/sample.jpg';
import pic63 from '../image/sample.jpg';
import pic64 from '../image/sample.jpg';
import pic65 from '../image/sample.jpg';
import pic66 from '../image/sample.jpg';
import pic67 from '../image/sample.jpg';
import pic68 from '../image/sample.jpg';



const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
  )

  const all_by = [
    {pic: pic1, text: '첫번째 사진 설명' },
    {pic: pic2, text: '두번째 사진 설명' },
    {pic: pic3, text: '세번째 사진 설명' },
    {pic: pic4, text: '네번째 사진 설명' },
    {pic: pic5, text: '다섯번째 사진 설명' },
    {pic: pic6, text: '여섯번째 사진 설명' },
    {pic: pic7, text: '일곱번째 사진 설명' },
    {pic: pic8, text: '여덞번째 사진 설명' },
]


const all_sn = [
    {pic: pic9, text: '첫번째 사진 설명' },
    {pic: pic10, text: '두번째 사진 설명' },
    {pic: pic11, text: '세번째 사진 설명' },
    {pic: pic12, text: '네번째 사진 설명' },
    {pic: pic13, text: '다섯번째 사진 설명' },
    {pic: pic14, text: '여섯번째 사진 설명' },
    {pic: pic15, text: '일곱번째 사진 설명' },
    {pic: pic16, text: '여덞번째 사진 설명' },
    {pic: pic17, text: '여덞번째 사진 설명' },
    {pic: pic18, text: '여덞번째 사진 설명' },
]


const all_sh = [
    {pic: pic19, text: '첫번째 사진 설명' },
    {pic: pic20, text: '두번째 사진 설명' },
    {pic: pic21, text: '세번째 사진 설명' },
    {pic: pic22, text: '네번째 사진 설명' },
    {pic: pic23, text: '다섯번째 사진 설명' },
    {pic: pic24, text: '여섯번째 사진 설명' },
    {pic: pic25, text: '일곱번째 사진 설명' },
    {pic: pic26, text: '여덞번째 사진 설명' },
    {pic: pic27, text: '여덞번째 사진 설명' },
    {pic: pic28, text: '여덞번째 사진 설명' },
]

const all_yh = [

    {pic: pic31, text: '세번째 사진 설명' },
    {pic: pic32, text: '네번째 사진 설명' },
    {pic: pic33, text: '다섯번째 사진 설명' },
    {pic: pic34, text: '여섯번째 사진 설명' },
    {pic: pic35, text: '일곱번째 사진 설명' },
    {pic: pic36, text: '여덞번째 사진 설명' },
    {pic: pic37, text: '여덞번째 사진 설명' },
    {pic: pic38, text: '여덞번째 사진 설명' },
    {pic: pic39, text: '여덞번째 사진 설명' },
    {pic: pic40, text: '여덞번째 사진 설명' },
    {pic: pic41, text: '여덞번째 사진 설명' },
    {pic: pic42, text: '여덞번째 사진 설명' },
    {pic: pic43, text: '여덞번째 사진 설명' },
    {pic: pic44, text: '여덞번째 사진 설명' },
    
]

const all_js = [

    {pic: pic45, text: '세번째 사진 설명' },
    {pic: pic46, text: '네번째 사진 설명' },
    {pic: pic47, text: '다섯번째 사진 설명' },
    {pic: pic48, text: '여섯번째 사진 설명' },
    {pic: pic49, text: '일곱번째 사진 설명' },
    {pic: pic50, text: '여덞번째 사진 설명' },
    {pic: pic51, text: '여덞번째 사진 설명' },
    {pic: pic52, text: '여덞번째 사진 설명' },
    
]

const all_hn = [

    {pic: pic53, text: '세번째 사진 설명' },
    {pic: pic54, text: '네번째 사진 설명' },
    {pic: pic55, text: '다섯번째 사진 설명' },
    {pic: pic56, text: '여섯번째 사진 설명' },
    {pic: pic57, text: '일곱번째 사진 설명' },
    {pic: pic58, text: '여덞번째 사진 설명' },
    {pic: pic59, text: '여덞번째 사진 설명' },
    {pic: pic60, text: '여덞번째 사진 설명' },
    {pic: pic61, text: '여덞번째 사진 설명' },
    {pic: pic62, text: '여덞번째 사진 설명' },
    {pic: pic63, text: '여덞번째 사진 설명' },
    {pic: pic64, text: '여덞번째 사진 설명' },
    {pic: pic65, text: '여덞번째 사진 설명' },
    {pic: pic66, text: '여덞번째 사진 설명' },
    {pic: pic67, text: '여덞번째 사진 설명' },
    {pic: pic68, text: '여덞번째 사진 설명' },
    
]




class resultApp extends React.Component{

    
      

    state = {
        input: '', //input 값
        //일정 데이터 초깃값
        todos: initialTodos,
    }

    constructor(props){

        
      
        super(props);
        
        const {location, history } = this.props;
        if(location.state === undefined){
            document.location.href = '/'
            history.push('/')
        }


        this.f_result = "nodata";
        this.f_img_result = null;

        
        const q_result = props.location.state;


        this.name = q_result.userName;

        if(q_result.q_first === "highschool" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "랑랑이야ㅠ 행복하자ㅠ";
            this.f_img_result = all_yh;
        }else if(q_result.q_first === "highschool" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "내 칭구 항나륑~!";
            this.f_img_result = all_hn;
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "alone"){
            this.f_result = "보영이지요";
            this.f_img_result = all_by;
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "with"){
            this.f_result = "사나가 틀림없어 .. ! ";
            this.f_img_result = all_sn;
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "nocountry" && q_result.q_third === "with"){
            this.f_result = "소링 ~";
            this.f_img_result = all_js;
        }else if(q_result.q_first === "universe" && q_result.q_second ===  "yescountry" && q_result.q_third === "alone"){
            this.f_result = "고앵 애옹 소현";
            this.f_img_result = all_sh;
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
            //f_result, f_result_name, name
            <Result f_result={this.f_img_result} f_result_name = {this.f_result} name={this.name} />
           
        );
    }



}

export default resultApp;