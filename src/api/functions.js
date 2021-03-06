import axios from 'axios'

export function setBaseUrl(url) {
  axios.defaults.baseURL = url;
}
export function setDeviceId(deviceId) {
  axios.defaults.headers.common['X-Device-id'] = deviceId;
}
export function getDeviceId() {
  return axios.defaults.headers.common['X-Device-id'];
}
export function setAppInfo(version, os) {
  axios.defaults.headers.common['X-App-os'] = os;
  axios.defaults.headers.common['X-App-version'] = version;
}
export function setDeviceInfo(brand, model) {
  axios.defaults.headers.common['X-Device-brand'] = brand;
  axios.defaults.headers.common['X-Device-model'] = model;
}
