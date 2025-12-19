import { Link } from 'react-router-dom';

const DixieAIPage = () => {
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
          <div className="bg-dark-900 border-b-4 border-dark-900 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              DixieAI
            </h1>
            <p className="font-mono text-sm text-white/90">
              React Native · TypeScript · Express.js · Google Cloud/OAuth · PostgreSQL · OpenAI
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 border-b-4 border-dark-900">
            <div className="p-6 border-r-4 border-dark-900 text-center bg-primary-50">
              <div className="text-2xl font-bold text-dark-900">AI/ML</div>
              <div className="text-sm text-dark-600 mt-1">Category</div>
            </div>
            <div className="p-6 border-r-4 border-dark-900 text-center bg-primary-50">
              <div className="text-2xl font-bold text-primary-600">GPT-4o</div>
              <div className="text-sm text-dark-600 mt-1">Powered By</div>
            </div>
            <div className="p-6 text-center bg-primary-50">
              <div className="text-2xl font-bold text-dark-900">Active</div>
              <div className="text-sm text-dark-600 mt-1">Development</div>
            </div>
          </div>

          <div className="p-8 bg-white">
            <h2 className="text-2xl font-bold text-dark-900 mb-4">Overview</h2>
            <p className="text-dark-700 text-lg leading-relaxed">
              DixieAI is a revolutionary full-stack React Native mobile application that transforms email 
              management through voice interaction. The app allows users to read, summarize, and reply to 
              emails using only their voice, making email communication more accessible and efficient. By 
              leveraging advanced AI and natural language processing, DixieAI streamlines inbox management 
              for busy professionals and individuals with accessibility needs.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="border-b-4 border-dark-900 p-6 bg-dark-900">
            <h2 className="font-mono text-sm text-primary-500">[[ TECHNICAL_ARCHITECTURE ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Backend Infrastructure
                </h3>
                <p className="text-dark-700 ml-6">
                  Architected a scalable backend using Express.js and Google API client libraries. The system 
                  implements sophisticated email processing pipelines with HTML sanitization, thread management, 
                  and intelligent categorization. PostgreSQL database ensures reliable data persistence with 
                  optimized queries for real-time email retrieval.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  AI-Powered Summarization
                </h3>
                <p className="text-dark-700 ml-6">
                  Integrated OpenAI's GPT-4o-mini model to generate accurate, context-aware email summaries. 
                  The AI analyzes email content, extracts key points, identifies action items, and presents 
                  information in a concise, voice-friendly format.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Voice Recognition System
                </h3>
                <p className="text-dark-700 ml-6">
                  Implements advanced voice recognition with real-time speech-to-text conversion. The system 
                  understands natural language commands like "read my latest email", "reply to John", or 
                  "summarize unread messages". Text-to-speech capabilities provide audio feedback, creating 
                  a fully hands-free email experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Intelligent Reply Generation
                </h3>
                <p className="text-dark-700 ml-6">
                  Features AI-powered email reply generation that understands context, tone, and intent. 
                  Users can dictate their response naturally, and the AI formats it into professional email 
                  text with proper grammar, structure, and etiquette. Includes multiple reply suggestions 
                  and personalization based on communication history.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dark-900 mb-3 flex items-center">
                  <span className="text-primary-500 mr-2">▸</span>
                  Security & Authentication
                </h3>
                <p className="text-dark-700 ml-6">
                  Implements OAuth 2.0 authentication with Google Cloud for secure email access. All 
                  communications are encrypted end-to-end, with token refresh mechanisms and fallback 
                  systems ensuring continuous availability. User privacy is paramount with no permanent 
                  storage of email content beyond session data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="border-4 border-dark-900 mb-8">
          <div className="border-b-4 border-dark-900 p-6 bg-primary-500">
            <h2 className="font-mono text-sm text-white">[[ KEY_FEATURES ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">🎤 Voice Commands</h4>
                <p className="text-sm text-dark-700">Complete hands-free email management through natural voice commands</p>
              </div>
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">📧 Smart Summaries</h4>
                <p className="text-sm text-dark-700">AI-generated summaries highlighting key points and action items</p>
              </div>
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">✍️ Reply Generation</h4>
                <p className="text-sm text-dark-700">Context-aware email replies generated from voice input</p>
              </div>
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">🔒 Secure Access</h4>
                <p className="text-sm text-dark-700">OAuth 2.0 with Google Cloud for enterprise-grade security</p>
              </div>
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">📱 Mobile First</h4>
                <p className="text-sm text-dark-700">Native mobile experience with offline capabilities</p>
              </div>
              <div className="border-2 border-dark-900 p-4">
                <h4 className="font-bold text-dark-900 mb-2">🧠 Learning System</h4>
                <p className="text-sm text-dark-700">Adapts to your communication style over time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-4 border-dark-900">
          <div className="border-b-4 border-dark-900 p-6 bg-dark-900">
            <h2 className="font-mono text-sm text-primary-500">[[ TECH_STACK ]]</h2>
          </div>
          <div className="p-8 bg-white">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['React Native', 'TypeScript', 'Express.js', 'Node.js', 'PostgreSQL', 'Google Cloud',
                'OAuth 2.0', 'OpenAI GPT-4o', 'React Navigation', 'Voice Recognition', 'Text-to-Speech', 
                'HTML Parser'].map((tech) => (
                <div key={tech} className="border-2 border-dark-900 p-3 text-center hover:bg-primary-50 transition-colors">
                  <span className="text-sm font-medium text-dark-900">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DixieAIPage;

