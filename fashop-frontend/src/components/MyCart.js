import React, { Component } from "react";
import { Link } from 'react-router-dom'; 
import { removeItem, addQuantity, subtractQuantity } from '../actions/cartAction';
import { connect } from 'react-redux';
import Recipe from './Recipe';
import { Button } from 'semantic-ui-react'

class MyCart extends Component {

    render(){
              
        let addedProducts = this.props.products.length ?
            (  
                this.props.products.map(product=>{
                    return(
                       
                        <li className="collection-item avatar" key={product.id}>
                                    <div className="item-img"> 
                                        <img src={product.img} alt={product.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{product.name}</span>
                                        <p>{product.description}</p>
                                        <p><b>Price: {product.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {product.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="caret square up" onClick={()=>{this.handleAddQuantity(product.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="caret square down" onClick={()=>{this.handleSubtractQuantity(product.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <Button color='black' onClick={()=>{this.handleRemove(product.id)}}>Remove</Button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedProducts}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        products: state.carts.addedProducts,
        addedProducts: state.carts.addedProducts
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCart)