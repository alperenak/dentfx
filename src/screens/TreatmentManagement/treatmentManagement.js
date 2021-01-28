import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Button from '../../components/Button/button';
import Dropdown from '../../components/Dropdown/dropdown';
import EditableTable from '../../components/EditableTable/editableTable';
import store from '../../store';
import { getCookie } from '../../utils/cookie';
import './treatmentManagement.scss';
import { listen } from 'socket.io';

export default class treatmentManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clinicId: null,
      tarifeler: null,
      tarifelerTableData: null,
      selectedTarifID: null,
      newTarifName: null,
      newTedaviName: null,
      newTedaviPrice: null,
      newTedaviCurrency: null,
    };
  }

  componentDidMount = async () => {
    let clinicID = getCookie('user_id');
    this.setState({ clinicId: clinicID });
    let tariffs = await store.getClinicTariffs({ clinicId: clinicID });
    this.setState({ tarifeler: tariffs.data });
    this.setState({
      tarifelerTableData: {
        columns: [
          {
            label: 'Tarife',
            field: 'tariff',
            sort: 'asc',
            width: 300,
          },
          {
            label: 'Sil',
            field: 'button',
            sort: 'asc',
            width: 50,
          },
        ],
        rows: this.state.tarifeler?.map((tarif) => {
          return {
            tariff: tarif.tariff,
            button: (
              <button
                type='button'
                class='btn btn-danger'
                onClick={async () => {
                  await store.deleteClinicTariff({
                    clinicId: this.state.clinicId,
                    tarifId: tarif._id,
                  });
                  location.reload();
                }}
              >
                Sil
              </button>
            ),
          };
        }),
      },
    });
  };

  renderTarifelerTable = () => {
    return this.state.tarifelerTableData !== null ? (
      <MDBDataTable
        striped
        bordered
        small
        data={this.state.tarifelerTableData}
        searchLabel={'Ara'}
        entriesLabel={'Girdileri Göster'}
        info={false}
        paginationLabel={['Önceki', 'Sonraki']}
      />
    ) : (
      <p>YUKLENIYOR</p>
    );
  };

  renderNewTarifModal = () => {
    return (
      <div
        class='modal fade'
        id='addTarifModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Tarif Ekle
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div class='form-row'>
                <div class='col-md-12 mb-3'>
                  <label for='exampleFormControlInput1'>Tarif Ismi</label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='TBD 2020 (USD)'
                    onChange={(event) =>
                      this.setState({ newTarifName: event.target.value })
                    }
                  />
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={async () => {
                  await store.createClinicTariff({
                    clinicId: this.state.clinicId,
                    tarifName: this.state.newTarifName,
                  });
                  location.reload();
                }}
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderTarifelerDropDown = () => {
    return this.state.tarifeler !== null ? (
      <div>
        <label className='mt-2' for='tarifDropdown'>
          Tarifler
        </label>
        <select
          class='form-control'
          id='dentistName'
          required
          onChange={(event) => {
            this.setState({ selectedTarifID: event.target.value });
          }}
        >
          <option selected disabled value=''>
            Seçiniz...
          </option>
          {this.state.tarifeler !== null &&
            this.state.tarifeler.map((item) => (
              <option value={item._id}>{item.tariff}</option>
            ))}
        </select>
      </div>
    ) : (
      <p>YUKLENIYOR</p>
    );
  };

  renderTedavilerTable = (tarifID) => {
    const tarifDetails = this.state.tarifeler?.filter(
      (tarif) => tarif._id === tarifID
    );
    const tedavilerTable = {
      columns: [
        {
          label: 'Tedavi',
          field: 'tedavi',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'Fiyat',
          field: 'price',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'Para Birimi',
          field: 'currency',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'Sil',
          field: 'button',
          sort: 'asc',
          width: 50,
        },
      ],
      rows: tarifDetails[0]?.list.map((item) => {
        return {
          tedavi: item.treatment,
          price: item.price,
          currency: item.currency,
          button: (
            <button
              type='button'
              class='btn btn-danger'
              onClick={async () => {
                console.log(item._id);
                await store.deleteTedaviByID({
                  clinicId: this.state.clinicId,
                  tarifId: tarifID,
                  tedaviId: item._id,
                });
                location.reload();
              }}
            >
              Sil
            </button>
          ),
        };
      }),
    };
    return this.state.selectedTarifID !== null ? (
      <MDBDataTable
        striped
        bordered
        small
        data={tedavilerTable}
        searchLabel={'Ara'}
        entriesLabel={'Girdileri Göster'}
        info={false}
        paginationLabel={['Önceki', 'Sonraki']}
      />
    ) : (
      <p>YUKLENIYOR</p>
    );
  };

  renderNewTedaviModal = (tarifID) => {
    return (
      <div
        class='modal fade'
        id='addTedaviModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Tedavi Ekle
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div class='form-row'>
                <div class='col-md-12 mb-3'>
                  <label for='exampleFormControlInput1'>Tedavi Ismi</label>
                  <input
                    type='text'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Implant Cikarilmasi'
                    onChange={(event) =>
                      this.setState({ newTedaviName: event.target.value })
                    }
                  />
                  <label for='exampleFormControlInput1'>Fiyat</label>
                  <input
                    type='number'
                    class='form-control'
                    id='exampleFormControlInput1'
                    placeholder='250'
                    onChange={(event) =>
                      this.setState({ newTedaviPrice: event.target.value })
                    }
                  />
                  <label for='validationDefault04'>Para Birimi</label>
                  <select
                    class='custom-select'
                    id='validationDefault04'
                    required
                    onChange={(event) =>
                      this.setState({ newTedaviCurrency: event.target.value })
                    }
                  >
                    <option selected disabled value=''>
                      Seçiniz...
                    </option>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={async () => {
                  await store.createNewTedavi({
                    clinicId: this.state.clinicId,
                    tarifId: tarifID,
                    tedaviName: this.state.newTedaviName,
                    tedaviCurrency: this.state.newTedaviCurrency,
                    tedaviPrice: this.state.newTedaviPrice,
                  });
                  location.reload();
                }}
              >
                Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={'treatmentManagement'}>
        <div className={'d-flex justify-content-between align-items-center'}>
          <h2 className={'mb-2'}>Tarifeler</h2>
          <div className={'p-1'}>
            <button
              type='button'
              data-toggle='modal'
              data-target='#addTarifModal'
              className=' btn btn-primary'
            >
              Tarif Ekle
            </button>
            {this.renderNewTarifModal()}
          </div>
        </div>
        {this.renderTarifelerTable()}
        <div className={'d-flex justify-content-between align-items-center'}>
          <h2 className={'mb-4 mt-2'}>Tedavi</h2>
          <div className={'p-1'}>
            {this.state.selectedTarifID && (
              <button
                type='button'
                data-toggle='modal'
                data-target='#addTedaviModal'
                className='btn btn-primary'
              >
                Tedavi ekle
              </button>
            )}
            {this.renderNewTedaviModal(this.state.selectedTarifID)}
          </div>
        </div>
        {this.renderTarifelerDropDown()}
        {this.state.selectedTarifID &&
          this.renderTedavilerTable(this.state.selectedTarifID)}
      </div>
    );
  }
}
