import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 3000,
  duration: '10s',
};

export default function getUniversities() {
  http.get('http://localhost:3000/api/universities');
  sleep(1);
}
