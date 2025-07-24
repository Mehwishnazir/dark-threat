
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
          <Link to="/" className="text-2xl font-oswald font-bold text-foreground">
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
          <h1 className="text-5xl md:text-6xl font-oswald font-bold text-foreground mb-6">
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="threat-card text-center">
              <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-4">Problem</h3>
              <p className="text-muted-foreground">
                Software and systems constantly face new vulnerabilities, and without a continuous detection strategy, businesses risk exposure to exploits and compliance failures.
              </p>
            </div>
            
            <div className="threat-card text-center">
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-4">Impact</h3>
              <p className="text-muted-foreground">
                When PII is exposed, it can lead to identity fraud, financial theft, BEC attacks and phishing scams, and unauthorized access to sensitive accounts, resulting in compliance penalties and damaging your organization's credibility.
              </p>
            </div>
            
            <div className="threat-card text-center">
              <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-oswald font-bold text-foreground mb-4">Solution</h3>
              <p className="text-muted-foreground">
                DarkThreat's Data Leak & PII Detection monitors dark web channels, detecting exposed sensitive data and enabling proactive security against security risks.
              </p>
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
          <div className="space-y-20">
            {challenges.map((challenge, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <div className="threat-card">
                    <div className="flex items-center mb-6">
                      {challenge.icon}
                      <div className="ml-4">
                        <h3 className="text-2xl font-oswald font-bold text-foreground mb-2">
                          Challenge
                        </h3>
                        <h4 className="text-xl font-oswald font-bold text-primary">
                          {challenge.title}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="text-4xl font-oswald font-bold text-primary mb-2">
                      {challenge.stat}
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {challenge.description}
                    </p>
                    
                    <p className="text-foreground mb-6">
                      {challenge.content}
                    </p>
                    
                    <ul className="space-y-2">
                      {challenge.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-lg p-8 text-center">
                    <div className="text-6xl font-oswald font-bold text-primary mb-4">
                      {challenge.stat}
                    </div>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
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
          <h2 className="text-4xl font-oswald font-bold text-foreground mb-6">
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
    </div>
  );
};

export default DataLeakDetection;
