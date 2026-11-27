// pages/api/contact.ts — project inquiry endpoint.
// Required env vars (unchanged): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// Optional: SMTP_FROM, CONTACT_TO
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { ok: true } | { ok: false; error: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = { name: 120, business: 160, email: 200, projectType: 120, budget: 120, problem: 5000 } as const;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) throw new Error("Missing SMTP configuration in environment variables.");
  return nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const body = req.body ?? {};

  // Honeypot: pretend success so bots don't retry.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const business = clean(body.business, LIMITS.business);
  const email = clean(body.email, LIMITS.email);
  const projectType = clean(body.projectType, LIMITS.projectType);
  const budget = clean(body.budget, LIMITS.budget);
  // `message` accepted for backward compatibility with the previous form.
  const problem = clean(body.problem ?? body.message, LIMITS.problem);

  if (!email || !emailRe.test(email)) {
    return res.status(400).json({ ok: false, error: "Please provide a valid email address." });
  }
  if (problem.length < 10) {
    return res.status(400).json({ ok: false, error: "Please describe your project in a little more detail." });
  }

  let transporter;
  try {
    transporter = getTransporter();
  } catch (err) {
    console.error("SMTP configuration error:", err);
    return res.status(500).json({ ok: false, error: "The contact form is temporarily unavailable." });
  }

  const contactTo = process.env.CONTACT_TO || process.env.SMTP_FROM || "saynoseanniel@gmail.com";
  const who = name || "Website visitor";
  const subjectLine = `New project inquiry: ${projectType || "General"}, ${who}${business ? ` (${business})` : ""}`
    .replace(/[\r\n]+/g, " ")
    .slice(0, 200);

  const rows: [string, string][] = [
    ["Name", who],
    ["Business", business || "—"],
    ["Email", email],
    ["Project type", projectType || "—"],
    ["Budget", budget || "—"],
  ];

  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nWhat they're trying to solve:\n${problem}`;
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#15171B">
      <table cellpadding="4">${rows
        .map(([k, v]) => `<tr><td style="color:#62666E">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
        .join("")}</table>
      <hr style="border:none;border-top:1px solid #DCD7CB;margin:16px 0" />
      <p style="color:#62666E;margin:0 0 6px">What they're trying to solve:</p>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(problem)}</p>
    </div>`;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Portfolio" <${process.env.SMTP_USER}>`,
      to: contactTo,
      subject: subjectLine,
      text,
      html,
      replyTo: email,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("sendMail error:", err);
    return res.status(500).json({ ok: false, error: "Your message couldn't be sent right now." });
  }
}
