import React, { Component } from 'react';

/*** Styles ***/
import './rightMenu.scss';

/*** Icons ***/
import sendIcon from '../../icons/send.svg';
import dentalImplantIcon from '../../icons/dental-implant.svg';
import dropdownIcon from '../../icons/dropdown-disabled.svg';

class Accordion extends Component {
  state = { classname_open: '' };

  onClickExpand = () => {
    this.setState({
      classname_open: this.state.classname_open === '' ? 'open' : '',
    });
  };

  render() {
    let { record } = this.props;
    let { classname_open } = this.state;

    return (
      <div
        className={`${'rightBar__treatmentHistory__accordionContainer'} ${classname_open}`}
      >
        <div className="rightBar__treatmentHistory__accordionContainer__header">
          <div className="rightBar__treatmentHistory__accordionContainer__icon">
            <img src={dentalImplantIcon} alt="" />
          </div>

          <div className="rightBar__treatmentHistory__accordionContainer__content">
            <div className="rightBar__treatmentHistory__accordionContainer__content__title">
              {record?.treatment}
            </div>
            <div className="rightBar__treatmentHistory__accordionContainer__content__extras">
              <div className="date">{record?.createdAt.substr(0, 10)}</div>
              <div className="price">
                {record?.price}
                {record?.currency}
              </div>
            </div>
          </div>
          <div
            className={`${'rightBar__treatmentHistory__accordionContainer__toggler'} ${classname_open}`}
            onClick={this.onClickExpand}
          >
            <img src={dropdownIcon} alt="" />
          </div>
        </div>

        <div
          className={`${'rightBar__treatmentHistory__accordionContainer__details'} ${classname_open}`}
        >
          <div
            className={
              'rightBar__treatmentHistory__accordionContainer__details__clinicDetails'
            }
          >
            {/* <img src={dentHospitalIcon} alt='' /> */}
            <div
              className={
                'rightBar__treatmentHistory__accordionContainer__details__clinicDetails__metadata'
              }
            >
              <div className={'clinic'}>Klinik: {record?.Clinic.name}</div>
              <div
                className={'dentist'}
              >{`Diş Hekimi: ${record?.Dentist.name} ${record?.Dentist.surname}`}</div>
              <div className={'dentist'}>
                {`Diş Numarası: ${record?.teeth}`}
              </div>
            </div>
          </div>

          {/* {record?.checkList.map((checkpoint, i) => {
            return (
              <div
                className={
                  'rightBar__treatmentHistory__accordionContainer__checkpoint'
                }
                key={i}
              >
                <div>
                  {checkpoint.isCheck && <img src={checkpointIcon} alt='' />}
                  {!checkpoint.isCheck && (
                    <img src={checkpointIcon_negative} alt='' />
                  )}
                </div>
                <div>{checkpoint.text}</div>
              </div>
            );
          })} */}
          <button>
            <img src={sendIcon} alt="" />
            Send Message to Doctor
          </button>
        </div>
      </div>
    );
  }
}

export default Accordion;
