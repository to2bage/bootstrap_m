import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
// import logoPic from "../../statics/logo.png";
import { connect } from "react-redux";
import { actionCreator } from "./store"
import {
    Input,
    SearchInfo,
    SearchItem
} from "./style";

class Header extends Component {
    componentDidMount () {
        this.props.handleListInit();
    }

    getList () {
        const { focused, list } = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    {
                        list.map(item => {
                            return (
                                <SearchItem>
                                    { item }
                                </SearchItem>
                            )
                        })
                    }
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render () {
        const {
            focused,
            list,
            handleInputFocus,
            handleInputBlur
        } = this.props;
        console.log(focused);
        return (
           <div className='component' style={{height: "300vh"}}>
               <nav className="navbar navbar-expand-md  fixed-top navbar-light bg-light">
                   <div>
                       <a href="/" className="navbar-brand">NavBarBrand</a>
                       <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-content">
                           <span className="navbar-toggler-icon"></span>
                       </button>
                   </div>

                   <div className="collapse navbar-collapse" id="navbar-content">
                       <ul className="navbar-nav">
                           <li className="nav-item col-md-auto">
                               <a href="/" className="nav-link px-3">
                                   <i className="fab fa-windows"/>
                                   <span>首页</span>
                               </a>
                           </li>
                           <li className="nav-item col-md-auto">
                               <a href="/" className="nav-link px-3">下载App</a>
                           </li>
                           <li className="nav-item col-md-6">
                               <form action="#">
                                   <CSSTransition
                                       in={ focused }
                                       timeout={500}
                                       classNames="slider"
                                   >
                                       <Input type="email"
                                              className="form-control px-3 focused"
                                              // className={ focused ? "focused": ""}
                                              placeholder="Enter email"
                                              onFocus={ handleInputFocus }
                                              onBlur={ handleInputBlur }

                                       />
                                   </CSSTransition>
                               </form>
                               {
                                   this.getList()
                               }
                           </li>
                       </ul>
                   </div>

                   <div className="row">
                       <a href="/" className='btn btn-light mx-2'>Aa</a>
                       <a href="/" className='btn btn-light mx-2'>登录</a>
                       <a href="/" className="btn btn-secondary mx-2"><i className="fas fa-user-lock pr-2" />注册</a>
                       <a href="/" className="btn btn-success"><i className="fa fa-pen pr-2"/>写文章</a>
                   </div>
               </nav>
           </div>
        )
    }
}

const mapStateToProps = (state) => ({
    focused: state.Header.focused,
    list: state.Header.list
});

const mapPropsToDispatch = (dispatch) => ({
    handleInputFocus () {
        dispatch(actionCreator.input_focus_action());
    },
    handleInputBlur () {
        dispatch(actionCreator.input_blur_action());
    },
    handleListInit () {
        dispatch(actionCreator.get_list_action());
    }
});

export default connect(mapStateToProps, mapPropsToDispatch)(Header);