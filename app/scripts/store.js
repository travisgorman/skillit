import Session from './models/user';

export default {
  session: new Session()
  settings: {
    appKey: 'kid_H1NgpLJ9',
    appSecret: '83574cbedf5347cd81aadc3f2c63bc03',
    basicAuth: `Basic ${btoa('kid_H1NgpLJ9:83574cbedf5347cd81aadc3f2c63bc03')}`
  }
}
