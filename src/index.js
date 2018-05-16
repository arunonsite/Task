import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Calculation from './components/calculation';
import DivResult from './components/div_calaculation';

class App extends Component{
render(){
    return (
        <Calculation   />
    )

};
}
ReactDOM.render(<App />,document.querySelector('.container'));