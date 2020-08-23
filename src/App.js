import React, {Component} from 'react';
import './App.css';
//import marked from 'marked';
let marked=require("marked");
class App extends Component
{
  state={
    text:''
  }
  handleChange=(e)=>{
    this.setState({
      text: e.target.value
    })
  }
  render(){

    const {text}= this.state;
    const markdown=marked(text);
    return(
      <div id="wrapper"> 
        <h2 className= "text-center m-4" >Convert Your Markdown</h2>
        
        <div className="row">
           <div className="col-6">
             <h6 className="text-center">EDITOR</h6>
            <textarea  className="form-control" id="editor" value={text} onChange={this.handleChange}/>

           </div>
           <div className="col-6 " id="preview">
           <h6 className="text-center">PREVIEWER</h6>
           <div className="preview rounded" dangerouslySetInnerHTML={{__html:markdown}}>
           
            </div>
            

           </div>

      </div>
    </div>


    );
  }
}



export default App;
