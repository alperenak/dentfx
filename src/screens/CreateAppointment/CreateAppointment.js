import React, { Component } from 'react';

/*** Styles ***/
import styles from './style.scss';

/*** Utils ***/
import store from '../../store';
import { getCookie } from '../../utils/cookie';

/*** Icons ***/
import illustration from '../../icons/illustration_2.svg';

/*** Components ***/
import Input from '../../components/Input';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

class CreateAppointment extends Component {
  state = {
    user: null,
    clinic: null,
    dentist: null,
    treatmentType: null,
    date: null,
    startTime: '8:30',
    isCheckIn: false,
    paymentType: 'onCheckIn',
    clinicData: null,
    treatmentData: [
      { value: 'Acil' },
      { value: 'Aparey' },
      { value: 'Apse' },
      { value: 'Band/Bond' },
      { value: 'Biyomateryal' },
      { value: 'Botoks' },
      { value: 'Cerrahi işlem' },
      { value: 'Detartraj' },
      { value: 'Diş beyazlatma' },
      { value: 'Diş çekimi' },
      { value: 'Dolgu' },
      { value: 'İmplant' },
      { value: 'Kanal' },
      { value: 'Kesim' },
      { value: 'Kontrol' },
      { value: 'Küretaj' },
      { value: 'Muayene' },
      { value: 'Ölçü' },
      { value: 'Ortodonti' },
      { value: 'Panoramik' },
      { value: 'Pansuman' },
      { value: 'Planlama' },
      { value: 'Protez' },
      { value: 'Protez prova' },
      { value: 'Yeni hasta' },
      { value: 'Yer tutucu' },
    ],
    dentistData: [],
    doctorSchedule: null,
  };

  componentDidMount = async () => {
    let clinicResponse = await store
      .getClinicDetail({
        clinicId: this.props.match.params.id,
      })
      .then((data) => {
        console.log('data datad data ', data.data);
        this.setState({
          dentistData: data.data.Dentist.map((dentist) => {
            return {
              key: dentist.id,
              value: `${dentist.name} ${dentist.surname} `,
            };
          }),
        });
      })
      .catch((e) => alert(e));
    let clinic = this.props.match.params.id;
    this.setState({ clinic });

    let resClinic = await store.getClinicDetail({ clinicId: clinic });
    this.setState({ clinicData: resClinic.data });
    console.log(resClinic.data);

    let userId = getCookie('user_id');
    let responseUser = await store.getUserDetail({ userId });
    this.setState({ user: responseUser.data });
  };

  onClickCreate = async () => {
    //user, clinic, dentist, treatmentType, startTime, endTime, isCheckIn, paymentType
    let res = await store.createUserAppointment(
      this.state.user.id,
      this.state.clinic,
      this.state.dentist,
      this.state.treatmentType,
      this.state.date,
      this.state.startTime,
      this.state.isCheckIn,
      this.state.paymentType
    );
  };

  onChangeDentist = (i, value) => {
    this.setState({ dentist: value.key });
  };

  onChangeTreatmentType = (i, value) => {
    this.setState({ treatmentType: value.value });
  };

  onChangeDate = async (value) => {
    this.setState({ date: this.getFormattedDate(new Date(value)) });
    console.log(this.getFormattedDate(new Date(value)));
    let schedule = await store.getDoctorSchedule({
      dentist: this.state.dentist,
      day: this.getFormattedDate(new Date(value)),
    });
    this.setState({ doctorSchedule: schedule.data });
    console.log(this.state.dentist);
    console.log(this.state.doctorSchedule);
  };

  getFormattedDate(date) {
    let year = date.getFullYear();

    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '.' + month + '.' + year;
  }

  render() {
    let {
      treatmentData,
      dentistData,
      clinicData,
      user,
      dentist,
      treatmentType,
      startTime,
    } = this.state;
    let i = 0;
    return (
      <div className={'createAppointmentWrapper'}>
        <div className={'header'}>
          <img src={illustration} alt='' />
          <div className={'headerText'}>
            <div className={'title'}>Hi Peter,</div>
            <div className={'subtitle'}>make an appointment easily!</div>
          </div>
        </div>

        <div className={'content row'}>
          <div class='col-md-12'>
            <Input
              type={'select'}
              size={'full'}
              onChange={this.onChangeDentist}
              externalSource={dentistData && dentistData}
              label={'Select a dentist'}
            />
            <div style={{ marginBottom: '15px' }} />
          </div>
          <div class='col-md-12'>
            <Input
              type={'select'}
              size={'full'}
              onChange={this.onChangeTreatmentType}
              externalSource={treatmentData && treatmentData}
              label={'Select a treatment'}
            />
            <div style={{ marginBottom: '15px' }} />
          </div>
          <div class='col-md-12'>
            <Input
              type={'date'}
              size={'full'}
              onChange={this.onChangeDate}
              label={'Select a date'}
            />
          </div>
          <div class='col-md-2'>
            <div className='col-md-2'>
              <div className='col-md-8'>
                <ToggleButtonGroup
                  value={this.state.startTime}
                  exclusive
                  orientation='vertical'
                  onChange={(e, value) => {
                    console.log(e);
                    console.log(value);
                    this.setState({ startTime: value });
                  }}
                  aria-label='start date'
                >
                  {this.state.doctorSchedule &&
                    this.state.doctorSchedule.calendar.map((item) => {
                      return (
                        <ToggleButton
                          key={i++}
                          value={item.time}
                          disabled={item.busy}
                          aria-label='time'
                        >
                          {item.time}
                        </ToggleButton>
                      );
                    })}
                </ToggleButtonGroup>
              </div>
            </div>
          </div>
          <div class='col-md-12'>
            {clinicData && user && dentist && treatmentType && startTime && (
              <div className={'disclaimer'}>
                <div className={'textBlue'}>
                  <span> {clinicData.name}</span> üzerinden{' '}
                  <span>{dentist}</span>'a <span>{this.state.date}</span>
                  tarihinde, {startTime} saatinde <span>{treatmentType}</span>{' '}
                  için bir randevu oluşturuyorsunuz.
                </div>
                <div className={'textRed'}>
                  Randevunuzu <span>kontrol ettikten sonra </span> onaylamak
                  için aşağıdaki butona tıklayınız.
                </div>
              </div>
            )}
          </div>
          <div class='col-md-12'>
            <button className={'submitBtn'} onClick={this.onClickCreate}>
              Randevu Oluştur
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAppointment;
