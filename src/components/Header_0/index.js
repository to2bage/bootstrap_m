import React, { Component } from "react";
import { connect } from "react-redux";
import {
    HeaderContainer,
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from "./style.js";

class Header extends Component {
    render () {
        return (
            <div>
                <HeaderContainer>
                    <HeaderWrapper>
                        <Logo />
                        <Nav>
                            <NavItem className='left active'>首页</NavItem>
                            <NavItem className='left'>下载APP</NavItem>
                            <NavItem className='right'>登录</NavItem>
                            <NavItem className='right'>Aa</NavItem>
                            <NavSearch></NavSearch>
                        </Nav>
                        <Addition>
                            <Button>注册</Button>
                            <Button>写文章</Button>
                        </Addition>
                    </HeaderWrapper>
                </HeaderContainer>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({});

const mapPropsToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapPropsToDispatch)(Header);