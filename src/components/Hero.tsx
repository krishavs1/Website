const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="font-mono text-sm text-primary-600 bg-primary-50 px-3 py-1 border-2 border-primary-500">
                Software Engineer & Student
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark-900 leading-tight">
              Krishav
              <br />
              <span className="text-primary-500">Singla</span>
            </h1>
            
            <div className="space-y-2 font-mono text-sm text-dark-600">
              <p>→ CS & Finance @ UPenn</p>
              <p>→ Jerome Fisher M&T Program</p>
              <p>→ GPA: 3.94/4.00</p>
            </div>

            <p className="text-lg text-dark-700 max-w-xl border-l-4 border-primary-500 pl-4">
              Building software that matters. Interested in AI/ML, full-stack development, 
              and the intersection of technology and business.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="mailto:krishavs@wharton.upenn.edu"
                className="px-6 py-3 bg-dark-900 text-white font-medium border-2 border-dark-900 hover:bg-white hover:text-dark-900 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/krishavs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-dark-900 font-medium border-2 border-dark-900 hover:bg-dark-900 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/krishavs1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-dark-900 font-medium border-2 border-dark-900 hover:bg-dark-900 hover:text-white transition-all"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-4 animate-slide-in-right">
            <div className="border-4 border-dark-900 p-8 bg-primary-50">
              <div className="space-y-6">
                <div className="border-b-2 border-dark-900 pb-4">
                  <div className="font-mono text-sm text-dark-600 mb-1">[ CURRENT_GPA ]</div>
                  <div className="text-5xl font-bold text-dark-900">3.94</div>
                  <div className="text-dark-600 mt-1">out of 4.00</div>
                </div>
                
                <div className="border-b-2 border-dark-900 pb-4">
                  <div className="font-mono text-sm text-dark-600 mb-1">[ APP_DOWNLOADS ]</div>
                  <div className="text-5xl font-bold text-primary-600">3,000+</div>
                  <div className="text-dark-600 mt-1">Access Wayfinder</div>
                </div>
                
                <div>
                  <div className="font-mono text-sm text-dark-600 mb-1">[ GRADUATION ]</div>
                  <div className="text-5xl font-bold text-dark-900">2028</div>
                  <div className="text-dark-600 mt-1">Expected May</div>
                </div>
              </div>
            </div>
            
            <div className="border-4 border-dark-900 p-6 bg-white">
              <div className="font-mono text-sm text-dark-600 mb-2">[ CONTACT_INFO ]</div>
              <div className="space-y-1 text-sm text-dark-700">
                <p>📧 krishavs@wharton.upenn.edu</p>
                <p>📍 Philadelphia, PA</p>
                <p>🏠 Westfield, NJ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
