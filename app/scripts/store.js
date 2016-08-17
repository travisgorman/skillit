import UserModel from './Models/UserModel';
import SessionModel from './Models/SessionModel';
import UserCollection from './Collections/UserCollection';

export default {
  sessionModel: new SessionModel(),
  userModel: new UserModel(),
  userCollection: new UserCollection(),
  settings: {
    appKey: 'kid_H1NgpLJ9',
    appSecret: '83574cbedf5347cd81aadc3f2c63bc03',
    basicAuth: `Basic ${ btoa('kid_H1NgpLJ9:83574cbedf5347cd81aadc3f2c63bc03') }`
  }
}
