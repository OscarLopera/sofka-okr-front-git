import React from 'react'
import {auth} from '../functions/firebaseAuth'

class Dashboard extends React.Component{
    
        constructor(){
            super();
            this.state = {
                titulosOkr : [] 
            }
        }

        componentDidMount(){

            fetch(`http://localhost:8080/dashboard/user-okrs/12`)
            .then(response=>response.json())
            .then(response=>{
                console.log(response)
                this.setState({titulosOkr: response})
            })
        }

        render() {
        return (
            <div className='home'>

            <h1 className='dashboardTitle'>Dashboard de {auth.currentUser.displayName}</h1>
           

            <div className='selectTag'>
                <form >
                <select className='selectTagForm' name="okr" id="okrs">
                <optgroup className='selectTagOptGroup' label="Select OKR">
                {this.state.titulosOkr.map(okr => (<option value="okr1" className='okrSelection'>{okr.title}</option>))}
                </optgroup>
                </select>
                </form>
            </div> 

            <div className='main'> 
                
                <div className='statusContainer' id='status'>
                    <div className='containerStatus'>   
                            <li className='status'>0 En proceso </li>
                            <li className='status'>0 Completadas </li>
                            <hr className='hr'></hr> 
                    </div>

                    <div className='containerTableOkr' id='containerTableOkr'>

                <table className='tableOkr'>
                    <tr className='tableHeadOkr'>
                        <th><h3 className="titleOkr">Titulo</h3> <h5 className="editTitleOkr">Edit</h5></th>
                    
                    </tr>

                    <tr>
                        <td><h4>Objetivo:</h4> </td>
                    </tr>

                    <hr></hr>
                    <tr>
                        <td ><h4>Resultados clave</h4> </td>
                    </tr>

                    <tr>
                        <td> <h5>Responsable: {auth.currentUser.displayName}</h5> </td>
                    </tr>   

                    <tr>
                        <td>Titulo KR: <h5>99%</h5></td>
                    </tr>  

                    <tr>
                        <td> <h5>Responsable: {auth.currentUser.displayName}</h5></td>
                    </tr>   

                    <tr>
                        <td>Titulo KR: <h5>99%</h5></td>
                    </tr>   
                </table>
                </div>    
              </div>   
        </div>
         </div>  
        )
    }
}

export default Dashboard