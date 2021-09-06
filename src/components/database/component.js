import { Firebase } from '../index';

class Database {
  constructor() {
    this.db = Firebase.firestore();
  }

  async getPage(pageName) {
    const response = this.db.collection('Pages');
    const data = await response.get();
    console.log(`DATABASE --- ${data}`);
    return data;
  }

  getDatabase() {
    return this.db;
  }
}

export default Database;
