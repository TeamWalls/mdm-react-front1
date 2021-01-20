import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Table.css';

class ControlPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    activeModal(e) {
        document.querySelector(".modal").classList.add("active");
    }
    closeModal(e){
        document.querySelector(".modal").classList.remove("active");
    }   
 render(){
     return(
         <div className="conten-panel">
             <div className="conten-panel-barra">
                <div className="panel-barra-up">
                 <div className="barra-item" onClick={this.activeModal}></div>
                 <div className="barra-item" onClick={this.activeModal}></div>
                 <div className="barra-item" onClick={this.activeModal}></div>
                 <div className="barra-item" onClick={this.activeModal}></div>
                </div>
                <div className="panel-barra-down">
                 <div className="barra-item-cir"></div>
                 <div className="barra-item" onClick={this.activeModal}></div>
                </div>
             </div>
             <div className="conten-panel-table">
                 <div className="table-header">
                     <div className="title">Titulo</div>
                     <div className="buttom-table">
                         <a href="/" className="exit">Exit</a>
                     </div>
                 </div>
                <div className="table-spy">
                    <input className="table-spy-input" 
                          type="text" 
                          placeholder="look for" 
                          required/>
                </div>
                <div className="table-return"></div>
             </div>
             <div className="modal" >
                <div className="modal-cont">
                    
                    <div className="madal-title">Paso 1</div>
                    
                    <input className="modal-input" 
                          type="text" 
                          placeholder="date" 
                          required/>
                    <input className="modal-input" 
                          type="text" 
                          placeholder="date" 
                          required/>
                    <input className="modal-input" 
                          type="text" 
                          placeholder="date" 
                          required/>      
                    <div className="modal-button">
                        <button className="modal-close" onClick={this.closeModal}>Clouse</button>
                        <button className="modal-accept" onClick={this.closeModal}>Accept</button>
                    </div>  
                </div>
             </div>
         </div>
     );
 }
}

export default ControlPanel
