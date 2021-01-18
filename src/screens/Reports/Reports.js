import React, { Component } from 'react';
import 'react-step-progress/dist/index.css';
import styles from './reports.scss';
import {
  PieChart,
  Pie,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBarChart,
  RadialBar,
  Legend,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Line,
  Area,
} from 'recharts';
import {
  data01,
  data02,
  radarData,
  radialData,
  barData,
  composedData,
} from './reportsData';

class Reports extends Component {
  render() {
    return (
      <>
        <h2>Reports</h2>
        <div className='main_container'>
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey='value'
              cx={200}
              cy={200}
              outerRadius={60}
              fill='#8884d8'
            />
            <Pie
              data={data02}
              dataKey='value'
              cx={200}
              cy={200}
              innerRadius={70}
              outerRadius={90}
              fill='#82ca9d'
              label
            />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              data={data02}
              dataKey='value'
              cx={200}
              cy={200}
              innerRadius={70}
              outerRadius={90}
              fill='#82ca9d'
              label
            />
          </PieChart>
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={radarData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis />
            <Radar
              name='Mike'
              dataKey='A'
              stroke='#8884d8'
              fill='#8884d8'
              fillOpacity={0.6}
            />
          </RadarChart>
        </div>
        <div className='main_container'>
          <RadialBarChart
            width={500}
            height={300}
            cx={150}
            cy={150}
            innerRadius={20}
            outerRadius={140}
            barSize={10}
            data={radialData}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey='uv'
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout='vertical'
              verticalAlign='middle'
              wrapperStyle={styles.wrapper_style}
            />
          </RadialBarChart>
          <BarChart
            width={500}
            height={300}
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </div>
        <div className='main_container'>
          <ComposedChart
            width={500}
            height={400}
            data={composedData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='uv' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
          </ComposedChart>
        </div>
      </>
    );
  }
}

export default Reports;
