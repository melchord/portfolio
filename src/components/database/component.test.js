import { default as Database } from './component';

describe('New city', () => {
  it('should create a new city in firestore', async () => {
    const db = new Database();
    const dbRef = db.getDatabase();
    await dbRef.collection('cities').doc('Seattle').set({ state: 'WA' });
    const city = await dbRef.collection('cities').doc('Seattle').get();

    expect(city.data()['population']).toEqual('WA');
  });
});
