import http from '../helpers/httpHelper';
import config from '../../appConfig';

const errorMessageBuilder = (response) => {
  return (response.errorData && response.errorData.code) || '0';
};

export default {
  async createUser({
    name,
    surname,
    email,
    password,
    phone,
    birthDate,
    city,
    country,
    loginType,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/user`;
    let payload = {
      name,
      surname,
      email,
      password,
      phone,
      birthDate,
      city,
      country,
      loginType,
    };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async createClinic({
    name,
    email,
    password,
    phone,
    city,
    country,
    address,
    coordinate,
    longitude,
    latitude,
    treatmentType,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic`;
    let payload = {
      name,
      email,
      password,
      phone,
      city,
      country,
      address,
      coordinate,
      longitude,
      latitude,
      treatmentType,
    };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async createDentist({
    name,
    surname,
    email,
    password,
    phone,
    clinic,
    treatmentType,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/dentist`;
    let payload = {
      name,
      surname,
      email,
      password,
      phone,
      clinic,
      treatmentType,
    };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async userLogin({ email, password }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/login/user`;
    let payload = { email, password };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async createUserAppointment(
    user,
    clinic,
    dentist,
    treatmentType,
    date,
    startTime,
    isCheckIn,
    paymentType
  ) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment`;
    let payload = {
      User: user,
      Clinic: clinic,
      Dentist: dentist,
      treatmentType,
      date,
      startTime,
      isCheckIn,
      paymentType,
    };
    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async clinicLogin({ email, password }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/login/clinic`;
    let payload = { email, password };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async dentistLogin({ email, password }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/login/dentist`;
    let payload = { email, password };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async updateUserProfile({
    userId,
    avatar,
    name,
    surname,
    email,
    phone,
    country,
    city,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/user/${userId}`;
    let payload = {
      userId,
      avatar,
      name,
      surname,
      email,
      phone,
      country,
      city,
    };
    return await http.makePutRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async updateClinicProfile(clinicID, props) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}`;
    let payload = { ...props };
    return await http.makePutRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async updateClinicGallery(clinicID, props) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/gallery`;
    let payload = { ...props };
    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async deleteCarouselImage(clinicID, itemID) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/gallery/${itemID}`;
    return await http.makeDeleteRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async updateDentistProfile(dentistId, props) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${dentistId}`;
    let payload = { ...props };
    return await http.makePutRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async getClinics({ keyword, latitude, longitude, range, city, rate }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic?keyword=${keyword}&latitude=${latitude}&longitude=${longitude}&range=${range}&city=${city}&rate=${rate}&treatment`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getUserDetail({ userId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/user/${userId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getClinicDetail({ clinicId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getClinicTariffs({ clinicId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/tariff`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async createClinicTariff({ clinicId, tarifName }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/tariff`;
    let payload = { tariff: tarifName, list: [] };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async deleteClinicTariff({ clinicId, tarifId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/tariff/${tarifId}`;

    return await http.makeDeleteRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async deleteTedaviByID({ clinicId, tarifId, tedaviId }) {
    const { data } = await this.getClinicTariffs({ clinicId });

    const tarif = data.filter((item) => item._id === tarifId);

    tarif[0].list.splice(
      tarif[0].list.findIndex((item) => item._id === tedaviId),
      1
    );

    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/tariff/${tarifId}`;
    let payload = tarif[0];

    console.log(payload);

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async createNewTedavi({
    clinicId,
    tarifId,
    tedaviName,
    tedaviCurrency,
    tedaviPrice,
  }) {
    const { data } = await this.getClinicTariffs({ clinicId });

    const tarif = data.filter((item) => item._id === tarifId);

    tarif[0].list.push({
      treatment: tedaviName,
      price: tedaviPrice,
      currency: tedaviCurrency,
    });

    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/tariff/${tarifId}`;
    let payload = tarif[0];

    console.log(payload);

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async getDoctorSchedule({ dentist, day }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/dentist/${dentist}/calendar?day=${day}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getPatients({ clinicId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/patient`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getPatientsDetail({ clinicId, patientId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/patient/${patientId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getDentistDetail({ dentistId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/dentist/${dentistId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getAppointments({ userId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment?userId=${userId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getAppointmentDetail({ appointmentId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment/${appointmentId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getUserTreatmentHistory({ userId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/user/${userId}/treatment`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getDentistTreatmentHistory({ dentistId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/dentist/${dentistId}/treatment`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getNotifications({ userId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/notification?userId=${userId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async setNotificationRead({ notificationId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/notification/${notificationId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async SearchAppointment({ keyword, city, country, date }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic?keyword=${keyword}&city=${city}&country=${country}&date=${date}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async approveAppointment({ appointmentID }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment/${appointmentID}/confirm`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async CancelAppointment({ appointmentID }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment/${appointmentID}/cancel`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async GetConversations() {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/conversation`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async GetNewMessages() {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/new`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async GetMessageDetails({ conversationID }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/conversation/${conversationID}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async SendMessage({ conversationID, receiver, body, attachements }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/conversation/${conversationID}`;
    let payload = { receiver, body, attachements };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async CreateNewChat(payload) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/conversation`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async CreateAppointment(payload) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/appointment`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async SearchChat({ keyword }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/chat/search?keyword=${keyword}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async PatientSearch(clinicId, patientNameValue) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/patient?fullName=${patientNameValue}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async AddPatient(clinicId, patient) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicId}/patient`;
    let payload = { ...patient };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },

  async getUploadURL({ fileType, user, whereTo }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path;

    whereTo === 'profile' &&
      (path = `/upload/pp?fileType=${fileType}&user=${user}`);
    whereTo === 'gallery' &&
      (path = `/upload/gallery?fileType=${fileType}&user=${user}`);
    whereTo === 'attachment' &&
      (path = `/upload/attachment?fileType=${fileType}&user=${user}`);

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async uploadImage(url, file) {
    let baseUrl = url;
    let path = ``;
    let tokenCookieName = 'token';
    let additionHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT',
    };

    return await http.makePutRequest(
      path,
      baseUrl,
      tokenCookieName,
      file,
      errorMessageBuilder,
      additionHeaders
    );
  },

  async getTreatmentReport(clinicID, props) {
    const chart = props.chart || 'apex';
    const { duration } = props;
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/report/treatment?duration=${duration}&chart=${chart}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getPaymentReport(clinicID, props) {
    const chart = props.chart || 'apex';
    const { duration } = props;
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/report/payment?duration=${duration}&chart=${chart}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getAppointmentReport(clinicID, props) {
    const chart = props.chart || 'apex';
    const { duration, show } = props;
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/report/appointment?chart=${chart}&duration=${duration}&show=${show}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async getPatientPayments(clinicID, patientID) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/patient/${patientID}/payment`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },

  async clinicAddPayment(clinicID, patientID, props) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/patient/${patientID}/payment`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      props,
      errorMessageBuilder
    );
  },

  async clinicAddNote(clinicID, patientID, props) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/patient/${patientID}/note`;

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      props,
      errorMessageBuilder
    );
  },

  async clinicDeleteNote(clinicID, patientID, noteID) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = 'token';
    let path = `/clinic/${clinicID}/patient/${patientID}/note/${noteID}`;

    return await http.makeDeleteRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },
};
