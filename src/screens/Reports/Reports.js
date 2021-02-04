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
        stroke: {
          show: true,
          curve: 'smooth',
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: [],
        },
      },
      seriesTedavi: [{ name: 'seri', data: [] }],

      datesPayment: null,
      optionsPayment: {
        chart: {
          id: 'apexchart-example',
        },
        stroke: {
          show: true,
          curve: 'smooth',
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: [] ,
        },
      },
      seriesPayment: [{ name: 'seri', data: [] }],

      optionsAppointment: {
        chart: {
          id: 'apexchart-example',
        },
        stroke: {
          show: true,
          curve: 'smooth',
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: [],
        },
      },
      seriesAppointment: [{ name: 'seri', data: [] }],

      datesAppointmentByDentist: [],
      optionsAppointmentByDentist: {
        chart: {
          id: 'apexchart-example',
        },
        stroke: {
          show: true,
          curve: 'smooth',
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: [],
        },
      },
      seriesAppointmentByDentist: [{ name: 'seri', data: [] }],
    };
  }

  componentDidMount = async () => {
    let clinicId = getCookie('user_id');
    let treatmentReports = await store.getTreatmentReport(clinicId, {
      duration: this.state.duration,
    });

    this.setState({ optionsTedavi: {
      xaxis: {
          categories: treatmentReports.data.date
        }
      }});
    this.setState({ seriesTedavi: treatmentReports.data.series });

    let paymentReports = await store.getPaymentReport(clinicId, {
      duration: this.state.duration,
    });
    this.setState({ optionsPayment: {
        xaxis: {
          categories: paymentReports.data.date
        }
      }});
    this.setState({ seriesPayment: paymentReports.data.series });

    let appointmentReports = await store.getAppointmentReport(clinicId, {
      duration: this.state.duration,
      show: 'byAppointment'
    });
    this.setState({ optionsAppointment: {
        xaxis: {
          categories: appointmentReports.data.date
        }
      } });
    this.setState({ seriesAppointment: appointmentReports.data.series });

    let appointmentReportsByDentist = await store.getAppointmentReport(clinicId, {
      duration: this.state.duration,
      show: 'byDentist'
    });
    this.setState({ optionsAppointmentByDentist: {
       xaxis: {
          categories: appointmentReportsByDentist.data.date,
        }
      }});
    this.setState({ seriesAppointmentByDentist: appointmentReportsByDentist.data.series });
  };

  renderGraph() {
    return (
      <>
        <row className='chart'>
          <h6>Tedavi & Hasta Sayısı</h6>
          <Chart
            options={this.state.optionsTedavi}
            series={this.state.seriesTedavi}
            type='line'
            width={700}
            height={350}
          />
          <h6>Randevular</h6>
          <Chart
            options={this.state.optionsAppointment}
            series={this.state.seriesAppointment}
            type='line'
            width={700}
            height={350}
          />
        </row>
        <row className='chart'>
          <h6>Tedavi & Ödeme Ücretleri</h6>
          <Chart
            options={this.state.optionsPayment}
            series={this.state.seriesPayment}
            type='line'
            width={700}
            height={350}
          />
          <h6>Randevular - Diş Hekimleri</h6>
          <Chart
            options={this.state.optionsAppointmentByDentist}
            series={this.state.seriesAppointmentByDentist}
            type='line'
            width={700}
            height={350}
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
