import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Download, 
  FileText, 
  Search, 
  AlertTriangle, 
  Shield,
  Database,
  Mail,
  User,
  Calendar,
  TrendingUp
} from 'lucide-react';
import CollapsibleSidebar from '@/components/CollapsibleSidebar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Mock data based on the comprehensive breach reports
const breachData = {
  summary: {
    emailAddresses: 1847,
    breachedServices: 267,
    breachesDetected: 524,
    severityBreakdown: {
      high: { count: 423, percentage: 81 },
      medium: { count: 58, percentage: 11 },
      low: { count: 43, percentage: 8 }
    }
  },
  exposedInformation: [
    {
      email: "john.smith@techcorp.com",
      breach: "Collection stealer logs and comboblists leakbase May-June 2023",
      password: "T*****8",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "sarah.jones@techcorp.com", 
      breach: "CORP APP corporate credentials leaked may 2023",
      password: "S*****2",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "mike.wilson@techcorp.com",
      breach: "180M mail-pass by leakbase", 
      password: "M*****9",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "emma.davis@techcorp.com",
      breach: "Collection 2",
      password: "E*****4", 
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "alex.brown@techcorp.com",
      breach: "learnable.com",
      password: "A*****7",
      exposedData: ["Passwords", "Email addresses", "IP addresses", "Names", "Physical addresses"]
    }
  ],
  breachedServices: [
    {
      name: "Collection stealer logs and comboblists leakbase May-June 2023",
      count: 42,
      added: "06/11/2023",
      severity: "High",
      description: "This data breach originates from info stealer logs, specifically from RedLine, Meta, Aurora, Racoon and others. The term info stealer is self-explanatory. This type of malware resides in an infected computer and gathers data in order to send it to the attacker.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      name: "CORP APP corporate credentials leaked", 
      count: 28,
      added: "05/29/2023",
      severity: "High",
      description: "Corporate application credentials discovered in a dark web marketplace, exposing employee login information.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "180M mail-pass by leakbase",
      count: 167, 
      added: "02/27/2023",
      severity: "High",
      description: "~180 million lines of data in mail:pass format for half a year of Chucky journey. This database has been shared by the threat actor known as 'Leakbase' or 'Chucky' in a private, paid Telegram channel.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "Collection 2",
      count: 23,
      added: "08/14/2021", 
      severity: "High",
      description: "Not later than on January 30th, 2019, many security researchers observed that sets of data, named Collections #2 through #5, have been seen for sale on the dark web.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "learnable.com",
      count: 15,
      added: "01/27/2021",
      severity: "High",
      description: "Online learning platform data breach exposing user registration and profile information.",
      exposedData: ["Passwords", "Email addresses", "IP addresses", "Names", "Physical addresses"]
    },
    {
      name: "Collection 4",
      count: 8,
      added: "11/27/2020",
      severity: "High", 
      description: "On January 7, 2019, Collection 4 containing breached databases from different websites has been exposed. Collection 4 includes combo lists from Russia, EU and US databases.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "AntiPublic_RaidForums",
      count: 34,
      added: "11/09/2020",
      severity: "High",
      description: "AntiPublic - combo list. This database has been discovered by Kaduu team in darknet. In December 2016, a huge list of email address and password pairs appeared in a 'combo list' referred to as 'Anti Public'.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "Dailymotion",
      count: 12,
      added: "11/01/2020", 
      severity: "High",
      description: "In October 2016, the video sharing platform Dailymotion suffered a data breach. The attack led to the exposure of more than 85 million user accounts.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      name: "swvl.com",
      count: 89,
      added: "10/31/2020",
      severity: "High",
      description: "Transportation service data breach exposing user account information and travel patterns.",
      exposedData: ["Passwords", "Email addresses", "Names", "Phone numbers"]
    },
    {
      name: "racoon stealer log 03.10.2024",
      count: 7,
      added: "10/04/2024",
      severity: "High",
      description: "Recent stealer malware logs containing stolen credentials and sensitive information from infected systems.",
      exposedData: ["Passwords", "Passwords", "Credit cards", "Email addresses", "Usernames"]
    },
    {
      name: "combolist 24.10.2024",
      count: 19,
      added: "10/25/2024",
      severity: "High",
      description: "Recent compilation of username and password combinations from various breached sources.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      name: "Pakistan Gov and Edu domains 20.05.2025",
      count: 156,
      added: "05/20/2025",
      severity: "High",
      description: "Credentials targeting government and educational institutions, potentially affecting critical infrastructure.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    }
  ]
};

export default function Reports() {
  const [companyDomain, setCompanyDomain] = useState('techcorp.com');
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDFReport = async () => {
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let yPosition = 20;

      // Cover page
      pdf.setFontSize(24);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Dark Web Exposure Report', 20, yPosition);
      
      yPosition += 15;
      pdf.setFontSize(18);
      pdf.setTextColor(102, 102, 102);
      pdf.text(companyDomain, 20, yPosition);

      yPosition += 30;
      pdf.setFontSize(14);
      pdf.setTextColor(51, 51, 51);
      pdf.text(`Your breach scan sample for ${companyDomain}`, 20, yPosition);

      yPosition += 15;
      pdf.setFontSize(11);
      pdf.setTextColor(102, 102, 102);
      const description = `Here's an overview of your company's exposure through data breaches of third-party services. This report includes all breaches of user data we've located on the dark web linking to an email address on your company domain.`;
      const splitDescription = pdf.splitTextToSize(description, pageWidth - 40);
      pdf.text(splitDescription, 20, yPosition);

      // Summary section
      pdf.addPage();
      yPosition = 20;
      
      pdf.setFontSize(18);
      pdf.setTextColor(255, 255, 255);
      pdf.setFillColor(66, 66, 66);
      pdf.rect(20, yPosition - 5, pageWidth - 40, 12, 'F');
      pdf.text('Summary', 25, yPosition + 3);

      yPosition += 25;
      
      // Summary cards
      const cardWidth = (pageWidth - 60) / 3;
      const summaryData = [
        { label: 'Email Addresses Affected', value: breachData.summary.emailAddresses },
        { label: 'Breached Services Found', value: breachData.summary.breachedServices },
        { label: 'Breaches Detected', value: breachData.summary.breachesDetected }
      ];

      summaryData.forEach((item, index) => {
        const xPos = 20 + (index * (cardWidth + 10));
        
        pdf.setFillColor(245, 245, 245);
        pdf.rect(xPos, yPosition, cardWidth, 25, 'F');
        
        pdf.setFontSize(20);
        pdf.setTextColor(51, 51, 51);
        pdf.text(item.value.toString(), xPos + 5, yPosition + 12);
        
        pdf.setFontSize(10);
        pdf.setTextColor(102, 102, 102);
        const labelLines = pdf.splitTextToSize(item.label, cardWidth - 10);
        pdf.text(labelLines, xPos + 5, yPosition + 18);
      });

      // Severity breakdown
      yPosition += 40;
      pdf.setFontSize(16);
      pdf.setTextColor(51, 51, 51);
      pdf.text('Email Breaches by Severity', 20, yPosition);

      yPosition += 15;
      pdf.setFontSize(12);
      pdf.setTextColor(220, 53, 69);
      pdf.text(`● High (${breachData.summary.severityBreakdown.high.percentage}%) - ${breachData.summary.severityBreakdown.high.count}`, 20, yPosition);
      
      yPosition += 8;
      pdf.setTextColor(255, 193, 7);
      pdf.text(`● Medium (${breachData.summary.severityBreakdown.medium.percentage}%) - ${breachData.summary.severityBreakdown.medium.count}`, 20, yPosition);
      
      yPosition += 8;
      pdf.setTextColor(40, 167, 69);
      pdf.text(`● Low (${breachData.summary.severityBreakdown.low.percentage}%) - ${breachData.summary.severityBreakdown.low.count}`, 20, yPosition);

      // Examples of Exposed Information
      pdf.addPage();
      yPosition = 20;
      
      pdf.setFontSize(18);
      pdf.setTextColor(255, 255, 255);
      pdf.setFillColor(66, 66, 66);
      pdf.rect(20, yPosition - 5, pageWidth - 40, 12, 'F');
      pdf.text('Examples of Exposed Information', 25, yPosition + 3);

      yPosition += 25;

      breachData.exposedInformation.forEach((item, index) => {
        if (yPosition > pageHeight - 30) {
          pdf.addPage();
          yPosition = 20;
        }

        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        pdf.text('Email:', 20, yPosition);
        pdf.text(item.email, 40, yPosition);
        
        yPosition += 6;
        pdf.text('Breach:', 20, yPosition);
        pdf.text(item.breach, 40, yPosition);
        
        yPosition += 6;
        pdf.text('Password:', 20, yPosition);
        pdf.text(item.password, 40, yPosition);
        
        yPosition += 6;
        pdf.text('Exposed Info:', 20, yPosition);
        pdf.text(item.exposedData.join(', '), 40, yPosition);
        
        yPosition += 15;
        pdf.setDrawColor(230, 230, 230);
        pdf.line(20, yPosition - 5, pageWidth - 20, yPosition - 5);
      });

      // Breached Services
      pdf.addPage();
      yPosition = 20;
      
      pdf.setFontSize(18);
      pdf.setTextColor(255, 255, 255);
      pdf.setFillColor(66, 66, 66);
      pdf.rect(20, yPosition - 5, pageWidth - 40, 12, 'F');
      pdf.text('Breached Services', 25, yPosition + 3);

      yPosition += 25;

      breachData.breachedServices.forEach((service, index) => {
        if (yPosition > pageHeight - 50) {
          pdf.addPage();
          yPosition = 20;
        }

        pdf.setFontSize(14);
        pdf.setTextColor(51, 51, 51);
        pdf.text(service.name, 20, yPosition);
        
        pdf.setFontSize(12);
        pdf.setTextColor(13, 110, 253);
        pdf.text(service.count.toString(), pageWidth - 40, yPosition);

        yPosition += 8;
        pdf.setFontSize(10);
        pdf.setTextColor(102, 102, 102);
        pdf.text(`Added: ${service.added}    Severity: ${service.severity}`, 20, yPosition);

        yPosition += 8;
        const descriptionLines = pdf.splitTextToSize(service.description, pageWidth - 40);
        pdf.text(descriptionLines, 20, yPosition);
        
        yPosition += (descriptionLines.length * 4) + 5;
        pdf.text('Exposed Data: ' + service.exposedData.join(', '), 20, yPosition);
        
        yPosition += 20;
        pdf.setDrawColor(230, 230, 230);
        pdf.line(20, yPosition - 10, pageWidth - 20, yPosition - 10);
      });

      // Save the PDF and open in new tab
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
      
      // Also trigger download
      pdf.save(`dark-web-exposure-report-${companyDomain}-${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background flex w-full">
      <CollapsibleSidebar currentPath="/reports" />
      
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dark Web Exposure Reports</h1>
              <p className="text-muted-foreground mt-2">
                Generate comprehensive dark web exposure reports for your organization
              </p>
            </div>
            <Button 
              onClick={generatePDFReport}
              disabled={isGenerating}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              {isGenerating ? 'Generating...' : 'Generate Dark Web Exposure Report'}
            </Button>
          </div>

          {/* Report Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Report Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Company Domain</Label>
                  <Input
                    id="domain"
                    value={companyDomain}
                    onChange={(e) => setCompanyDomain(e.target.value)}
                    placeholder="techcorp.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Input value="Dark Web Exposure Analysis" disabled />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Mail className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold">{breachData.summary.emailAddresses}</p>
                    <p className="text-sm text-muted-foreground">Email Addresses Affected</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Database className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="text-2xl font-bold">{breachData.summary.breachedServices}</p>
                    <p className="text-sm text-muted-foreground">Breached Services Found</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div>
                    <p className="text-2xl font-bold">{breachData.summary.breachesDetected}</p>
                    <p className="text-sm text-muted-foreground">Breaches Detected</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold">{breachData.summary.severityBreakdown.high.percentage}%</p>
                    <p className="text-sm text-muted-foreground">High Severity</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Severity Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Breach Severity Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>High Severity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{breachData.summary.severityBreakdown.high.count}</span>
                    <Badge variant="destructive">{breachData.summary.severityBreakdown.high.percentage}%</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>Medium Severity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{breachData.summary.severityBreakdown.medium.count}</span>
                    <Badge variant="secondary">{breachData.summary.severityBreakdown.medium.percentage}%</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Low Severity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{breachData.summary.severityBreakdown.low.count}</span>
                    <Badge variant="outline">{breachData.summary.severityBreakdown.low.percentage}%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Exposed Information */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Exposed Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {breachData.exposedInformation.slice(0, 3).map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p className="text-sm">{item.email}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Breach Source</p>
                        <p className="text-sm">{item.breach}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Password</p>
                        <p className="text-sm font-mono">{item.password}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Exposed Data Types</p>
                      <div className="flex flex-wrap gap-1">
                        {item.exposedData.map((dataType, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {dataType}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Breached Services */}
          <Card>
            <CardHeader>
              <CardTitle>Major Breached Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {breachData.breachedServices.slice(0, 4).map((service, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Added: {service.added} | Severity: 
                          <Badge className={`ml-1 ${getSeverityColor(service.severity)}`}>
                            {service.severity}
                          </Badge>
                        </p>
                      </div>
                      <Badge variant="secondary">{service.count} records</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {service.exposedData.map((dataType, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {dataType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}