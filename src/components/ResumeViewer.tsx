'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X, ExternalLink } from 'lucide-react';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeViewer = ({ isOpen, onClose, resumeUrl }: ResumeViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    // Direct download without tracking
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aravind_R_Nair_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">My Resume</h2>
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2"
              size="sm"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              size="sm"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
          <iframe
            src={resumeUrl}
            className="w-full h-full"
            onLoad={() => setIsLoading(false)}
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
};