export default function handler(req, res) {
  res.status(200).json({
    header: {
      mainlinks: [
        {
          text: 'Pull requests',
          href: '/',
        },
        {
          text: 'Issues',
          href: '/',
        },
        {
          text: 'Marketplace',
          href: '/',
        },
        {
          text: 'Explore',
          href: '/',
        },
      ],
      addlinks: [
        {
          text: 'New repository',
          href: '/',
        },
        {
          text: 'Import repository',
          href: '/',
        },
        {
          text: 'New gist',
          href: '/',
        },
        {
          text: 'New organization',
          href: '/',
        },
        {
          text: 'New project',
          href: '/',
        },
      ],
      userlinks: [
        [
          {
            text: 'Your profile',
            href: '/',
          },
          {
            text: 'Your repositories',
            href: '/',
          },
          {
            text: 'Your codespaces',
            href: '/',
          },
          {
            text: 'Your organizations',
            href: '/',
          },
          {
            text: 'Your projects',
            href: '/',
          },
          {
            text: 'Your stars',
            href: '/',
          },
          {
            text: 'Your gists',
            href: '/',
          },
          {
            text: 'Your sponsors',
            href: '/',
          },
        ],
        [
          {
            text: 'Upgrade',
            href: '/',
          },
          {
            text: 'Feature Preview',
            href: '/',
          },
          {
            text: 'Help',
            href: '/',
          },
          {
            text: 'Settings',
            href: '/',
          },
        ],
        [
          {
            text: 'Sign out',
            href: '/',
          },
        ],
      ],
    },
    footer: {
      footerTop: {
        linkRows: [
          {
            title: 'Product',
            links: [
              {
                text: 'Features',
                href: '/',
              },
              {
                text: 'Security',
                href: '/',
              },
              {
                text: 'Team',
                href: '/',
              },
              {
                text: 'Enterprise',
                href: '/',
              },
              {
                text: 'Customer stories',
                href: '/',
              },
              {
                text: 'The ReadME Project',
                href: '/',
              },
              {
                text: 'Pricing',
                href: '/',
              },
              {
                text: 'Resources',
                href: '/',
              },
              {
                text: 'Roadmap',
                href: '/',
              },
            ],
          },
          {
            title: 'Platform',
            links: [
              {
                text: 'Developer API',
                href: '/',
              },
              {
                text: 'Atom',
                href: '/',
              },
              {
                text: 'Electron',
                href: '/',
              },
              {
                text: 'GitHub Desktop',
                href: '/',
              },
            ],
          },
          {
            title: 'Support',
            links: [
              {
                text: 'Docs',
                href: '/',
              },
              {
                text: 'Community Forum',
                href: '/',
              },
              {
                text: 'Professional Services',
                href: '/',
              },
              {
                text: 'Status',
                href: '/',
              },
              {
                text: 'Contact GitHub',
                href: '/',
              },
            ],
          },
          {
            title: 'Company',
            links: [
              {
                text: 'About',
                href: '/',
              },
              {
                text: 'Blog',
                href: '/',
              },
              {
                text: 'Careers',
                href: '/',
              },
              {
                text: 'Press',
                href: '/',
              },
              {
                text: 'Inclusion',
                href: '/',
              },
              {
                text: 'Social Impact',
                href: '/',
              },
              {
                text: 'Shop',
                href: '/',
              },
            ],
          },
        ],
      },
      footerBottom: {
        links: [
          {
            text: 'Terms',
            href: '/',
          },
          {
            text: 'Privacy',
            href: '/',
          },
          {
            text: 'Site Map',
            href: '/',
          },
          {
            text: 'What is Git?',
            href: '/',
          },
        ],
      },
    },
  });
}
