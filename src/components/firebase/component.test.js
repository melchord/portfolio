import { default as Firebase } from './component';
import 'firebase/functions';
import 'firebase/app-check';

test('firebase has been initialized', () => {
  expect(Firebase.appCheck()).toBeTruthy();
});

test('firebase has firestore database', () => {
  expect(Firebase.firestore()).toBeTruthy();
});
