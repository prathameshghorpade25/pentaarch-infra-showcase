import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ 
  url = window.location.href, 
  title = document.title,
  description = ''
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  };

  const openShareWindow = (shareUrl: string) => {
    window.open(
      shareUrl,
      'share-window',
      'width=600,height=400,scrollbars=yes,resizable=yes'
    );
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.facebook)}
        className="flex items-center gap-2"
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.twitter)}
        className="flex items-center gap-2"
      >
        <Twitter className="h-4 w-4" />
        X (Twitter)
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.linkedin)}
        className="flex items-center gap-2"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(shareLinks.whatsapp)}
        className="flex items-center gap-2"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </Button>
    </div>
  );
};
