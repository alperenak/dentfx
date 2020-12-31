import http from "../helpers/httpHelper";
import config from "../../appConfig";

const errorMessageBuilder = (response) => {
  return (response.errorData && response.errorData.code) || "0";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
  async createUserAppointment({
    user,
    clinic,
    dentist,
    treatmentType,
    startTime,
    endTime,
    isCheckIn,
    paymentType,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
    let path = `/dentist`;
    let payload = {
      user,
      clinic,
      dentist,
      treatmentType,
      startTime,
      endTime,
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    name,
    surname,
    email,
    phone,
    country,
    city,
  }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
    let path = `/user/${userId}`;
    let payload = { userId, name, surname, email, phone, country, city };
    return await http.makePutRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },
  async getClinics({ latitude, longitude, range, city, rate }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
    let path = `/clinic?latitude=${latitude}&longitude=${longitude}&range=${range}&city=${city}&rate=${rate}&treatment`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },
  async getUserDetail({ userId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
    let path = `/clinic/${clinicId}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },
  async getPatients({ clinicId }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
    let path = `/clinic?keyword=${keyword}&city=${city}&country=${country}&date=${date}`;

    return await http.makeGetRequest(
      path,
      baseUrl,
      tokenCookieName,
      errorMessageBuilder
    );
  },
  async CancelAppointment({ appointmentID }) {
    let baseUrl = config.baseUrl;
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
    let path = `/chat/conversation`;

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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
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
    let tokenCookieName = "token";
    let path = `/clinic/${clinicId}/patient`;
    let payload = { patient };

    return await http.makePostRequest(
      path,
      baseUrl,
      tokenCookieName,
      payload,
      errorMessageBuilder
    );
  },
};
