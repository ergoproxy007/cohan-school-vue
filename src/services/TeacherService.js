import http, { isAxiosError } from "../http-common";

class TeacherService {
  get(dni) {
    return http.get(`/persons/teacher/${dni}`);
  }

  create(data) {
    return http.post("/persons/teacher", data);
  }

  update(id, data) {
    return http.put(`/persons/teacher/${id}`, data);
  }

  delete(id) {
    return http.delete(`/persons/teacher/${id}`);
  }

  checkAxiosError(error) {
    return isAxiosError(error);
  }
}

export default new TeacherService();
