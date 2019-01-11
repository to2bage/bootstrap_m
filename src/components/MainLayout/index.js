import React, { Component } from 'react';
import {
    DivContainer,
    DivRow,
    DivCol
} from "./style.js";

class MainLayout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                </div>
                <div className="row">
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                </div>
                <div className="row">
                    <div className="col" style={colStyle}>col</div>
                    <div className="w-100"></div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                </div>
                <div className="row">
                    <div className="col" style={colStyle}>col</div>
                    <div className="col-6" style={colStyle}>col</div>
                    <div className="col" style={colStyle}>col</div>
                </div>
                <div className="row">
                    <div className="col" style={colStyle}>col</div>
                    <div className="col-auto" style={colStyle}>colcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcolcol</div>
                    <div className="col" style={colStyle}>col</div>
                </div>
                <div className="row">
                    <div className="col-sm" style={colStyle}>col</div>
                    <div className="col-sm" style={colStyle}>col</div>
                    <div className="col-sm" style={colStyle}>col</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col border bg-light py-1 px-5">自定义列</div>
                        <div className="col border bg-light py-5">自定义列</div>
                    </div>
                </div>
                <div className="bg-info clearfix">
                    <button type='button' className='btn btn-secondary float-left'>Example Button Float Left</button>
                    <button type='button' className='btn btn-secondary float-right'>Example Button Float Right</button>
                </div>
                <div className="container">
                    <div className="row">
                        <button type='button' className='close'>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const colStyle = {
    background: 'orangered',
    border: '1px solid black'
};

export default MainLayout;

