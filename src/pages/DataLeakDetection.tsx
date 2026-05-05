
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Search, BarChart3, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataLeakDetection = () => {
  const challenges = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Dark Web Monitoring",
      stat: "4.61 million",
      description: "daily users accessed the Tor network, the leading tool for dark web access.",
      content: "DarkThreat continuously scans dark web marketplaces, forums, and black-market channels to detect any signs of your organization's sensitive data being sold or traded. This proactive monitoring lets you act before threat actors capitalize on leaked information.",
      features: [
        "Discover compromised employee credentials before they're exploited",
        "Detect customer data being sold in bulk to prevent breaches",
        "Receive real-time alerts on new dark web mentions of your organization"
      ]
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-primary" />,
      title: "PII Exposure Detection",
      stat: "$4.88 million",
      description: "is the average cost of a data breach.",
      content: "By integrating threat intelligence, DarkThreat helps you prioritize vulnerabilities based on risk, allowing your team to address the most critical threats first and optimize remediation efforts.",
      features: [
        "Identify exposed customer information, like names, emails, or credit card numbers",
        "Detect employee PII, including credentials, before they lead to unauthorized access",
        "Get notifications on compromised user accounts to prevent unauthorized activity"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Credential Monitoring",
      stat: "64%",
      description: "of data leaks involve personal data, much of which is available on the dark web.",
      content: "With DarkThreat's credential monitoring, you're alerted whenever employee or customer login details surface on illicit platforms, helping you prevent potential account takeovers and security breaches.",
      features: [
        "Receive alerts for leaked login credentials tied to your organization",
        "Monitor for compromised passwords that might grant unauthorized access",
        "Identify accounts that need immediate attention for password resets or other actions"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Automated Leak Reports",
      stat: "14 billion+",
      description: "leaked credentials are monitored on the dark web, posing significant risk to organizations.",
      content: "Regular, automated reports on detected leaks provide your team with up-to-date insights into the security status of your data, enabling swift decision-making and actionable responses.",
      features: [
        "Get weekly summaries of detected PII exposures and credential leaks",
        "Access detailed reports to understand the scope and source of data leaks",
        "Easily share insights with compliance teams to ensure regulatory adherence"
      ]
    },
    {
      icon: <Trash2 className="w-12 h-12 text-primary" />,
      title: "Dark Web Data Removal",
      stat: "300%",
      description: "Increase in Data Sold on Black Markets Since 2019",
      content: "DarkThreat's Dark Web Data Removal: Protecting Sensitive Information from Unauthorized Exposure. As data breaches rise, sensitive information reaches the dark web, endangering security. DarkThreat's Dark Web Data Removal safeguards against malicious access.",
      features: [
        "Locate and remove sensitive data, such as personal and financial information, being sold on black markets",
        "Remove confidential information exposed on dark web forums and channels",
        "Ongoing monitoring of the dark web to detect and address new data leaks quickly"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-montserrat font-bold text-foreground">
            DARK<span className="text-primary">THREAT</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/data-leak-detection" className="text-primary">
              Data Leak Detection
            </Link>
            <Button className="hero-button">
              Start Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6">
            Data Leak & <span className="text-primary">PII Detection</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Prevent Data Leaks from Becoming Catastrophes.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Be Proactive against threats.
          </p>
          <Button className="hero-button text-lg px-8 py-4">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Problem, Impact, Solution */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              The Challenge We Solve
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding the critical security challenges organizations face today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative threat-card text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-50"></div>
              <div className="relative z-10 p-6">
                <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6 glow-border">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4 glow-text">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Organizations constantly face new vulnerabilities and data exposure risks. Without continuous dark web monitoring, sensitive data can be sold or traded before companies even know about the breach.
                </p>
                <div className="mt-6 p-4 bg-red-900/10 rounded-lg border border-red-900/20">
                  <p className="text-red-400 font-semibold">$4.88M</p>
                  <p className="text-xs text-muted-foreground">Average cost of a data breach</p>
                </div>
              </div>
            </div>
            
            <div className="relative threat-card text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-transparent opacity-50"></div>
              <div className="relative z-10 p-6">
                <div className="w-20 h-20 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6 glow-border">
                  <AlertTriangle className="w-10 h-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4 glow-text">The Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When PII is exposed on the dark web, it leads to identity fraud, financial theft, business email compromise attacks, and unauthorized access to critical systems and accounts.
                </p>
                <div className="mt-6 p-4 bg-orange-900/10 rounded-lg border border-orange-900/20">
                  <p className="text-orange-400 font-semibold">280 Days</p>
                  <p className="text-xs text-muted-foreground">Average breach detection time</p>
                </div>
              </div>
            </div>
            
            <div className="relative threat-card text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent opacity-50"></div>
              <div className="relative z-10 p-6">
                <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 glow-border">
                  <Shield className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4 glow-text">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  DarkThreat's advanced monitoring continuously scans dark web channels, detecting exposed data in real-time and enabling immediate response to prevent security incidents.
                </p>
                <div className="mt-6 p-4 bg-green-900/10 rounded-lg border border-green-900/20">
                  <p className="text-green-400 font-semibold">24/7</p>
                  <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-threat-dark to-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike breaches, sensitive data leaks often go unnoticed until it turns into a cyberattack. Hybrid working models and policies like "Bring Your Own Device" (BYOD) make businesses more vulnerable. Detecting data leaks early plays a key role in counter-measuring any threat that may arise from them.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-foreground mb-4">
              Comprehensive Protection Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced threat detection across multiple dark web channels
            </p>
          </div>
          
          <div className="space-y-16">
            {challenges.map((challenge, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="relative threat-card overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                    <div className="relative z-10 p-8">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-primary/10 rounded-full glow-border">
                          {challenge.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-montserrat font-bold text-foreground mb-2">
                            Protection
                          </h3>
                          <h4 className="text-xl font-montserrat font-bold text-primary">
                            {challenge.title}
                          </h4>
                        </div>
                      </div>
                      
                      <p className="text-foreground mb-6 leading-relaxed">
                        {challenge.content}
                      </p>
                      
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Key Capabilities:</h5>
                        <ul className="space-y-2">
                          {challenge.features.map((feature, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0 animate-glow-pulse"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-lg p-12 text-center glow-border">
                    <div className="absolute inset-0 bg-gradient-glow opacity-20 rounded-lg"></div>
                    <div className="relative z-10">
                      <div className="text-7xl font-montserrat font-bold text-primary mb-4 glow-text">
                        {challenge.stat}
                      </div>
                      <p className="text-foreground font-medium text-lg">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-threat-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold text-foreground mb-6">
            Ready to Protect Your Data?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your free trial today and see how DarkThreat can safeguard your organization
          </p>
          <Button className="hero-button text-lg px-8 py-4">
            Start Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-xl font-montserrat font-bold text-foreground">DarkThreat</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Advanced dark web monitoring and threat intelligence platform protecting your organization 24/7.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-primary">GitHub</a>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/dark-web-monitoring" className="text-muted-foreground hover:text-primary">Dark Web Monitoring</Link></li>
                <li><Link to="/credential-leak-detection" className="text-muted-foreground hover:text-primary">Credential Leak Detection</Link></li>
                <li><Link to="/data-leak-detection" className="text-muted-foreground hover:text-primary">Data Leak Detection</Link></li>
                <li><Link to="/compare/darkthreat-vs-darkowl" className="text-muted-foreground hover:text-primary">vs DarkOwl</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><Link to="/data-leak-detection" className="text-muted-foreground hover:text-primary">Data Leak Detection</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link to="/signin" className="text-muted-foreground hover:text-primary">Sign In</Link></li>
                <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/platform-terms" className="text-muted-foreground hover:text-primary">Platform Terms of Use</Link></li>
                <li><Link to="/website-terms" className="text-muted-foreground hover:text-primary">Website Terms of Use</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 DarkThreat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DataLeakDetection;
