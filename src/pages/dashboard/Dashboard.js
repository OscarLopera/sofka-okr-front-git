import React from 'react'
import { auth } from "../../functions/firebaseAuth";
import Navbar from '../../components/structure/Navbar';
import Sidebar from '../../components/structure/Sidebar';
import Welcome from '../../components/notifications/welcome/Welcome';
import BurnDownChart from './BurndownChart';
import PieChart from './PieChart';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.llamarOkr=this.llamarOkr.bind(this);

        this.state = {
            titulosOkr: [],
            datoOkr: {},
            datosTabla: [],
            porcentajeAvance: [],
            valuesBurndownChart: {},
            valuesPieChart:{},
            title:{}

        
        }
    }
    
    llamarOkr(event){
        event.preventDefault();
       console.log(event.target.value);

       Promise.all([
        
        fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/okrTable/${event.target.value}`).then(response => response.json()),
        fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/okrAdvance/${event.target.value}`).then(response => response.json()),
        fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/burndownchart/${event.target.value}`).then(response => response.json()),
       

    ]).then(response => {
  
        this.setState({ datosTabla: response[0]["keyResults"] })
        this.setState({ porcentajeAvance: response[1] })
        this.setState({ valuesBurndownChart : response[2] })
        this.setState({title: response[0]["title"]})
      
    }
    );
    }
   
    componentDidMount() {
        Promise.all([
            fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/user-okrs/12`).then(response => response.json()),
            fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/okrTable/6084801fb2ce1e4174af0245`).then(response => response.json()),
            fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/okrAdvance/6084801fb2ce1e4174af0245`).then(response => response.json()),
            fetch(`https://tranquil-island-91872.herokuapp.com/dashboard/burndownchart/6084801fb2ce1e4174af0245`).then(response => response.json()),
           

        ]).then(response => {

            this.setState({ titulosOkr: response[0], datoOkr: response[1] })
            this.setState({ datosTabla: response[1]["keyResults"] })
            this.setState({ porcentajeAvance: response[2] })
            this.setState({ valuesBurndownChart : response[3] })
            this.setState({title: response[1]["title"]})
            this.setState({valuesPieChart: response[4]})
            console.log(this.state.valuesPieChart)
        }
        );
    }
    render() {
       
        
        return (
            
            <>
                <Navbar />
                <Sidebar />
                <div className='home'>
                    <section>
                        {auth.currentUser ? <Welcome /> : ""}
                    </section>
                    <h1 className='dashboardTitle'>Dashboard {auth.currentUser ? auth.currentUser.displayName : ""}</h1>

                    <div className='selectTag'>
                        <form >
                            <select className='selectTagForm' name="okr" id="okrs"  onChange={this.llamarOkr}>
                                <optgroup className='selectTagOptGroup' label="Select OKR" >
                                    {this.state.titulosOkr.map(okr => (<option value={okr.id} className='okrSelection' >{okr.title}</option>))}
                                </optgroup>
                            </select>
                        </form>
                    </div>

                    <div className='main'>

                        <div className='statusContainer' id='status'>
                            <div className='containerStatus'>
                            <h1 className='porcentaje'> {this.state.porcentajeAvance}%</h1>
                                <hr className='hr'></hr>
                            </div>
                            
                            <div className='containerBurndownchart' id='containerBurndownchart'>
                            
                                <BurnDownChart className='burndownchart' id='burndownchart' title= {this.state.title} values={this.state.valuesBurndownChart}></BurnDownChart>
                            </div>
                         

                            <div className='containerTableOkr' id='containerTableOkr'>
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
            </>
        )
    }
}

export default Dashboard