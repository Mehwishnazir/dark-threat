import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { submitLeadForm } from '@/utils/formSubmit';
import { useToast } from '@/hooks/use-toast';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    companyDomain: '',
    country: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitLeadForm({
        formType: 'Trial Registration',
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        jobTitle: formData.jobTitle,
        companyName: formData.companyName,
        companyDomain: formData.companyDomain,
        country: formData.country,
      });
      toast({
        title: 'Trial request received',
        description: "Thanks! We'll be in touch shortly to activate your trial.",
      });
      onClose();
    } catch (err) {
      console.error('Trial lead capture failed', err);
      toast({
        title: 'Something went wrong',
        description: 'Please try again in a moment.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <DialogTitle className="text-3xl font-montserrat font-bold text-foreground text-center">
            Start Your Free Trial
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            7-day free trial • No credit card required
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">Business Email*</label>
              <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name*</label>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name*</label>
              <Input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required placeholder="Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Job Title*</label>
              <Input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} required placeholder="Security Manager" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company Name*</label>
              <Input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} required placeholder="Your Company" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company Domain*</label>
              <Input type="text" name="companyDomain" value={formData.companyDomain} onChange={handleInputChange} required placeholder="company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Country*</label>
              <Input type="text" name="country" value={formData.country} onChange={handleInputChange} required placeholder="United States" />
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            By submitting this form, you agree to receive emails from us and to share your information so we can provide the requested service. You may unsubscribe at any time. See our Privacy Policy for details.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="sm:w-1/3">
              Cancel
            </Button>
            <Button type="submit" className="hero-button flex-1 text-base py-4" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : 'Start Free Trial'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
