import React, { Component } from 'react';
import store from '../../store';
import { MDBDataTable } from 'mdbreact';
import { getCookie } from '../../utils/cookie';

/*** Styles ***/
import styles from './PaymentHistory.scss';
import PaymentIcon from '../../icons/credit-cards-payment.svg';
import NotesIcon from '../../icons/writing.svg';

/*** Components ***/
import DatePicker from '../../components/DatePicker/DatePicker';
import StepProgressBar from 'react-step-progress';

import ContractIMG from '../../assets/icons/contract.svg';
import ProformaIMG from '../../assets/icons/proforma.svg';
import Modal from '../../components/Modal/modal';
import Dropdown from '../../components/Dropdown/dropdown';

class PaymentHistory extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      selectedTab: 0,
      selectedPlan: 'Planlama 0',
      selectedTooth: '',
      treatmentPlan0Data: null,
      treatmentPlan1Data: null,
      treatmentData: null,
      treatmentList: null,
      paidTreatmentData: null,
      notesForPatientData: null,
    };
  }

  fillTreatmentTables = () => {
    this.setState({
      treatmentData: {
        columns: [
          {
            label: 'Tarih',
            field: 'tarih',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Dis',
            field: 'dis',
            sort: 'asc',
            width: 50,
          },
          {
            label: 'Tedavi',
            field: 'tedavi',
            sort: 'asc',
            width: 200,
          },
          {
            label: 'Dis Hekimi',
            field: 'dis_hekimi',
            sort: 'asc',
            width: 150,
          },
          {
            label: 'Toplam',
            field: 'toplam',
            sort: 'asc',
            width: 100,
          },
          {
            label: 'TRY/USD',
            field: 'para_birimi',
            sort: 'asc',
            width: 100,
          },
        ],
        rows: [
          {
            tarih: '12.01.2020',
            dis: '24',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
          },
          {
            tarih: '24.03.2020',
            dis: '12',
            tedavi: 'Kanal Tedavisi',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
          },
          {
            tarih: '02.02.2020',
            dis: '26',
            tedavi: 'Koplikasyonlu Dis cekimi',
            dis_hekimi: 'Hasan Demirkiran',
            toplam: 450,
            para_birimi: 'TRY',
          },
          {
            tarih: '16.03.2020',
            dis: '31',
            tedavi: 'Implant',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 2500,
            para_birimi: 'TRY',
          },
          {
            tarih: '08.08.2020',
            dis: '05',
            tedavi: 'Komposit Dolgu',
            dis_hekimi: 'Fatih Atmaca',
            toplam: 250,
            para_birimi: 'TRY',
          },
        ],
      },
    });
  };

  paidTreatmentData = {
    columns: [
      {
        label: 'Tarih',
        field: 'tarih',
        sort: 'asc',
        width: 170,
      },
      {
        label: 'Ödeme Tipi',
        field: 'odeme_tipi',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Dis Hekimi',
        field: 'dis_hekimi',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Tutar',
        field: 'tutar',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'TRY/USD',
        field: 'para_birimi',
        sort: 'asc',
        width: 100,
      },
    ],
    rows: [
      {
        tarih: '12.01.2020',
        odeme_tipi: 'Nakit',
        dis_hekimi: 'Fatih Atmaca',
        tutar: 250,
        para_birimi: 'TRY',
      },
      {
        tarih: '16.02.2020',
        odeme_tipi: 'Kredi Kartı',
        dis_hekimi: 'Fatih Atmaca',
        tutar: 1350,
        para_birimi: 'TRY',
      },
      {
        tarih: '22.03.2020',
        odeme_tipi: 'Nakit',
        dis_hekimi: 'Fatih Atmaca',
        tutar: 1200,
        para_birimi: 'TRY',
      },
    ],
  };

  componentDidMount = async () => {
    this.fillTreatmentTables();
  };

  renderTreatmentTable = () => {
    return (
      <div>
        {this.state.treatmentData !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight='50vh'
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            paginationLabel={['Önceki', 'Sonraki']}
            info={false}
            data={this.state.treatmentData}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  renderPaidtreatmentsTable = () => {
    return (
      <div>
        {this.state.paidTreatmentList !== null ? (
          <MDBDataTable
            striped
            scrollY
            maxHeight='50vh'
            bordered
            small
            searchLabel={'Ara'}
            entriesLabel={'Girdileri Göster'}
            paginationLabel={['Önceki', 'Sonraki']}
            info={false}
            data={this.paidTreatmentData}
          />
        ) : (
          <p>YUKLENIYOR</p>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className={'Profile'}>
        <div>
          <div className={'row'}>
            <div className={'paymentTreatmentTableWrapper'}>
              <h2 className={'tableHeader'}>Tedaviler</h2>
              {this.renderTreatmentTable()}
            </div>
            <div className={'paymentPaidTreatmentTableWrapper'}>
              <h2 className={'tableHeader'}>Alınan Paralar</h2>
              {this.renderPaidtreatmentsTable()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
