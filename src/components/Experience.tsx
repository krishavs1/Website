const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Global Enterprise Procurement',
      location: 'Clark, NJ',
      period: 'May 2025 - August 2025',
      type: 'Internship',
      achievements: [
        'Built a backend change-logging system with C# in ASP.NET Core with MongoDB for entity-level auditing',
        'Built a React/JavaScript audit-log UI with entity filters and time-range search, allowing employees to view each other\'s changes',
        'Decreased duplication mistakes by over 80% through improved change tracking'
      ]
    },
    {
      title: 'AI/ML Engineer',
      company: 'Civic',
      location: 'Philadelphia, PA',
      period: 'April 2025 - Present',
      type: 'Current',
      achievements: [
        'Built a configurable synthetic data generator in Python to simulate realistic constituent emails and Avaya-style voicemail transcripts using GPT-4o API',
        'Trained and deployed a policy-aware email responder, cutting drafting time by over 90%',
        'Designed, tested and refined chatbot systems for constituent-congressman communication using Google Colab and OpenAI API'
      ]
    },
    {
      title: 'Driver Interface & Vehicle Dynamics Engineer',
      company: 'Penn Electric Racing / FSAE EV',
      location: 'Philadelphia, PA',
      period: 'August 2024 - Present',
      type: 'Current',
      achievements: [
        'Designed acceleration and brake pedals in SOLIDWORKS; prioritizing strength and weight reduction',
        'Enhanced FSAE vehicle simulation by implementing articulation angle modeling in the powertrain system',
        'Developed a Python-based suspension load solver to determine maximum forces on components in peak stress conditions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary-600 bg-primary-50 px-3 py-1 border-2 border-primary-500">
            02_EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mt-4">
            Work Experience
          </h2>
        </div>
        
        <div className="max-w-5xl space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-4 border-dark-900 bg-white hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <div className={`border-b-4 border-dark-900 p-4 ${exp.type === 'Current' ? 'bg-primary-500' : 'bg-dark-900'}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-white/90">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className={`font-mono text-xs px-2 py-1 border-2 ${exp.type === 'Current' ? 'border-white text-white' : 'border-primary-500 bg-primary-500 text-dark-900'}`}>
                      {exp.type.toUpperCase()}
                    </span>
                    <p className="font-mono text-xs text-white/80 mt-2">{exp.period}</p>
                    <p className="text-sm text-white/80">{exp.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-3 font-bold text-lg">▸</span>
                      <span className="text-dark-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
