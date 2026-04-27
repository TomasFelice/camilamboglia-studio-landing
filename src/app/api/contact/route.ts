import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, business, industry, needs } = body;

        // Validate required fields
        if (!name || !email || !phone || !business || !industry || !needs) {
            return NextResponse.json(
                { error: "Todos los campos son obligatorios." },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"Cala Studio" <${process.env.GMAIL_USER}>`,
            to: "camilamboglia.studio@gmail.com",
            replyTo: email,
            subject: `Nuevo contacto: ${name} — ${business}`,
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
                    <div style="border-bottom: 2px solid #7b0e0e; padding-bottom: 16px; margin-bottom: 24px;">
                        <h1 style="font-size: 20px; font-weight: 700; margin: 0; color: #7b0e0e;">
                            Nuevo mensaje de contacto
                        </h1>
                    </div>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd; color: #4a403a; width: 160px; vertical-align: top;">
                                <strong>Nombre</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd; color: #4a403a; vertical-align: top;">
                                <strong>Email</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd;">
                                <a href="mailto:${email}" style="color: #7b0e0e;">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd; color: #4a403a; vertical-align: top;">
                                <strong>Teléfono</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd; color: #4a403a; vertical-align: top;">
                                <strong>Negocio / Marca</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd;">${business}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd; color: #4a403a; vertical-align: top;">
                                <strong>Rubro / Industria</strong>
                            </td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #e4e2dd;">${industry}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; color: #4a403a; vertical-align: top;">
                                <strong>Necesidades</strong>
                            </td>
                            <td style="padding: 10px 0; white-space: pre-wrap;">${needs}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e4e2dd; font-size: 11px; color: #4a403a80;">
                        Enviado desde el formulario de contacto — calastudio.benai.com.ar
                    </div>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Email send error:", err);
        return NextResponse.json(
            { error: "Error al enviar el mensaje." },
            { status: 500 }
        );
    }
}