import styled from "styled-components";

export const Input = styled.input.attrs({

})`
    &.focused {
        width: 100%;
    }
    &.slider-enter{
        width: 100%;
        transition: all .5s ease-out;
    }
    &.slider-enter-active{
        width: 150%;
    }
    &.slider-enter-done{
        width: 150%;
    }
    &.slider-exit{
        width: 150%;
        transition: all .5s ease-out;
    }
    &.slider-exit-active{
        width: 100%;
    }
`;

export const SearchInfo = styled.div.attrs({
    className: "shadow-lg p-3 mb-5 bg-white rounded"
})`
    position: absolute;
    left: 0;
    top: 56px;
    
    width: 240px;
    //height: 170px;
    //padding: 0 20px;
    background: chartreuse;
    
`;

export const SearchItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #969696;
    border-radius: 2px;
`;