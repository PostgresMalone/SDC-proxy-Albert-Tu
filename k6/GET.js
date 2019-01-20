import http from "k6/http";
import { sleep } from "k6";

const randomNumber = () => {
  return Math.round(Math.random() * 1000000);
}

export default function () {
  http.get(`http://localhost:3000/homes/${randomNumber()}/suggestions`);
};