import bcrypt from 'bcrypt';

export default class BcryptHash {
  static hash = async (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  static verify = async (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
  };
}