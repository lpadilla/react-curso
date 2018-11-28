import React from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends React.Component{
    state = {
        products : []
    };
    componentDidMount(){
        const products = [
            {name:"libro", price:50},
            {name:"CD", price:20},
            {name:"Pelicula", price:80},
            {name:"Camisa", price:200},
            {name:"Short", price:165}
        ];
        this.setState({
            products: products
        })
    }
    render(){
        return(
            <div>
                <Header title="Nuestra Tienda Virtual" />
                <Productos products={this.state.products}/>
                <Footer />
            </div>
        );
    }
}

export default Aplicacion;