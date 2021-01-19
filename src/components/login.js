import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel.js';
import '../styles/login.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          pass:'',
          email:''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleSubmit(event) {
        //alert(this.state.name+" "+this.state.pass);
        
        ReactDOM.render(
          //cambio al cargar los datos
           <ControlPanel></ControlPanel>
          ,
          document.getElementById('root')
        );
        
        event.preventDefault();
    }

    render(){
        return (
            <form className="conten" onSubmit={this.handleSubmit}>
               <span className="conten-top-barra"/>
               <div className="conten-login">
                     <img className="img-logo" src="https://www.viajarmilan.com/img/visitar-la-catedral-de-milan.jpg"/>
                     
                     <input className="input-data-us" 
                       type="text" 
                       placeholder="Username" 
                       value={this.state.name} 
                       onChange={(e)=>this.setState({name:e.target.value})} required/>
                     
                     <input className="input-data-pa" 
                       type="password" 
                       placeholder="Password" 
                       value={this.state.pass} 
                       onChange={(e)=>this.setState({pass:e.target.value})} required/>

                     <div className="position-recovery">
                         <a href="/Recovery" className="recovery">Password recovery?</a>
                     </div>

                     <input type="submit" className="start-login" value="login" />
               </div>
            </form>
     
        );
    }

}

export default Login