import axios from 'axios';
import urljoin from 'url-join';

export function apiList(endpoint,options) {
  return axios.get(endpoint,options)
}
export function apiCreate(endpoint,model,options) {
  return axios.post(endpoint,model,options)
}
export function apiUpdate(endpoint,id,model,options) {
  return axios.put(urljoin(endpoint,id),model,options)
}
export function apiShow(endpoint,id,options) {
  return axios.get(urljoin(endpoint,id),options)
}
export function apiDelete(endpoint,id,options) {
  return axios.delete(urljoin(endpoint,id),options)
}
