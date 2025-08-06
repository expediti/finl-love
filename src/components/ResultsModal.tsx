const handlePrintResults = () => {
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>${tool.title} - Assessment Results - FitScan</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 0; 
              padding: 20px;
              line-height: 1.6;
            }
            .print-header { 
              text-align: center; 
              margin-bottom: 30px;
              border-bottom: 3px solid #3b82f6;
              padding-bottom: 20px;
            }
            .logo-section {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 15px;
            }
            .logo-img {
              width: 60px;
              height: 60px;
              margin-right: 15px;
              border-radius: 8px;
              object-fit: contain;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .site-name {
              font-size: 28px;
              font-weight: bold;
              color: #1f2937;
              margin: 0;
            }
            .site-tagline {
              font-size: 14px;
              color: #6b7280;
              margin: 5px 0 0 0;
            }
            .assessment-title {
              font-size: 24px;
              color: #374151;
              margin: 20px 0 10px 0;
            }
            .print-date {
              font-size: 12px;
              color: #9ca3af;
              margin: 0;
            }
            .risk-level { 
              background: #f9fafb; 
              border: 2px solid #e5e7eb;
              padding: 20px; 
              border-radius: 12px; 
              margin: 25px 0;
              text-align: center;
            }
            .risk-high { border-color: #ef4444; background: #fef2f2; }
            .risk-moderate { border-color: #f59e0b; background: #fffbeb; }
            .risk-mild { border-color: #f59e0b; background: #fffbeb; }
            .risk-low { border-color: #10b981; background: #f0fdf4; }
            .score-section { 
              text-align: center; 
              font-size: 18px; 
              margin: 25px 0;
              background: #f8fafc;
              padding: 15px;
              border-radius: 8px;
            }
            .recommendations { 
              margin: 25px 0; 
            }
            .recommendations h3 {
              color: #374151;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 8px;
            }
            .recommendations ul { 
              list-style-type: none; 
              padding-left: 0; 
            }
            .recommendations li {
              background: #f8fafc;
              margin: 8px 0;
              padding: 12px;
              border-left: 4px solid #3b82f6;
              border-radius: 4px;
            }
            .disclaimer { 
              background: #fff3cd; 
              border: 2px solid #ffeaa7; 
              padding: 20px; 
              border-radius: 12px; 
              margin-top: 30px;
            }
            .disclaimer h4 {
              color: #856404;
              margin-top: 0;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              font-size: 12px;
              color: #6b7280;
            }
            @media print {
              body { margin: 0; }
              .print-header { page-break-inside: avoid; }
              .logo-img { 
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-header">
            <div class="logo-section">
              <img src="${window.location.origin}/logo.png" alt="FitScan Logo" class="logo-img" />
              <div>
                <h1 class="site-name">FitScan</h1>
                <p class="site-tagline">Your Trusted Health Assessment Platform</p>
              </div>
            </div>
            <h2 class="assessment-title">${tool.title}</h2>
            <h3 style="color: #374151; margin: 10px 0;">Assessment Results</h3>
            <p class="print-date">Generated on: ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <div class="score-section">
            <strong>Your Assessment Score: ${score} out of ${maxScore} (${Math.round(percentage)}%)</strong>
          </div>
          
          <div class="risk-level risk-${riskAssessment.level.toLowerCase()}">
            <h3 style="margin-top: 0; font-size: 20px;">Risk Level: ${riskAssessment.level}</h3>
            <p style="margin-bottom: 0; font-size: 16px;">${getResultMessage(tool.id, riskAssessment.level)}</p>
          </div>
          
          <div class="recommendations">
            <h3>📋 Personalized Recommendations:</h3>
            <ul>
              ${recommendations.map(rec => `<li>• ${rec}</li>`).join('')}
            </ul>
          </div>
          
          <div class="disclaimer">
            <h4>⚠️ Important Medical Disclaimer</h4>
            <p style="margin: 0;">This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for proper medical evaluation and personalized healthcare decisions.</p>
          </div>
          
          <div class="footer">
            <p><strong>FitScan Health Assessment Platform</strong></p>
            <p>For more health tools and assessments, visit our platform</p>
            <p style="margin-top: 10px;">This report is confidential and intended for the individual who completed the assessment.</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
};
