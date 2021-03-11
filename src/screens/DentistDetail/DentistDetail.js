import React from 'react';
import Tabs from '../../components/Tabs/tabs';
import './DentistDetail.scss';
export default function DentistDetail() {
  return (
    <>
      <div className={'Profile'}>
        <div className={'patientProfileCard'}>
          <img className={'profileImage'} src={''} alt="avatar" />
        </div>

        <div className={'profileName'}>{'alper'}</div>
        <div className={'location'}>{'test, test'}</div>
      </div>
      <Tabs tabsData={[{ tabName: 'Diş Hekimi bilgileri' }]} />
      <div className={'aboutTab'}>
        <form>
          <div className={'item patientInfoPart'}>
            <div className={'header'}>Kişisel Bilgiler</div>
            <div className={'content'}>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault01">İsim</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    //   value={patient?.name}
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault02">Soyisim</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    //   value={patient?.surname}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="inputTC">TC Kimlik No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTC"
                    //   value={patient?.tcNumber}
                  />
                </div>
              </div>
              <div className={'form-row'} style={{ marginBottom: '0' }}>
                <div className={'col-md-3 mb-3'}>
                  <label htmlFor="sexRadio1">Cinsiyet</label>

                  <div className={'row'} style={{ marginTop: '0' }}>
                    <div className="form-check" style={{ marginRight: '5px' }}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="sexRadio1"
                        value="option1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Erkek
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="sexRadio2"
                        value="option2"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Kadın
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">Uyruk</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    required
                  >
                    <option
                      selected
                      disabled
                      //   value={patient?.nationality}
                    >
                      {/* {patient?.nationality} */}
                    </option>
                    <option>Türk</option>
                    <option>Yabancı</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="dentistName">Diş Hekimi</label>
                  <input
                    id="dentistName"
                    type="text"
                    className="form-control"
                    //   value={patient?.Dentist.name}
                  />
                </div>
              </div>
              <div className="form-row" style={{ marginTop: '0' }}>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault01">Doğum Tarihi</label>
                  {/* {patient?.birthDate && (
                  <DatePicker initialValue={patient?.birthDate} />
                )} */}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationDefault02">Kayıt Tarihi</label>
                  {/* {patient?.createdAt && (
                  <DatePicker initialValue={patient?.createdAt} />
                )} */}
                </div>
              </div>
            </div>
          </div>

          <div className={'item patientInfoPart'}>
            <div className={'header'}>İletişim Bilgileri</div>
            <div className={'content'}>
              <div className="form-row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">İlçe</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      Seçiniz...
                    </option>
                    <option>Başakşehir</option>
                    <option>Sarıyer</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">Şehir</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      {/* {patient?.city} */}
                    </option>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>Eskişehir</option>
                    <option>Çanakkale</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault04">Ülke</label>
                  <select
                    className="custom-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      {/* {patient?.country} */}
                    </option>
                    <option>Türkiye</option>
                    <option>USA</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">Posta Kodu</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="exampleFormControlInput1">
                    E-mail adresi
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    //   value={patient?.email}
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="inputAddress">Telefon1</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    //   value={patient?.phone}
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="validationDefault05">Telefon2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault05"
                    //   value={patient?.phone}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="exampleFormControlInput1">Adres</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    //   value={patient?.address}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
