import React,{Component} from 'react';
import Producto from './Producto';

export default class Productos extends Component {

    render() {
        return (
            <div>
                <h2>Listado de Productos</h2>
                { Object.keys(this.props.products).map(key => (
                    <Producto 
                        key = {key}
                        product={this.props.products[key]}  />
                )) }
            </div>
        );
    }
}