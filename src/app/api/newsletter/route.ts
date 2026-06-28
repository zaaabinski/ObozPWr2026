import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const requiredSmtpVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

function getMissingSmtpVars() {
  return requiredSmtpVars.filter((key) => {
    const value = process.env[key];

    return !value || value.startsWith("UZUPELNIJ_") || value === "change-me";
  });
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Podaj poprawny adres e-mail." },
      { status: 400 },
    );
  }

  const missingSmtpVars = getMissingSmtpVars();

  if (missingSmtpVars.length > 0) {
    console.error(
      `Newsletter email is not configured. Missing SMTP env vars: ${missingSmtpVars.join(", ")}`,
    );

    return NextResponse.json(
      {
        error:
          "Nie możemy teraz wysłać potwierdzenia. Spróbuj ponownie później albo napisz do nas na oboz@samorzad.pwr.edu.pl.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from:
        process.env.SMTP_FROM ??
        `"Obóz Studentów PWr" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: "oboz@samorzad.pwr.edu.pl",
      subject: "Potwierdzenie zapisu do informatora Obozu Studentów PWr",
      text:
        "Cześć!\n\nDziękujemy za zapis do informatora Obozu Studentów PWr. Będziemy wysyłać najważniejsze informacje o zapisach, terminach i aktualnościach związanych z obozem.\n\nDo zobaczenia!\nSztab Obozu Studentów PWr",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #15143a;">
          <h1 style="font-size: 22px; margin: 0 0 16px;">Dziękujemy za zapis!</h1>
          <p>Cześć!</p>
          <p>Dziękujemy za zapis do informatora <strong>Obozu Studentów PWr</strong>.</p>
          <p>Będziemy wysyłać najważniejsze informacje o zapisach, terminach i aktualnościach związanych z obozem.</p>
          <p>Do zobaczenia!<br/>Sztab Obozu Studentów PWr</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Newsletter confirmation email failed.", error);

    return NextResponse.json(
      {
        error:
          "Nie możemy teraz wysłać potwierdzenia. Spróbuj ponownie później albo napisz do nas na oboz@samorzad.pwr.edu.pl.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
