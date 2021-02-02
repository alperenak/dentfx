import React, { Component } from 'react';
import { getCookie } from '../../utils/cookie';
import 'react-step-progress/dist/index.css';
import styles from './reports.scss';
import Chart from 'react-apexcharts';
import store from '../../store';

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '2week',
      dates: null,
      series: null,
      options: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          dates: [] || this.state.dates,
        },
      },
      series: [{ name: 'seri', data: [] }] || this.state.series,
    };
  }

  componentDidMount = async () => {
    let clinicId = getCookie('user_id');
    let reports = await store.getTreatmentReport(clinicId, {
      duration: this.state.duration,
    });
    this.setState({ dates: reports.data.date });
    this.setState({ series: reports.data.series });
  };

  renderGraph() {
    return (
      <>
        <row className='chart'>
          <h6>Tedavi & Hasta sayisi</h6>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width={500}
            height={320}
          />
          <h6>Randevu sayisi</h6>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width={500}
            height={320}
          />
        </row>
        <row className='chart'>
          <h6>Tedavi ucretleri</h6>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width={500}
            height={320}
          />
          <h6>Alinan toplam ucretler</h6>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width={500}
            height={320}
          />
        </row>
      </>
    );
  }

  render() {
    return (
      <>
        <h2>Reports</h2>
        <div className='main_container'>{this.renderGraph()}</div>
      </>
    );
  }
}

export default Reports;
