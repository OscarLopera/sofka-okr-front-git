import React from 'react'
import { auth } from "../../functions/firebaseAuth";
import Navbar from '../../components/structure/Navbar';
import Sidebar from '../../components/structure/Sidebar';
import Welcome from '../../components/notifications/welcome/Welcome';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            titulosOkr: [],
            datoOkr: {},
            datosTabla: [],
            porcentajeAvance: []
        }
    }
    componentDidMount() {
        Promise.all([
            
            fetch(`http://localhost:8080/dashboard/user-okrs/12`).then(response => response.json()),
            fetch(`http://localhost:8080/dashboard/okrTable/6084801fb2ce1e4174af0245`).then(response => response.json()),
            fetch(`http://localhost:8080/dashboard/okrAdvance/6084801fb2ce1e4174af0245`).then(response => response.json())
        ]).then(response => {

            this.setState({ titulosOkr: response[0], datoOkr: response[1] })
            this.setState({ datosTabla: response[1]["keyResults"] })
            this.setState({porcentajeAvance : response[2]})
            console.log(this.state.porcentajeAvance)
        }
        );
    }
    render(  ) 

    {      
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

                        <h1 className='porcentaje'> {this.state.porcentajeAvance}%</h1>
                            <table className='tableOkr'>
                                <tr className='tableHeadOkr'>

                                    <th><h3 className="titleOkr">{this.state.datoOkr.title}</h3> <h5 className="editTitleOkr">Edit</h5></th>

                                </tr>

                                <tr>
                                    <td><h4>Objetivo: {this.state.datoOkr.objective}</h4> </td>
                                </tr>

                                <hr></hr>

                                <tr>
                                    <td><h3>Resultados clave</h3> </td>
                                </tr>

                                {this.state.datosTabla.map(keyResult => (
                                    <>
                                        <tr>
                                            <td> <h4>Responsable: {keyResult.personInChargeNameKr}  </h4> </td>
                                            
                                        </tr>
                                        
                                        <tr>
                                            <td><h5>{keyResult.keyResult} {keyResult.advanceKr}%</h5> </td>
                                        </tr>
                                        <hr></hr>
                                    </>
                                ))}
     
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard