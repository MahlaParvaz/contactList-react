import http from './httpService';
export default function addContactsService(data) {
  return http.post('/contacts', data);
}
