export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/gurusalih',
    icon: 'github',
    color: '#f0f6fc'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/gurusalih',
    icon: 'twitter',
    color: '#1DA1F2'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/gurusalih',
    icon: 'linkedin',
    color: '#0A66C2'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@gurusalih',
    icon: 'youtube',
    color: '#FF0000'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/gurusalih',
    icon: 'instagram',
    color: '#E4405F'
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@gurusalih',
    icon: 'medium',
    color: '#ffffff'
  },
  {
    name: 'Email',
    url: 'mailto:contact@salih.guru',
    icon: 'email',
    color: '#EA4335'
  }
];

