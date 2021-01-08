import React from "react";
import Tabs from "../../components/Tabs/tabs";

export default function DentistDetail() {
  return (
    <>
      <Tabs tabsData={[{ tabName: "Diş Hekimi bilgileri" }]} />
      <div className={"aboutTab"}>
        <form>
          <div className={"item patientInfoPart"}>
            <div className={"header"}>Kişisel Bilgiler</div>
            <div className={"content"}>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault01">İsim</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    //   value={patient?.name}
                    required
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault02">Soyisim</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    //   value={patient?.surname}
                    required
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="inputTC">TC Kimlik No</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTC"
                    //   value={patient?.tcNumber}
                  />
                </div>
              </div>
              <div className={"form-row"} style={{ marginBottom: "0" }}>
                <div className={"col-md-3 mb-3"}>
                  <label for="sexRadio1">Cinsiyet</label>

                  <div className={"row"} style={{ marginTop: "0" }}>
                    <div class="form-check" style={{ marginRight: "5px" }}>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="sexRadio1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Erkek
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="sexRadio2"
                        value="option2"
                        disabled
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Kadın
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Uyruk</label>
                  <select
                    class="custom-select"
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
                <div class="col-md-6 mb-3">
                  <label for="dentistName">Diş Hekimi</label>
                  <input
                    id="dentistName"
                    type="text"
                    class="form-control"
                    //   value={patient?.Dentist.name}
                  />
                </div>
              </div>
              <div class="form-row" style={{ marginTop: "0" }}>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01">Doğum Tarihi</label>
                  {/* {patient?.birthDate && (
                  <DatePicker initialValue={patient?.birthDate} />
                )} */}
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Kayıt Tarihi</label>
                  {/* {patient?.createdAt && (
                  <DatePicker initialValue={patient?.createdAt} />
                )} */}
                </div>
              </div>
            </div>
          </div>

          <div className={"item patientInfoPart"}>
            <div className={"header"}>İletişim Bilgileri</div>
            <div className={"content"}>
              <div class="form-row">
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">İlçe</label>
                  <select
                    class="custom-select"
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
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Şehir</label>
                  <select
                    class="custom-select"
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
                <div class="col-md-3 mb-3">
                  <label for="validationDefault04">Ülke</label>
                  <select
                    class="custom-select"
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
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Posta Kodu</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault05"
                    required
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="exampleFormControlInput1">E-mail adresi</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    //   value={patient?.email}
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="inputAddress">Telefon1</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    //   value={patient?.phone}
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Telefon2</label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault05"
                    //   value={patient?.phone}
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-12 mb-3">
                  <label for="exampleFormControlInput1">Adres</label>
                  <input
                    type="text"
                    class="form-control"
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
