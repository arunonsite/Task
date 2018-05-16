import React,{ Component } from 'react';


class DivResult extends Component{

constructor(props){
    super(props);
    this.DivCal = this.DivCal.bind(this);
    this.state= {e:0,result:0}
    //console.log(this);
}
DivCal(){
    console.log(this);
    let d = this.props.resultval;
    let e = d /2;
    this.setState=({result:e});
   // console.log(e);
   // return e;
}
render() {
        return (
            <div>
            <p>Result:</p> {this.state.result}
        <button onClick={this.DivCal}>Division</button>
        </div>
        );
    }
}

export default DivResult;
