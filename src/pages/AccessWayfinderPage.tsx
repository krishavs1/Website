import { Link } from 'react-router-dom';

const AccessWayfinderPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-dark-900 hover:bg-dark-900 hover:text-white transition-all"
        >
          <span>←</span> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="bg-primary-500 border-b-4 border-dark-900 p-8">
            <span className="font-mono text-xs text-white bg-dark-900 px-3 py-1 border-2 border-white">
              PROJECT_01
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-2">
              Access Wayfinder
            </h1>
            <p className="font-mono text-sm text-white/90">
              React Native · Expo · JavaScript · Node.js · Firebase · iOS App Analytics
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-b-4 border-dark-900">
            <div className="p-6 border-r-4 border-dark-900 text-center bg-primary-50">
              <div className="text-3xl font-bold text-dark-900">3,000+</div>
              <div className="text-sm text-dark-600 mt-1">Downloads</div>
            </div>
            <div className="p-6 border-r-4 border-dark-900 text-center bg-primary-50">
              <div className="text-3xl font-bold text-primary-600">5.0 ★</div>
              <div className="text-sm text-dark-600 mt-1">Rating</div>
            </div>
            <div className="p-6 text-center bg-primary-50">
              <div className="text-3xl font-bold text-dark-900">9</div>
              <div className="text-sm text-dark-600 mt-1">Cities</div>
            </div>
          </div>

          <div className="p-8 bg-white">
            <h2 className="text-2xl font-bold text-dark-900 mb-4">Overview</h2>
            <p className="text-dark-700 text-lg leading-relaxed">
              Access Wayfinder is an iOS accessibility guide mobile app designed to help users discover 
              wheelchair-accessible businesses and public spaces across 9 New Jersey cities. The app addresses 
              a critical need in the accessibility community by providing real-time information about accessible 
              locations, helping people with mobility challenges navigate their communities with confidence.
            </p>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="border-b-4 border-dark-900 p-6 bg-dark-900">
            <h2 className="font-mono text-sm text-primary-500">[[ TECHNICAL_IMPLEMENTATION ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Frontend Development
                </h3>
                <p className="text-dark-700 ml-6">
                  Built with React Native and Expo to ensure smooth cross-platform performance. 
                  Implemented responsive UI components with React Navigation for intuitive multi-screen 
                  navigation, allowing users to seamlessly browse through different categories and locations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Search & Filtering System
                </h3>
                <p className="text-dark-700 ml-6">
                  Developed real-time search and filtering algorithms covering 7+ business categories including 
                  restaurants, retail stores, parks, medical facilities, and more. The algorithm provides 
                  instant results with location-based sorting and category filtering capabilities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Backend & Database
                </h3>
                <p className="text-dark-700 ml-6">
                  Utilized Firebase for real-time data synchronization and Node.js for backend operations. 
                  The database stores detailed accessibility information including ramp availability, 
                  doorway widths, bathroom facilities, and parking options.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Analytics & Monitoring
                </h3>
                <p className="text-dark-700 ml-6">
                  Integrated iOS App Analytics to track user engagement, popular search queries, and 
                  frequently accessed locations. This data helps improve the app's recommendations and 
                  identify areas needing more accessibility information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact & Recognition */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="border-b-4 border-dark-900 p-6 bg-primary-500">
            <h2 className="font-mono text-sm text-white">[[ IMPACT_&_RECOGNITION ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl font-bold">▸</span>
                <div>
                  <strong className="text-dark-900">3,000+ Downloads</strong>
                  <p className="text-dark-700">Successfully reached over 3,000 users in the New Jersey area, 
                  providing them with crucial accessibility information for their daily activities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl font-bold">▸</span>
                <div>
                  <strong className="text-dark-900">5.0 Star Rating</strong>
                  <p className="text-dark-700">Maintained a perfect 5.0-star average rating on the iOS App Store, 
                  reflecting high user satisfaction and the app's positive impact on the accessibility community.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl font-bold">▸</span>
                <div>
                  <strong className="text-dark-900">Media Coverage</strong>
                  <p className="text-dark-700">Featured on PBS, NJ.com, and the Star-Ledger, bringing attention 
                  to accessibility issues and demonstrating the power of technology in creating inclusive communities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 text-xl font-bold">▸</span>
                <div>
                  <strong className="text-dark-900">Community Impact</strong>
                  <p className="text-dark-700">Empowered individuals with mobility challenges to discover new 
                  locations, plan outings with confidence, and contribute to a growing database of accessibility information.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="border-b-4 border-dark-900 p-6 bg-dark-900">
            <h2 className="font-mono text-sm text-primary-500">[[ TECH_STACK ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['React Native', 'Expo', 'JavaScript', 'Node.js', 'Firebase', 'React Navigation', 
                'iOS App Analytics', 'Real-time Database'].map((tech) => (
                <div key={tech} className="border-2 border-dark-900 p-3 text-center hover:bg-primary-50 transition-colors">
                  <span className="text-sm font-medium text-dark-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Links & Resources */}
        <div className="border-4 border-dark-900 bg-primary-50">
          <div className="border-b-4 border-dark-900 p-6 bg-primary-500">
            <h2 className="font-mono text-sm text-white">[[ EXPLORE_MORE ]]</h2>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/access-wayfinder/id6471836191"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-dark-900 bg-white p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📱</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary-600 mb-1">[ DOWNLOAD ]</div>
                    <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                      iOS App Store
                    </h3>
                    <p className="text-sm text-dark-600">Download the app • 5.0 ★ Rating • 12 Reviews</p>
                  </div>
                  <div className="text-dark-900 group-hover:text-primary-500 transition-colors">→</div>
                </div>
              </a>

              {/* Website */}
              <a
                href="https://accesswayfinder.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-dark-900 bg-white p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">🌐</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary-600 mb-1">[ VISIT ]</div>
                    <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                      Official Website
                    </h3>
                    <p className="text-sm text-dark-600">Map & business directory • Mission Inclusion NJ</p>
                  </div>
                  <div className="text-dark-900 group-hover:text-primary-500 transition-colors">→</div>
                </div>
              </a>

              {/* PBS Interview */}
              <a
                href="https://www.pbs.org/video/app-for-accessibility-1708715718/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-dark-900 bg-white p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📺</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary-600 mb-1">[ WATCH ]</div>
                    <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                      PBS TV Feature
                    </h3>
                    <p className="text-sm text-dark-600">NJ Spotlight News • 4m 26s video interview</p>
                  </div>
                  <div className="text-dark-900 group-hover:text-primary-500 transition-colors">→</div>
                </div>
              </a>

              {/* NJ.com Article */}
              <a
                href="https://www.nj.com/opinion/2024/02/how-accessible-are-nj-businesses-these-teens-made-an-app-that-tells-you-calavia-robertson.html"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-dark-900 bg-white p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📰</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary-600 mb-1">[ READ ]</div>
                    <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                      NJ.com Article
                    </h3>
                    <p className="text-sm text-dark-600">Featured in Star-Ledger • Opinion piece</p>
                  </div>
                  <div className="text-dark-900 group-hover:text-primary-500 transition-colors">→</div>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/accesswayfinder"
                target="_blank"
                rel="noopener noreferrer"
                className="border-4 border-dark-900 bg-white p-6 hover:translate-x-1 hover:-translate-y-1 transition-transform group md:col-span-2"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">📸</div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary-600 mb-1">[ FOLLOW ]</div>
                    <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                      @accesswayfinder
                    </h3>
                    <p className="text-sm text-dark-600">Follow on Instagram for updates & community stories</p>
                  </div>
                  <div className="text-dark-900 group-hover:text-primary-500 transition-colors">→</div>
                </div>
              </a>
            </div>

            {/* Additional Context */}
            <div className="mt-6 border-4 border-dark-900 bg-dark-900 p-6">
              <p className="font-mono text-xs text-primary-500 mb-2">[ MEDIA_COVERAGE ]</p>
              <p className="text-white text-sm leading-relaxed">
                Access Wayfinder has been featured across multiple media outlets including PBS, NJ.com, 
                and the Star-Ledger, highlighting its impact on accessibility awareness in New Jersey communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessWayfinderPage;

