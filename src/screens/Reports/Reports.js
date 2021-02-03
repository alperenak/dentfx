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

      datesTedavi: null,
      optionsTedavi: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [] || this.state.datesTedavi,
        },
      },
      seriesTedavi: [{ name: 'seri', data: [] }],

      datesPayment: null,
      optionsPayment: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [] || this.state.datesPayment,
        },
      },
      seriesPayment: [{ name: 'seri', data: [] }],

      datesAppointment: null,
      optionsAppointment: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [] || this.state.datesAppointment,
        },
      },
      seriesAppointment: [{ name: 'seri', data: [] }],
    };
  }

  componentDidMount = async () => {
    let clinicId = getCookie('user_id');
    let treatmentReports = await store.getTreatmentReport(clinicId, {
      duration: this.state.duration,
    });

    this.setState({ datesTedavi: treatmentReports.data.date });
    this.setState({ seriesTedavi: treatmentReports.data.series });
    console.log(this.state.datesTedavi);

    let paymentReports = await store.getPaymentReport(clinicId, {
      duration: this.state.duration,
    });
    this.setState({ datesPayment: paymentReports.data.date });
    this.setState({ seriesPayment: paymentReports.data.series });

    let appointmentReports = await store.getAppointmentReport(clinicId, {
      duration: this.state.duration,
    });
    this.setState({ datesAppointment: appointmentReports.data.date });
    this.setState({ seriesAppointment: appointmentReports.data.series });
  };

  renderGraph() {
    return (
      <>
        <row className='chart'>
          <h6>Tedavi & Hasta sayisi</h6>
          <Chart
            options={this.state.optionsTedavi}
            series={this.state.seriesTedavi}
            type='line'
            width={500}
            height={320}
          />
          <h6>Randevu sayisi</h6>
          <Chart
            options={this.state.optionsAppointment}
            series={this.state.seriesAppointment}
            type='line'
            width={500}
            height={320}
          />
        </row>
        <row className='chart'>
          <h6>Tedavi ucretleri</h6>
          <Chart
            options={this.state.optionsPayment}
            series={this.state.seriesPayment}
            type='line'
            width={500}
            height={320}
          />
          {/* <h6>Alinan toplam ucretler</h6>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type='line'
            width={500}
            height={320}
          /> */}
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
