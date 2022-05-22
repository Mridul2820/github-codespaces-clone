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
  });
}
