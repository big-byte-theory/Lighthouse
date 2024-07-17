import mongoose from 'mongoose';

export default class Database { 
  #uri;

  constructor(uri) {
    this.#uri = uri;
  }

  connect = async () => {
    try {
      await mongoose.connect(this.#uri, { useNewUrlParser: true , useUnifiedTopology: true });
      return console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
}