import axios from "axios";
// const https = require('https');

// const httpsAgent = new https.Agent({
//   rejectUnauthorized: false,
// });

const fetcher = axios.create({
  baseURL: "http://18.153.199.233:81/api",

  responseType: "json",
  headers: {
    "Content-Type": "multipart/form-data",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjUzYjA0NTAyZmRiYThiNjgxNDA1OGRiODZiM2JlYjc4NWY1ZTI5ZjMzYmQ2MTE5ZDNlYTNhNTc1YmRkMzcxZGM3YjY2NGFhNDdhNDllN2YiLCJpYXQiOjE2ODQzODkzNjkuMTM4MzA0LCJuYmYiOjE2ODQzODkzNjkuMTM4MzEzLCJleHAiOjE2ODYxMTczNjkuMDc0MjQ0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.QYJXQ99ZzWpDhM0tSJTHoVLsGtitnGUCXyrqljm6KC5DJnJEmT0sq6XOWNYwdZjopwz2rRKYK3IoVesNIPNfDDIk6O6aNCRwchofkVFzzPUGOiVtOHBgyQYRN_OIUQ-dBsGp6MGtPSp9t0ILgNdhpw1ykB22NLHWkHlpFJ-2BVrvx70HnJKOyI2OhYTeoNXbfDMzNUyUrZ_c91NRDyCIVZ0bufriw41NhEBkRiWY97i--wazVJF2Qdghx5Ybj5D5dWsdbeGbvy8fbpAX0tXgPCu2znm2yRn8eQc63UfGh_nLViTxtdfp2rjJCQhaiP8H4H0QQAplGJMKB0D97x2LU2R6AJudByWG1mIl4fUXn7s55lM5OI_1fhH2TbGB2bJHKMHi3zJHdANNTUQpBx5lWwvOISExbaF924c7gvjqMWmRlRIkVouaodBfzsjtPy23pReF4B12ZqQBcIDE8t6c92UJ6wOoLHAjUdPdvEP6ju2AZ-MUUidCLl1lBvZucAEUKeBDtySNWvImiM2GG3zr8s3PHrBdT2BUVjazJBN2sfzumNvQP9Fiz8usTVCRpGdBiX0yTOcG0dlhsBd-drN-aVdm9ZsY25KK06nNa92s_76aGU9HIXlpCt7kQnqQj6jw9rVHHeVaOAbOZ05GPo7xN2q5EwQTcxUrVQIubfzQLXg",
  },
});

export default fetcher;
