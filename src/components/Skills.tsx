const Skills = () => {
  const skills = [
    // Programming Languages
    { name: 'Python', level: 90, category: 'Languages' },
    { name: 'JavaScript/TypeScript', level: 85, category: 'Languages' },
    { name: 'HTML/CSS', level: 85, category: 'Languages' },
    { name: 'Swift', level: 80, category: 'Languages' },
    { name: 'SQL', level: 80, category: 'Languages' },
    { name: 'Java', level: 75, category: 'Languages' },
    { name: 'C/C++', level: 60, category: 'Languages' },
    { name: 'Rust', level: 40, category: 'Languages' },
    { name: 'OCaml', level: 30, category: 'Languages' },
    
    // Technologies (combined Web/App Dev, ML & Data, Cloud)
    { name: 'React Native', level: 90, category: 'Technologies' },
    { name: 'Expo', level: 90, category: 'Technologies' },
    { name: 'React', level: 85, category: 'Technologies' },
    { name: 'Jupyter', level: 80, category: 'Technologies' },
    { name: 'Pandas/NumPy', level: 75, category: 'Technologies' },
    { name: 'Node.js', level: 75, category: 'Technologies' },
    { name: 'ASP.NET Core', level: 70, category: 'Technologies' },
    { name: 'TensorFlow/PyTorch', level: 70, category: 'Technologies' },
    { name: 'Scikit-learn', level: 65, category: 'Technologies' },
    { name: 'AWS', level: 65, category: 'Technologies' },
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

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Languages': 'bg-primary-500',
      'Technologies': 'bg-green-500',
    };
    return colors[category] || 'bg-dark-900';
  };

  const categories = Array.from(new Set(skills.map(s => s.category)));

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
        
        <div className="max-w-6xl space-y-6 mb-8">
          {categories.map((category) => {
            const categorySkills = skills
              .filter(s => s.category === category)
              .sort((a, b) => b.level - a.level); // Sort by percentage descending
            return (
              <div key={category} className="border-4 border-dark-900 bg-white">
                <div className="border-b-4 border-dark-900 p-4 bg-dark-900">
                  <h3 className="font-mono text-sm text-primary-500">{`[[ ${category.toUpperCase()} ]]`}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {categorySkills.map((skill, i) => (
                    <div key={i}>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-dark-900">{skill.name}</span>
                      </div>
                      <div className="w-full h-6 bg-dark-200 border-2 border-dark-900 relative">
                        <div
                          className={`h-full ${getCategoryColor(category)} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
    </section>
  );
};

export default Skills;
