import http from './httpService';
export default function deleteContactsService(id) {
  return http.delete(`/contacts/${id}`);
}
