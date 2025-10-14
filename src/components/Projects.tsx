import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Access Wayfinder',
      tech: 'React Native · Expo · JavaScript · Node.js · Firebase',
      description: 'iOS accessibility guide mobile app helping users discover wheelchair-accessible businesses and public spaces across 9 New Jersey cities.',
      achievements: [
        'Built responsive UI components with React Navigation for multi-screen navigation',
        'Implemented real-time search and filtering algorithms for 7+ business categories',
        'Downloaded 3000+ times with 5.0 star average',
        'Featured on PBS, NJ.com, and the Star-Ledger'
      ],
      stats: { downloads: '3,000+', rating: '5.0★', cities: '9' },
      link: '/projects/access-wayfinder'
    },
    {
      title: 'DixieAI',
      tech: 'React Native · TypeScript · Express.js · Google Cloud · PostgreSQL',
      description: 'Full-stack React Native mobile app for reading, summarizing, and replying to emails with voice.',
      achievements: [
        'Architectured scalable backend infrastructure using Express.js and Google API client libraries',
        'Implemented email processing pipelines with HTML sanitization and AI-powered content summarization',
        'Integrated OpenAI GPT-4o-mini with voice recognition and text-to-speech capabilities',
        'Built OAuth 2.0 authentication with fallback systems'
      ],
      stats: { tech: 'AI/ML', status: 'In Development', api: 'GPT-4o' },
      link: '/projects/dixie-ai'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary-600 bg-primary-50 px-3 py-1 border-2 border-primary-500">
            03_PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mt-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="border-4 border-dark-900 bg-white flex flex-col hover:translate-x-1 hover:-translate-y-1 transition-transform group"
            >
              <div className="border-b-4 border-dark-900 p-6 bg-primary-500 group-hover:bg-dark-900 transition-colors">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="font-mono text-xs text-white/90">{project.tech}</p>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-dark-700 mb-6">{project.description}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary-500 mr-2 font-bold">▸</span>
                      <span className="text-dark-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-3 gap-2 pt-4 border-t-2 border-dark-900">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="border-2 border-dark-900 p-2 text-center">
                      <div className="font-mono text-xs text-dark-600">{key.toUpperCase()}</div>
                      <div className="font-bold text-dark-900 text-sm mt-1">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 border-2 border-dark-900 text-dark-900 font-medium group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
