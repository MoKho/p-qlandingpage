
import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

// --- SVG Icon Components ---

const UploadCloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 12v9" /><path d="m16 16-4-4-4 4" />
  </svg>
);

const ClipboardPasteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="M8 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4" /><path d="M12 12v6" /><path d="m15 15-3-3-3 3" />
    </svg>
);

const GaugeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4" /><path d="M3.34 19a10 10 S0 1 1 17.32 0" />
    </svg>
);

const FileCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="m9 15 2 2 4-4" />
    </svg>
);

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" />
        <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" />
        <circle cx="15" cy="9" r="1" />
    </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const MessageCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);


// --- UI Components ---

const Header: React.FC = () => (
  <header className="bg-[#0d1a2e]/80 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center gap-3">
                <img
                    src="https://mokho.github.io/p-qlandingpage/static/P-Q%20Logo.png"
                    alt="P-Q Logo"
                    className="h-20 w-auto"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/static/P-Q Logo.svg'; }}
                />
            </a>
      <nav className="space-x-8 hidden md:flex items-center">
        <a href="/#how-it-works" className="text-slate-300 hover:text-teal-400 transition-colors">How It Works</a>
        <a href="/#why-use-us" className="text-slate-300 hover:text-teal-400 transition-colors">Why P-Q?</a>
        <a href="/#pricing" className="text-slate-300 hover:text-teal-400 transition-colors">Pricing</a>
        <a href="mailto:mo@p-q.app" className="text-slate-300 hover:text-teal-400 transition-colors">Contact</a>
      </nav>
      <a href="https://resume.p-q.app" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-md transition-transform duration-300 hover:scale-105">
        Get Started
      </a>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Land your dream job with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">resume tailored</span> for every opportunity.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
        P-Q helps you instantly customize your resume for any job posting, ensuring your skills stand out to recruiters and hiring managers.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <a href="https://resume.p-q.app" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
          Tailor My Resume Now
        </a>
      </div>
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="relative rounded-xl shadow-2xl shadow-teal-900/20 bg-[#1e293b] p-2 ring-1 ring-white/10">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/oBADVudHFs0?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=oBADVudHFs0&playsinline=1"
                    title="P-Q App Walkthrough"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <UploadCloudIcon className="w-10 h-10 text-teal-400" />,
            title: "Upload Your Resume",
            description: "Start by uploading your existing resume in PDF or DOCX format."
        },
        {
            icon: <ClipboardPasteIcon className="w-10 h-10 text-teal-400" />,
            title: "Paste a Job Description",
            description: "Provide the job posting you’re interested in so our AI can get to work."
        },
        {
            icon: <GaugeIcon className="w-10 h-10 text-teal-400" />,
            title: "Get Instant Feedback",
            description: "The app analyzes your resume, scores your fit, and highlights improvements."
        },
        {
            icon: <FileCheckIcon className="w-10 h-10 text-teal-400" />,
            title: "Apply with Confidence",
            description: "Download your tailored resume and apply, knowing you're putting your best foot forward."
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">A simple, four-step process to a perfectly tailored resume.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[#1e293b] p-8 rounded-xl border border-slate-700 text-center flex flex-col items-center transition-all duration-300 hover:border-teal-500 hover:scale-105">
                            <div className="bg-slate-800 p-4 rounded-full mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Features: React.FC = () => {
    const features = [
        { title: "Stand Out From The Crowd", description: "Make your resume hyper-relevant for every single job you apply to. No more generic applications." },
        { title: "Save Precious Time", description: "No more manual editing or guesswork. Get instant, expert-level suggestions in seconds." },
        { title: "Boost Your Interview Chances", description: "Increase your odds of getting interviews by showing employers exactly what they want to see." },
        { title: "Easy & Secure To Use", description: "The platform is simple to use, with your data kept private and safe at all times." },
    ];

    return (
        <section id="why-use-us" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Why Use P-Q?</h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Gain a competitive edge in your job search.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="w-6 h-6 text-teal-500 mt-1" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                                <p className="mt-1 text-slate-400">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Pricing: React.FC = () => (
    <section id="pricing" className="py-20 bg-[#0f172a]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Join Our Silent Launch</h2>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">Help us build the future of resume tailoring. Your feedback is invaluable.</p>
            </div>
            <div className="flex justify-center">
                <div className="bg-[#1e293b] rounded-xl border border-teal-500 shadow-lg shadow-teal-900/30 p-8 w-full max-w-3xl">
                    <h3 className="text-2xl font-semibold text-center text-white">P-Q is 100% Free During This Phase</h3>
                    <p className="mt-4 text-slate-400 text-center max-w-2xl mx-auto">
                        We're currently in a silent launch phase, which means you get full access to all features for free. In return, we'd love for you to try P-Q and share your experience with us.
                    </p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <div className="bg-slate-800 p-4 rounded-full mb-4">
                               <RocketIcon className="w-8 h-8 text-teal-400" />
                            </div>
                            <h4 className="font-semibold text-white text-lg">Try P-Q Out</h4>
                            <p className="text-sm text-slate-400 mt-1">Use it for your next job application and see the results.</p>
                        </div>
                        <div className="flex flex-col items-center">
                             <div className="bg-slate-800 p-4 rounded-full mb-4">
                                <UsersIcon className="w-8 h-8 text-teal-400" />
                             </div>
                            <h4 className="font-semibold text-white text-lg">Share with Friends</h4>
                            <p className="text-sm text-slate-400 mt-1">Know someone job hunting? Spread the word and help them out.</p>
                        </div>
                        <div className="flex flex-col items-center">
                             <div className="bg-slate-800 p-4 rounded-full mb-4">
                                <MessageCircleIcon className="w-8 h-8 text-teal-400" />
                            </div>
                            <h4 className="font-semibold text-white text-lg">Give Feedback</h4>
                            <p className="text-sm text-slate-400 mt-1">Have ideas? Encounter a bug? <a href="mailto:mo@p-q.app" className="text-teal-400 hover:underline">Let us know</a>.</p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <a href="https://resume.p-q.app" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 inline-block hover:scale-105">
                            Get Started - It's Free!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const FinalCTA: React.FC = () => (
    <section className="py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">Upload your resume and tailor it for your next big opportunity. It only takes a few seconds.</p>
            <div className="mt-8">
                <a href="https://resume.p-q.app" target="_blank" rel="noopener noreferrer" className="bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 px-10 rounded-lg text-xl transition-transform duration-300 inline-block hover:scale-105">
                    Tailor Your Resume Now
                </a>
            </div>
        </div>
    </section>
);


const Footer: React.FC = () => (
    <footer className="bg-[#0f172a] border-t border-slate-800">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div>
                                        <a href="/" className="flex items-center gap-3">
                                                <img
                                                    src="https://mokho.github.io/p-qlandingpage/static/P-Q%20Logo.png"
                                                    alt="P-Q Logo"
                                                    className="h-20 w-auto"
                                                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/static/P-Q Logo.svg'; }}
                                                />
                                                <span className="text-xl font-bold text-white">.app</span>
                                        </a>
                    <p className="text-slate-500 mt-2">© {new Date().getFullYear()} P-Q. All rights reserved.</p>
                </div>
                <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="flex space-x-6">
                        <a href="/privacy-policy" className="text-slate-400 hover:text-teal-400 hover:underline">Privacy Policy</a>
                        <a href="/terms" className="text-slate-400 hover:text-teal-400 hover:underline">Terms of Service</a>
                    </div>
                    <p className="text-slate-400">Questions? <a href="mailto:mo@p-q.app" className="text-teal-400 hover:underline">mo@p-q.app</a></p>
                </div>
            </div>
        </div>
    </footer>
);

// --- Page Components ---

const LandingPage: React.FC = () => (
    <>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FinalCTA />
    </>
);

function App() {
  const path = window.location.pathname;

  let pageContent;
  if (path === '/privacy-policy') {
    pageContent = <PrivacyPolicy />;
  } else if (path === '/terms') {
    pageContent = <TermsOfService />;
  } else {
    pageContent = <LandingPage />;
  }

  return (
    <div className="bg-[#0d1a2e] text-slate-300 font-sans antialiased">
      <Header />
      <main>
        {pageContent}
      </main>
      <Footer />
    </div>
  );
}

export default App;
