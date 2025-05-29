export interface VersionFeature {
  title: string;
  description: string;
  imageUrl?: string;
  gifUrl?: string;
}

export interface AppVersion {
  version: string;
  releaseDate: string;
  tag: 'stable' | 'beta' | 'alpha' | 'rc';
  features: VersionFeature[];
}

export const versions: AppVersion[] = [
  {
    version: '1.0.0',
    releaseDate: '2023-11-15',
    tag: 'stable',
    features: [
      {
        title: 'Initial Release',
        description: 'First stable version of the app',
        imageUrl: '/images/version-1.0.png'
      }
    ]
  },
  {
    version: '1.1.0',
    releaseDate: '2023-12-01',
    tag: 'beta',
    features: [
      {
        title: 'New Dashboard',
        description: 'Redesigned dashboard interface',
        gifUrl: '/gifs/new-dashboard.gif'
      }
    ]
  },
  {
    version: '1.2.0',
    releaseDate: '2023-12-10',
    tag: 'rc',
    features: [
      {
        title: 'New Widgets',
        description: 'Introducing new widgets for enhanced insights',
        gifUrl: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/attention-insights-flow-example-saas-marketing-funnel_058d27b262fcafc11da995cae162b693.gif'
      },
      {
        title: 'New Chart Types',
        description: 'Support for different chart types for better visualizations',
        gifUrl: 'https://d37oebn0w9ir6a.cloudfront.net/account_6827/user-activation-metrics-chrome-capture-2024-5-12-1_66eaf6725056f09090cd947ce8f0e5f0.gif'
      },
      {
        title: 'Developer APIs',
        description: 'Access to developer APIs for custom integrations',
        gifUrl: 'https://us.v-cdn.net/6030023/uploads/358F0D1BEYVL/collapse-navigation.gif'

      },
    ]
  },
];

export const getLatestVersion = () => versions[versions.length - 1];