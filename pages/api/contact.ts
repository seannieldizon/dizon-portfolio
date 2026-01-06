// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { ok: boolean } | { ok: false; error: string };

const getTransporter = () => {
  // Required env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP configuration in environment variables.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!email || !message) {
    return res.status(400).json({ ok: false, error: "Email and message are required." });
  }

  // Basic sanity checks
  if (typeof email !== "string" || typeof message !== "string") {
    return res.status(400).json({ ok: false, error: "Invalid payload." });
  }

  const safeName = typeof name === "string" && name.trim() ? name.trim() : "Website visitor";

  let transporter;
  try {
    transporter = getTransporter();
  } catch (err: any) {
    console.error("SMTP configuration error:", err);
    return res.status(500).json({ ok: false, error: "Server email configuration error." });
  }

  const contactTo = process.env.CONTACT_TO || process.env.SMTP_FROM || "saynoseanniel@gmail.com";

  const subject = `Portfolio contact from ${safeName}`;
  const text = `Name: ${safeName}\nFrom: ${email}\n\nMessage:\n${message}`;

  const html = `
    <div>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>From:</strong> ${email}</p>
      <hr />
      <p>${(message || "").replace(/\n/g, "<br/>")}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Portfolio" <${process.env.SMTP_USER}>`,
      to: contactTo,
      subject,
      text,
      html,
      replyTo: email,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("sendMail error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
}
