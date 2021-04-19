import React, { Component } from "react";
// Thư viện kết nối với Redux
import { connect } from "react-redux";
import "./Burger.css";

class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }

      return breadMid;
    });
  };

  renderMenu = () => {
    // lấy props từ redux về
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, value], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td className="text-center">
            <button onClick={()=>{
                this.props.addBreadMid(propsMenu, 1)
            }} className="btn btn-success mr-2" >+</button>
            {burger[propsMenu]}
            <button onClick={()=>{
                this.props.addBreadMid(propsMenu, -1)
            }} className="btn btn-danger ml-2">-</button>
          </td>
          <td>${value}</td>
          <td>${value * burger[propsMenu]}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-success font-weight-bold mb-5 text-center">
          Burger Store
        </h3>
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-danger">Your burger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Choose quantity food</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Food</th>
                  <th></th>
                  <th>Unit price</th>
                  <th>Price</th>
                </tr>
                {this.renderMenu()}
              </thead>
              <tfoot>
                  <tr>
                      <td colSpan="2"></td>
                      <td>Total: </td>
                      <td>${this.props.total}</td>
                  </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        addBreadMid: (propsBurger,amount) => {
            //tạo action
            const action = {
                type:'ADD_BREADMID',
                propsBurger,
                amount
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Burger);
