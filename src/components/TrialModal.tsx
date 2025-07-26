import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    companyDomain: '',
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trial registration:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">
              Start Your Free Trial
            </h2>
            <p className="text-lg text-muted-foreground">
              7-day free trial • No credit card required
            </p>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Business Email Address*
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="you@company.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                First Name*
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="John"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Last Name*
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Job Title*
              </label>
              <Input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Security Manager"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company Name*
              </label>
              <Input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="Your Company"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company Domain Name*
              </label>
              <Input
                type="text"
                name="companyDomain"
                value={formData.companyDomain}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="company.com"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Country*
              </label>
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full"
                placeholder="United States"
              />
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            By submitting this form, you agree to receive emails from us and to share your information so we can provide the requested service. You may unsubscribe at any time. For more, see our Privacy Policy.
          </div>

          <Button type="submit" className="w-full hero-button text-lg py-4">
            Start Free Trial
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}