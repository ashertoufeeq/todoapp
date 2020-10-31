import React,{Component} from 'react';
import Hello from './hello';
let a = 'Asher'; 
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }
    add(a){
        const {text} = this.state;
        this.setState({
            text:text+","+a.target.value
        })

    }
    takeinput(a){
        console.log(a.target.value)
        this.setState({
            text:a.target.value
        })

    }
    render(){
        const {text} = this.state;
        return(
         <div>
            <input type={'text'} onKeyUp={(e)=>{this.takeinput(e)}}></input>        
            <button onClick={()=>{this.add(0)}}>add subject! </button>           
           <Hello name={text} />
            {this.state.tag?this.state.tag:null}
         </div>
            )
    }

}

export default App;