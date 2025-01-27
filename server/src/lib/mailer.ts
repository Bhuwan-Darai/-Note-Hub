import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const url = `http://localhost:8081/verify-email?token=${token}`;
  await transporter.sendMail({
    to: email,
    subject: "Verify Your Email",
    html: `Click <a href="${url}">here</a> to verify your email.`,
  });
};
