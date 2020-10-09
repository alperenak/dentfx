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
    let path = `/login/${userId}`;
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

  async getTreatmentHistory(userId) {
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
};
