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

// Mock data based on the breach reports shown
const breachData = {
  summary: {
    emailAddresses: 103,
    breachedServices: 111,
    breachesDetected: 224,
    severityBreakdown: {
      high: { count: 155, percentage: 69 },
      medium: { count: 0, percentage: 0 },
      low: { count: 69, percentage: 31 }
    }
  },
  exposedInformation: [
    {
      email: "yasmeen.bano@habib.edu.pk",
      breach: "Combolist 27.06.2025 (83 FILES)",
      password: "p*****3",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "muhammad.faheem@habib.edu.pk", 
      breach: "Combolist compiled by Chucky (6FILES)",
      password: "k*****5",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "anam.sophie@habib.edu.pk",
      breach: "Combolist compiled by Chucky (6FILES)", 
      password: "s*****7",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "hisar.abbas@habib.edu.pk",
      breach: "Combolist compiled by Chucky (6FILES)",
      password: "G*****6", 
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      email: "nadeem.abbas@habib.edu.pk",
      breach: "Combolist compiled by Chucky (6FILES)",
      password: "n*****1",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    }
  ],
  breachedServices: [
    {
      name: "Apollo",
      count: 52,
      added: "10/05/2018",
      severity: "Low",
      description: "In July 2018, the sales engagement startup Apollo left a database containing billions of data points publicly exposed without a password.",
      exposedData: ["Email addresses", "Employers", "Geographic locations", "Job titles", "Names", "Phone numbers", "Social media profiles"]
    },
    {
      name: "Canva", 
      count: 11,
      added: "08/09/2019",
      severity: "High",
      description: "In May 2019, the graphic design tool website Canva suffered a data breach that impacted 137 million subscribers.",
      exposedData: ["Passwords", "Email addresses", "Geographic locations", "Homepage URLs", "Names", "Phone numbers", "Spoken languages", "Usernames"]
    },
    {
      name: "Collection #1",
      count: 1, 
      added: "01/16/2019",
      severity: "High",
      description: "In January 2019, a large collection of credential stuffing lists was discovered being distributed on a popular hacking forum.",
      exposedData: ["Passwords", "Email addresses"]
    },
    {
      name: "Dailymotion",
      count: 1,
      added: "08/07/2017", 
      severity: "High",
      description: "In October 2016, the video sharing platform Dailymotion suffered a data breach.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      name: "Edmodo",
      count: 1,
      added: "06/01/2017",
      severity: "High", 
      description: "In May 2017, the education platform Edmodo was hacked resulting in the exposure of 77 million records.",
      exposedData: ["Passwords", "Email addresses", "Usernames"]
    },
    {
      name: "MyFitnessPal",
      count: 3,
      added: "02/21/2019",
      severity: "High",
      description: "In February 2018, the diet and exercise service MyFitnessPal suffered a data breach.",
      exposedData: ["Passwords", "Email addresses", "IP addresses", "Usernames"]
    }
  ]
};

export default function Reports() {
  const [companyDomain, setCompanyDomain] = useState('habib.edu.pk');
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
      pdf.text('Breach Domain Report', 20, yPosition);
      
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

      // Save the PDF
      pdf.save(`dark-web-breach-report-${companyDomain}-${new Date().toISOString().split('T')[0]}.pdf`);
      
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
              <h1 className="text-3xl font-bold text-foreground">Dark Web Reports</h1>
              <p className="text-muted-foreground mt-2">
                Generate comprehensive breach reports for your organization
              </p>
            </div>
            <Button 
              onClick={generatePDFReport}
              disabled={isGenerating}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              {isGenerating ? 'Generating...' : 'Generate PDF Report'}
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
                    placeholder="example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Input value="Comprehensive Breach Analysis" disabled />
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