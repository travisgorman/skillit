import UserCollection from './Collections/UserCollection';
import MessageCollection from './Collections/MessageCollection';
import UserModel from './Models/UserModel';
import SessionModel from './Models/SessionModel';
import MessageModel from './Models/MessageModel';


export default {
  sessionModel: new SessionModel(),
  userModel: new UserModel(),
  userCollection: new UserCollection(),
  messageModel: new MessageModel(),
  messageCollection: new MessageCollection(),
}
