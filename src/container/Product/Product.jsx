import React, {Component, Fragment} from 'react';

class Product extends Component {
    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://ekaputrafoods.co.id/allimg/conttoimg/brandimg/5.png" alt=""/>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://assets-a1.kompasiana.com/items/album/2017/07/17/sosis-596c3b4534aec0084334d522.jpg" alt="product_image" />
                    </div>
                    <p className="product-title">Sosis ayam</p>
                    <p className="product-price">Rp. 10.000</p>
                    <div className="counter">
                        <button className="minus">-</button>
                        <input type="text" value={3} />
                        <button className="plus">+</button>
                    </div>
                </div>
            </Fragment>
            
        );
    }
}

export default Product;