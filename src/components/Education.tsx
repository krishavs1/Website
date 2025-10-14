const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="font-mono text-sm text-primary-600 bg-primary-50 px-3 py-1 border-2 border-primary-500">
            01_EDUCATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mt-4">
            Education
          </h2>
        </div>
        
        <div className="max-w-5xl">
          <div className="border-4 border-dark-900 bg-white">
            <div className="border-b-4 border-dark-900 p-6 bg-primary-500">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    University of Pennsylvania
                  </h3>
                  <p className="text-lg font-semibold text-white/90">
                    Jerome Fisher Management & Technology Program
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dark-900 p-4">
                  <div className="font-mono text-xs text-primary-600 mb-1">[ DEGREE_01 ]</div>
                  <p className="font-semibold text-dark-900">BS in Finance</p>
                  <p className="text-sm text-dark-600">Wharton School</p>
                </div>
                <div className="border-2 border-dark-900 p-4">
                  <div className="font-mono text-xs text-primary-600 mb-1">[ DEGREE_02 ]</div>
                  <p className="font-semibold text-dark-900">BS in Computer Science</p>
                  <p className="text-sm text-dark-600">School of Engineering</p>
                </div>
              </div>

              <div className="border-2 border-dark-900 p-4 bg-primary-50">
                <div className="font-mono text-xs text-primary-600 mb-1">[ GPA ]</div>
                <p className="text-3xl font-bold text-dark-900">3.94 / 4.00</p>
              </div>
              
              <div className="pt-2">
                <div className="font-mono text-xs text-dark-600 mb-3">[ RELEVANT_COURSEWORK ]</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    'Data Structures and Algorithms',
                    'Object-Oriented Programming',
                    'Social Systems and the Internet',
                    'iOS Programming',
                    'Probability',
                    'Discrete Math for CS'
                  ].map((course, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-primary-500 mr-2 font-bold">▸</span>
                      <span className="text-sm text-dark-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
