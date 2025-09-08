import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TrialProcessingDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function TrialProcessingDialog({ open, onClose }: TrialProcessingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-oswald">Account Processing</DialogTitle>
          <DialogDescription className="text-base">
            Your account is under processing. You will be notified once the process is complete.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <Button onClick={onClose} className="w-full">
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}