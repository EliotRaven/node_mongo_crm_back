const {UserModel, UserSessionModel} = require('../database/index');
const { randomBytes } = require('crypto');
const bcrypt      = require('bcryptjs');

class AuthService {
  constructor(){
    this.user = UserModel
    this.session = UserSessionModel
  }

  async login(data){
    let user = await this.user.findOne({ email: data.email })
    if(!user) return Promise.reject(new Error('Credential are wrong'))
    if (!bcrypt.compareSync(data.password, user.password)) {
      return Promise.reject(new Error('Credential are wrong'));
    }
    let session = new this.session({
      token: randomBytes(64).toString('base64'),
      user_id: user._id
    });
    await session.save();

    return {
      session,
      user
    };
  }

  async logout(token) {
    await this.session.findOneAndDelete({token})
  }
}

module.exports = new AuthService()