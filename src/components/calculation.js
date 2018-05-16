import React, {Component} from 'react';
import DivResult from './div_calaculation';

class Calculation extends Component{
    
      constructor(props) {
        super(props);
        console.log(this);
        this.state = { a: 0,b:0,result:0 };
        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
        this.handleClickMul = this.handleClickMul.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChangeFirst(e) {
        this.setState({a: e.target.value});
        
      }
      handleChangeSecond(e) {
        this.setState({b: e.target.value});
      }
   
      handleClick(event) {
       
        let a = this.state.a;
        let b = this.state.b;
        let c = parseInt(a) + parseInt(b);
     
        this.setState({result:c});
      }
      handleClickMul(){
          let a = this.state.a;
          let b = this.state.b;
          let c = parseInt(a) * parseInt(b);
          this.setState({result:c})
      }
      render() {
       
        return (
          <div>
          <input onChange={this.handleChangeFirst} />
          <input onChange={this.handleChangeSecond} />
          <p>Result:</p> {this.state.result}
         <button  onClick={this.handleClick}>Addition</button>
         <button  onClick={this.handleClickMul}>Multiplication </button>
         <DivResult resultval={this.state.result} />
          </div>
        );
      }
}

export default Calculation;