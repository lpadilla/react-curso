import React,{Component} from 'react';
import Presupuesto from './Presupuesto';
import Restante from './Restante';

export default class ControlPresupuesto extends Component {

    render() {
        return (
            <React.Fragment>
                <Presupuesto 
                    presupuesto = {this.props.presupuesto}
                />
                <Restante 
                    restante = {this.props.restante}
                    presupuesto = {this.props.presupuesto}
                />
            </React.Fragment>
        );
    }
}