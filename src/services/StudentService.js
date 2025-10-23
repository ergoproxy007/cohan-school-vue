import http, { isAxiosError } from "../http-common";

class StudentService {
  get(dni) {
    return http.get(`/persons/student/${dni}`);
  }

  create(data) {
    return http.post("/persons/student", data);
  }

  update(id, data) {
    return http.put(`/persons/student/${id}`, data);
  }

  delete(id) {
    return http.delete(`/persons/student/${id}`);
  }

  checkAxiosError(error) {
    return isAxiosError(error);
  }
}

export default new StudentService();
