import React from 'react';
import '../styles/login.css';


class Recovery extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          email:''
        };
    
        this.passwordRecovery = this.passwordRecovery.bind(this);
    }
    passwordRecovery(event) {
      
      
        event.preventDefault();
    }
     render(){
        return(
            <form className="conten" onSubmit={this.passwordRecovery}>
            <span className="conten-top-barra"/>
            <div className="conten-login">
                  <img className="img-logo" src="https://www.viajarmilan.com/img/visitar-la-catedral-de-milan.jpg"/>
                  <h3 className="title-h3">please enter your email</h3>
                  
                  <input className="input-data-us" 
                    type="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={(e)=>this.setState({email:e.target.value})} required/>
                    
                    <div className="position-recovery">
                         <a href="/" className="recovery">Return login</a>
                     </div>
                  
                  <input type="submit" className="start-login" value="validate" />
            </div>
         </form>
        )
     }
}
export default Recovery
  
  