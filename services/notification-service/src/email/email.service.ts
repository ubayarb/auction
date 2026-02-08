import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

interface SendEmailDto {
  userId: string;
  to?: string;
  subject: string;
  body: string;
  data?: Record<string, any>;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get('SMTP_HOST', 'localhost'),
      port: this.config.get('SMTP_PORT', 1025),
      secure: this.config.get('SMTP_SECURE', 'false') === 'true',
      auth: {
        user: this.config.get('SMTP_USER', ''),
        pass: this.config.get('SMTP_PASS', ''),
      },
    });
  }

  async send(dto: SendEmailDto): Promise<void> {
    try {
      const result = await this.transporter.sendMail({
        from: this.config.get('SMTP_FROM', '"ELAND" <noreply@eland.mn>'),
        to: dto.to || `user-${dto.userId}@eland.mn`, // Resolve actual user email later
        subject: dto.subject,
        html: this.buildHtml(dto.subject, dto.body),
      });

      this.logger.log(`И-мэйл илгээгдлээ: ${result.messageId}`);
    } catch (error: any) {
      this.logger.error(`И-мэйл илгээхэд алдаа: ${error.message}`);
      throw error;
    }
  }

  private buildHtml(subject: string, body: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #fff; padding: 30px; border: 1px solid #e5e7eb; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #999; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ELAND</h1>
            </div>
            <div class="content">
              <h2>${subject}</h2>
              <p>${body}</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} ELAND. Бүх эрх хуулиар хамгаалагдсан.</p>
              <p>Энэхүү и-мэйл нь автоматаар илгээгдсэн болно.</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}
