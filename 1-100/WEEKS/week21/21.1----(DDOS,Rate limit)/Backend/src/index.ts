import express, { Request, Response } from "express";

const app = express();
app.use(express.json());


const otpStore: Record<string, string> = {};

app.post("/generate-otp", (req: Request, res: Response) => {
  const email = req.body?.email;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
  otpStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`);

  return res.status(200).json({ message: "OTP generated & logged in console" });
});


app.post("/reset-password", (req: Request, res: Response) => {
  const { email, otp, newPassword } = req.body;

  if (!email || !otp || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email, OTP, and new password are required" });
  }

  if (otpStore[email] === otp) {
    console.log(`Password for ${email} reset to: ${newPassword}`);

    delete otpStore[email]; 

    return res.status(200).json({ message: "Password reset successfully" });
  }

  return res.status(401).json({ message: "Invalid OTP" });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
