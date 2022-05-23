// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    sectionFirst: {
      title: 'Blazing fast cloud <br/> developer environments',
      description:
        'Visual Studio Code backed by high performance VMs that start in seconds.',
    },
    sectionPower: {
      title: 'The full power of <br/> Visual Studio Code',
      description:
        'Use the full power of Visual Studio Code, including the editor, terminal, debugger, version control, settings sync, and the entire ecosystem of extensions. Work in the browser or hand off to your desktop.',
    },
    sectionFaster: {
      title: 'Faster than your laptop',
      description:
        'Spin up new dev environment for any sized project in seconds with prebuilt images. GitHub’s own 35GB dev image starts in under 10 seconds. Scale your cloud VMs up to 32 cores and 64GB of RAM. And with low-latency connections across four regions, you won’t even remember it’s not your local machine.',
      stats: [
        {
          detail: 'CPUs up to',
          stat: '32 cores',
        },
        {
          detail: 'Memory up to',
          stat: '64 GB',
        },
        {
          detail: 'Spin up',
          stat: '<10 sec',
        },
      ],
    },
    sectionEnv: {
      title: 'Standardized dev <br/> environments',
      description:
        'Join a new team and just start coding. Standardize environments, runtime requirements, hardware specs, extensions and editor settings in <span style="color:#fff;">.devcontainer.json</span> configuration files. Isolate dependencies between projects with containers and docker-compose.',
    },
    sectionPreview: {
      title: 'Browser preview and <br/> port forwarding',

      description:
        'Preview your changes in the browser with instant reloads (websocket and HMR support) and share private and public ports with your teammates.',
    },
    sectionMoreDetail: {
      title:
        'Tabs, spaces, Monokai, Solarized, <br/> light, dark, Prettier, Beautify…',
      description:
        'Every nerdy detail only you care about, configured just right, backed by your <br/> own dotfiles repository.',
    },
    sectionReview: {
      title: 'GitHub builds <br/> with Codespaces',
      urlText: 'Learn how GitHub builds GitHub with Codespaces',
      url: '/',
      reviews: [
        {
          review:
            'Unreal—Codespaces had me <br/> running a server in minutes, and that <br/> never happens as a new hire. <br/> What an awesome first week!',
          reviewer: 'Chris Westra',
          reviewerImage:
            'https://github.githubassets.com/images/modules/site/codespaces/chris.jpg',
          reviewerTitle: 'Senior Software Engineer',
        },
        {
          review:
            'Day 2 of Codespaces: Shipped a pull <br/> request and started working on <br/> another one without waiting for <br/> script/bootstrap.',
          reviewer: 'Yumin Wong',
          reviewerImage:
            'https://github.githubassets.com/images/modules/site/codespaces/yumin.jpg',
          reviewerTitle: 'Staff Software Engineer',
        },
      ],
    },
    sectionPrice: {
      title: 'Pay as you go',
      dataleft: {
        title:
          'Available today for GitHub Teams and <br/> GitHub Enterprise Cloud customers',
        url: '/',
        logoImg:
          'https://github.githubassets.com/images/modules/site/codespaces/codespaces-logo.svg',
      },
      dataright: {
        title: 'Codespaces Compute',
        subTitle: 'Isolated VMs billed per second',
        prices: [
          {
            core: '2 core',
            ram: '4GB',
            price: '$.18',
          },
          {
            core: '4 core',
            ram: '8GB',
            price: '$.36',
          },
          {
            core: '8 core',
            ram: '16GB',
            price: '$.72',
          },
          {
            core: '16 core',
            ram: '32GB',
            price: '$1.44',
          },
          {
            core: '32 core',
            ram: '64GB',
            price: '$2.88',
          },
        ],
        inactivePrice: {
          price: '$0.07',
          detail: 'per gigabyte per month',
        },
      },
    },
    sectionFaq: {
      title: 'Frequently asked questions',
      faqs: [
        {
          question: 'How do I get access to Codespaces?',
          answer:
            'Codespaces is rolling out progressively on August 11th, 2021 and <a href="/"> can be enabled in settings</a>  by organization owners for Team and Enterprise Cloud plans. For users in individual plans, we’re extending the existing Codespaces beta. For those in the beta, access will remain and we’ll share updates on what’s coming in the near future.',
        },
        {
          question: 'Does GitHub use Codespaces?',
          answer:
            'GitHub uses Codespaces to build github.com. <a href="/">An explainer of how GitHub uses Codespaces</a> is available on our blog.',
        },
        {
          question: 'How much does Codespaces cost for organizations?',
          answer:
            'Full details on pricing are <a href="/">available in our documentation</a>. Billing begins for Codespaces after September 10th, 2021 PST. Prior to this date, organizations with Team or Enterprise Cloud accounts can trial Codespaces without charges. Codespaces is in beta preview for U.S. government customers; please contact your sales rep for more information.',
        },
        {
          question: 'What is github.dev?',
          answer:
            'Press <kbd>.</kbd> on any repo to make quick edits powered by Visual Studio Code.',
        },
        {
          question: 'When can I use Codespaces on my personal repos?',
          answer:
            'We’ll share more information about how individuals will be able to use Codespaces in the future. Individuals in the existing beta will continue to have access to Codespaces and will not be charged.',
        },
        {
          question: 'Can I run a Codespace locally?',
          answer:
            'While Codespaces run in global data centers to reduce latency, you can run a cloud instance of any repository configured with a <a href="/">devcontainer</a> locally using <a href="/">VS Code Remote Containers</a>.',
        },
      ],
    },
  });
}
