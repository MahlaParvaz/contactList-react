import http from './httpService';
export default function getOneContactService(id) {
  return http.get(`/contacts/${id}`);
}
