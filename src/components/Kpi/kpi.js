import React, { Component } from 'react';
import s from './kpi.scss';


const Kpi = React.createClass({
    getInitialState() {
        return {};
    },
    render ( ) {
        return <div className="col-md-2 kpi">
            <div className="col-md-3 chart">
                <i className={ this.props.icon }></i>
            </div>
            <div className="col-md-9 value">{ this.props.value }</div>
        </div>;
    }
});

export default Kpi;