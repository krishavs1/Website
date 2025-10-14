const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'OCaml', 'Rust', 'MATLAB']
    },
    {
      title: 'Technologies',
      skills: ['AWS', 'TensorFlow', 'PyTorch', 'Node.js', 'React', 'React Native', 'Expo', 'Jupyter']
    },
    {
      title: 'Engineering',
      skills: ['SOLIDWORKS', 'Ansys', 'CNC Machining', 'Laser Cutting', '3D Printing', 'Fusion 360', 'GD&T', 'MasterCAM']
    },
    {
      title: 'Languages (Spoken)',
      skills: ['English (Native)', 'Hindi/Urdu (Bilingual)', 'Spanish (Limited Professional)']
    }
  ];

  const interests = [
    'Penn Club Tennis',
    'DJ@Penn',
    'Music Production',
    'Piano',
    'Clarinet',
    'Guitar',
    'Viola',
    'Outdoor Activities'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary-600 bg-primary-50 px-3 py-1 border-2 border-primary-500">
            04_SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mt-4">
            Technical Skills
          </h2>
        </div>
        
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border-4 border-dark-900 bg-white"
              >
                <div className="border-b-4 border-dark-900 p-4 bg-dark-900">
                  <h3 className="font-mono text-sm text-primary-500">[[ {category.title.toUpperCase()} ]]</h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm border-2 border-dark-900 text-dark-900 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interests Section */}
          <div className="border-4 border-dark-900 bg-primary-50">
            <div className="border-b-4 border-dark-900 p-4 bg-primary-500">
              <h3 className="font-mono text-sm text-white">[[ ACTIVITIES & INTERESTS ]]</h3>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm border-2 border-dark-900 bg-white text-dark-900"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
