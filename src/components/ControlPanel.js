import React from 'react';
import '../styles/Table.css';

class ControlPanel extends React.Component{
 render(){
     return(
         <div className="conten-panel">
             <div className="conten-panel-barra">
                <div className="panel-barra-up">
                 <div className="barra-item"></div>
                 <div className="barra-item"></div>
                 <div className="barra-item"></div>
                 <div className="barra-item"></div>
                </div>
                <div className="panel-barra-down">
                 <div className="barra-item-cir"></div>
                 <div className="barra-item"></div>
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
         </div>
     );
 }
}

export default ControlPanel
