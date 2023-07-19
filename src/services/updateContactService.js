import http from './httpService';
export default function updateContactService(data, id) {
  return http.put(`/contacts/${id}`, data);
}
