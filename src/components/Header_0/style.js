import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderContainer = styled.div.attrs({
    className: "container-fluid"
})``;

export const HeaderWrapper = styled.div.attrs({
    className: "row bg-light"
})`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    className: "col-1", href: "/"
})`
    position: absolute;
    top: 0;
    left: 0;
    
    display: block;       // a标签的样式, 由内联, 变为块状, 这样可以设置width height
    width: 100px;
    height: 56px;
    
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div.attrs({
    className: "col-9"
})`
    //width: 960px;
    height: 100%;
    margin: 0 auto;       // 水平居中
    padding-right: 10px;
    box-sizing: border-box;
    //background: orangered;
`;

export const NavItem = styled.div.attrs({

})`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    
    &.left {
      float: left;
    }
    &.right {
      float: right;
      color: #969696;
    }
    &.active {
      color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    
    border: none;
    outline: none;
    border-radius: 19px;
    
    background: #eee;
    font-size: 14px;
    
    &::placeholder {
      color: #777
    }
`;

export const Addition = styled.div.attrs({
    className: "col-2"
})`
    //position: absolute;
    //right: 0;
    //top: 0;
    
    height: 56px;
    background: orange;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 10px;
    padding: 0 15px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
`;