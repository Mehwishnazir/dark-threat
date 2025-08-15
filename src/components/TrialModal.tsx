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
    // Navigate to coming soon page instead
    window.open('/trial-coming-soon', '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <DialogTitle className="text-center">
            <h2 className="text-3xl font-oswald font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground">
              This feature is under development
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className="py-8 text-center space-y-6">
          {/* Animated icon */}
          <div className="relative mx-auto w-16 h-16">
            <div className="absolute inset-0 animate-pulse">
              <div className="w-16 h-16 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
            </div>
            <div className="absolute inset-2 bg-primary/20 rounded-full flex items-center justify-center animate-glow-pulse">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h3 className="text-xl font-oswald font-semibold text-foreground">
              Free Trial Registration
            </h3>
            <p className="text-muted-foreground">
              We're putting the finishing touches on our trial registration system. 
              Check back soon for full access to DarkThreat monitoring capabilities.
            </p>
          </div>

          {/* Animated progress indicators */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-0"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
          </div>

          <Button onClick={onClose} variant="outline" className="w-full">
            Back to Dashboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}