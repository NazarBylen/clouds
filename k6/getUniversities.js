import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 300000,
  duration: '1s',
};

export default function getUniversities() {
  http.get(
    'http://nodejs-app-elb-2001334952.eu-central-1.elb.amazonaws.com/api/subjects',
  );
  sleep(1);
}
