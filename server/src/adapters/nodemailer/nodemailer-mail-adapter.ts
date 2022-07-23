import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3ca49639156e86",
      pass: "19ff8393d227c3"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        
    await transport.sendMail({
        from: 'Equipe Feedget <bonitoemail@feedget.com>',
        to: 'Leonardo Scalabrin <teste@teste.com>',
        subject: subject,
        html: body,
    })
    };
}