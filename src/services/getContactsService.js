import http from './httpService';
export default function getContactsService() {
  return http.get('/contacts');
}
