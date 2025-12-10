export interface ReportItem {
  id: string;
  title: string;
  category: 'Video' | 'Newsletter' | 'Social' | 'Event';
  link?: string;
  description?: string;
  thumbnail?: string;
}

export interface MonthlyReport {
  id: string;
  month: string;
  year: number;
  title: string;
  items: ReportItem[];
}

export const reports: MonthlyReport[] = [
  {
    id: 'nov-2025',
    month: 'November',
    year: 2025,
    title: 'Marketing Updates - November',
    items: [
      {
        id: 'vid-1',
        title: 'How to Setup Smart Motion Search on GV VMS 20',
        category: 'Video',
        link: '#', // Placeholder as original link wasn't extracted, user can update
        thumbnail: '/images/video-thumbnail-placeholder.jpg',
        description: 'Learn how to configure the advanced Smart Motion Search features in the latest GV VMS 20 release.'
      },
      {
        id: 'news-1',
        title: 'Monthly New Products',
        category: 'Newsletter',
        link: '#',
        description: 'Check out the latest hardware and software releases for this month.'
      },
      {
        id: 'news-2',
        title: 'Product Showcase - GV-FR Panel',
        category: 'Newsletter',
        link: '#',
        description: 'In-depth look at our new Facial Recognition Panel features and capabilities.'
      },
      {
        id: 'news-3',
        title: 'Case Study - City Surveillance for Giubileo 2025 in Vatican',
        category: 'Newsletter',
        link: '#',
        thumbnail: '/images/case-study-vatican.jpg',
        description: 'How GeoVision technology is securing the Vatican for the upcoming Jubilee 2025.'
      },
      {
        id: 'social-1',
        title: 'LinkedIn Updates',
        category: 'Social',
        link: '#',
        description: 'Follow our latest professional updates and industry news on LinkedIn.'
      },
      {
        id: 'event-1',
        title: 'Topic: GV-FR Panel',
        category: 'Event',
        link: '#',
        description: 'Register for our Monthly Insight session discussing the GV-FR Panel.'
      }
    ]
  }
];
