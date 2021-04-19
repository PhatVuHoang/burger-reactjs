import React, { Component } from 'react'
// Thư viện kết nối với Redux
import {connect} from 'react-redux';
import './Burger.css'

class Burger extends Component {

    renderBreadMid = () => {
        let {burger} = this.props
        return Object.entries(burger).map(([propsBurger, value],index) => {

            let breadMid = [];
            for(let i = 0; i < value; i++) {
                breadMid.push(<div key={i} className={propsBurger}></div>)
            }

            return breadMid
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-success font-weight-bold">Burger Store</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className="text-center text-danger">Bánh burger của bạn</h3>
                        <div className="breadTop"></div>
                        {this.renderBreadMid()}
                        <div className="breadBottom"></div>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        burger:state.BurgerReducer.burger
    }
}

export default connect (mapStateToProps, null)(Burger)

