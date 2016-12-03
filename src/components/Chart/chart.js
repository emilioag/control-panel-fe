import React, { Component } from 'react';
import ECharts from 'react-echarts';
import s from './chart.scss';

class Chart extends Component {
    render() {
        let option = {
            backgroundColor: 'transparent',
            textStyle: {
                fontFamily: 'Indie Flower'
            },
            grid: {
                height: '200'
            },
            title : {
                show: false,
                text: 'Temperature VS Humidity',
                subtext: ''
            },
            legend: {
                data:['humidity', 'temperature'],
                right: '20%'
            },
            series: [
                { data: [ 1, 2, 3, 4], type: 'bar', name: '' }
            ],
            yAxis: {},
            xAxis: { data: [ 20, 50 , 60, 70 ] },
            tooltip: {
                trigger: 'axis'
            }
        };
        return <div className="col-md-6 echarts">
            <div className="row title">
                <span>{ this.props.title }</span>
            </div>
            <ECharts option={ option } notMerge={ true }/>
        </div>;
    }

}

export default Chart;
