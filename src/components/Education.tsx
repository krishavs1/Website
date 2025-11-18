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
                    Jerome Fisher Program in Management & Technology
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="border-2 border-dark-900 p-4 bg-primary-50">
                <div className="font-mono text-xs text-primary-600 mb-1">[ GPA ]</div>
                <p className="text-3xl font-bold text-dark-900">3.94 / 4.00</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-dark-900 p-4">
                  <div className="font-mono text-xs text-primary-600 mb-2">[ DEGREE_01 ]</div>
                  <p className="font-semibold text-dark-900 mb-3">B.S.E. in Computer Science</p>
                  <p className="text-sm text-dark-600 mb-3">School of Engineering and Applied Science</p>
                  <div className="font-mono text-xs text-dark-600 mb-2">[ RELEVANT_COURSEWORK ]</div>
                  <div className="space-y-1">
                    <p className="text-xs text-dark-700">• Data Structures and Algorithms</p>
                    <p className="text-xs text-dark-700">• Mathematical Foundations of Computer Science</p>
                    <p className="text-xs text-dark-700">• iOS Programming</p>
                    <p className="text-xs text-dark-700">• Programming Languages and Techniques I</p>
                    <p className="text-xs text-dark-700">• Automata, Computation & Complexity</p>
                    <p className="text-xs text-dark-700">• Big Data Analytics</p>
                  </div>
                </div>
                <div className="border-2 border-dark-900 p-4">
                  <div className="font-mono text-xs text-primary-600 mb-2">[ DEGREE_02 ]</div>
                  <p className="font-semibold text-dark-900 mb-3">B.S. in Economics with a Concentration in Finance</p>
                  <p className="text-sm text-dark-600 mb-3">The Wharton School</p>
                  <div className="font-mono text-xs text-dark-600 mb-2">[ RELEVANT_COURSEWORK ]</div>
                  <div className="space-y-1">
                    <p className="text-xs text-dark-700">• Corporate Finance</p>
                    <p className="text-xs text-dark-700">• Accounting and Financial Reporting</p>
                    <p className="text-xs text-dark-700">• Managerial Economics</p>
                    <p className="text-xs text-dark-700">• Introduction to Marketing</p>
                    <p className="text-xs text-dark-700">• Introduction to Management</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dark-900 p-4 bg-white">
                <div className="font-mono text-xs text-primary-600 mb-2">[ ACTIVITIES ]</div>
                <div className="space-y-1">
                  <p className="text-xs text-dark-700">• Penn Electric Racing (Vehicle Dynamics Engineer)</p>
                  <p className="text-xs text-dark-700">• M&T Innovation Fund (Co-leader/Analyst)</p>
                  <p className="text-xs text-dark-700">• Wharton Undergraduate Healthcare Club (Director of Entrepreneurship Incubator)</p>
                  <p className="text-xs text-dark-700">• Penn Adaptive Technologies and Prosthetic Technologies (Bionic Arm)</p>
                  <p className="text-xs text-dark-700">• Wharton Undergraduate Finance Club (Quantitative Finance Committee)</p>
                  <p className="text-xs text-dark-700">• Wharton Undergraduate Entrepreneurship Club (Pitch Committee)</p>
                  <p className="text-xs text-dark-700">• Alpha Kappa Psi Professional Business Fraternity</p>
                  <p className="text-xs text-dark-700">• Penn Club Tennis</p>
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
