import React, { Component } from 'react';
import Kpi from '../Kpi/kpi';
import ECharts from 'react-echarts';
import s from './Hello.scss';
import Chart from '../Chart/chart'

class Hello extends Component {
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
    return  <div className="container-fluid">
                <div className="row kpi-panel">
                    <Kpi icon="wi wi-night-sleet" value="18.00"></Kpi>
                    <Kpi icon="wi wi-celsius" value="18.00"></Kpi>
                    <Kpi icon="wi wi-humidity" value="18.00"></Kpi>
                    <Kpi icon="wi wi-night-sleet" value="18.00"></Kpi>
                    <Kpi icon="wi wi-humidity" value="18.00"></Kpi>
                    <Kpi icon="wi wi-night-sleet" value="18.00"></Kpi>
                </div>
                <div className="row chart-row">
                    <Chart title="Hola"/>
                    <Chart title="Adios"/>
                </div>
                <div className="row chart-row">
                    <div className="col-md-8 echarts">
                        <div className="row title">
                            <span>Temperature VS Humidity:</span>
                        </div>
                        <ECharts option={ option } notMerge={ true }/>
                    </div>
                    <div className="col-md-4 echarts">
                        <div className="row title">
                            <span>Temperature VS Humidity:</span>
                        </div>
                        <ECharts option={ option } notMerge={ true }/>
                    </div>
                </div>
            </div>;
  }

}

export default Hello;
