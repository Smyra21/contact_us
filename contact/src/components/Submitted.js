import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class Submitted extends Component {
    constructor(props){
        super(props);
        console.log("props12345678", this.props)
    }

    componentWillUpdate(props){
        console.log("wil mount", props)
    }

    render() {
        return (
            <div className="container-fluid">
            <div></div>
            <div className="row">
              <div className="col-sm-6" style={{backgroundColor:"cyan"}}>
                <div><h1><strong>Submitted Data : </strong></h1></div>
                <div>
                  {/* {this.props.history} */}
                  <ul>
                  {
                    console.log("data data", this.props.history)
                  }
                    {this.props.history.map(el => (
                      <li
                        key={el.id}
                        onClick={() => this.props.onDelItem(el.id)}
                      >
                        {el.name}  &nbsp;
                        {el.emailId} &nbsp;
                        {el.password} &nbsp;
                        {el.phone} &nbsp;
                        {el.address} &nbsp;

                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-sm-6"></div>
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        history:state.history,
        repos: state.repos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    
     onDelItem: (id) => dispatch({type:'DEL_ITEM', key:id })
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Submitted);