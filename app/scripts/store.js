import UserModel from './Models/UserModel';
import SessionModel from './Models/SessionModel';
import UserCollection from './Collections/UserCollection';

export default {
  sessionModel: new SessionModel(),
  userModel: new UserModel(),
  userCollection: new UserCollection()
}
