interface EmailData {
  fullName: string;
  email: string;
  role: string;
  city?: string;
  country?: string;
  message: string;
}

export function generateEmailTemplate(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>New Private Access Request</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #111;
          background-color: #f8f9fa;
          margin: 0;
          padding: 20px;
          line-height: 1.6;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 32px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
          letter-spacing: -0.5px;
        }
        .header p {
          margin: 8px 0 0 0;
          opacity: 0.9;
          font-size: 16px;
        }
        .content {
          padding: 32px;
        }
        .field-group {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e9ecef;
        }
        .field-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .field-label {
          font-weight: 600;
          color: #495057;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value {
          font-size: 16px;
          color: #212529;
          word-break: break-word;
        }
        .message-box {
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          padding: 20px;
          border-radius: 8px;
          margin-top: 8px;
          white-space: pre-wrap;
          font-size: 16px;
          line-height: 1.7;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px 32px;
          text-align: center;
          font-size: 14px;
          color: #6c757d;
          border-top: 1px solid #e9ecef;
        }
        .badge {
          display: inline-block;
          background: #e9ecef;
          color: #495057;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          margin-top: 8px;
        }
        .empty-state {
          color: #6c757d;
          font-style: italic;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Private Access Request</h1>
        </div>
        
        <div class="content">
          <div class="field-group">
            <div class="field-label">Contact Information</div>
            <div class="field-value">
              <strong>${data.fullName}</strong><br>
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Professional Role</div>
            <div class="field-value">${data.role}</div>
            <div class="badge">${data.role}</div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Location</div>
            <div class="field-value">
              ${data.city || '<span class="empty-state">Not specified</span>'}
              ${data.city && data.country ? ', ' : ''}
              ${data.country || '<span class="empty-state">Not specified</span>'}
            </div>
          </div>
          
          <div class="field-group">
            <div class="field-label">Message</div>
            <div class="message-box">${data.message}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This request was submitted via the private access form on ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
