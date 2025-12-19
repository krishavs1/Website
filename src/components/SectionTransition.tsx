import { useEffect, useRef, useState } from 'react';

interface SectionTransitionProps {
  variant?: 'wave' | 'diagonal' | 'zigzag' | 'dots' | 'geometric';
  color?: string;
}

const SectionTransition = ({ variant = 'wave', color = 'bg-primary-500' }: SectionTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const renderTransition = () => {
    switch (variant) {
      case 'wave':
        return (
          <div 
            ref={ref}
            className={`${color} h-32 md:h-40 relative overflow-hidden -mt-16 md:-mt-20 z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path
                d="M0,100 Q300,20 600,100 T1200,100 L1200,200 L0,200 Z"
                fill="currentColor"
                className="text-white"
              />
              <path
                d="M0,100 Q300,180 600,100 T1200,100 L1200,0 L0,0 Z"
                fill="currentColor"
                className="text-white opacity-90"
              />
              <path
                d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-white opacity-60"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
          </div>
        );
      case 'diagonal':
        return (
          <div 
            ref={ref}
            className={`${color} h-32 md:h-40 relative overflow-hidden -mt-16 md:-mt-20 z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
          >
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <polygon points="0,0 1200,200 1200,0" fill="currentColor" className="text-white" />
              <polygon points="0,200 1200,0 0,0" fill="currentColor" className="text-white opacity-80" />
              <line x1="0" y1="200" x2="1200" y2="0" stroke="currentColor" strokeWidth="3" className="text-white opacity-50" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          </div>
        );
      case 'zigzag':
        return (
          <div 
            ref={ref}
            className={`${color} h-32 md:h-40 relative -mt-16 md:-mt-20 z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <polygon points="0,0 300,100 600,0 900,100 1200,0 1200,200 0,200" fill="currentColor" className="text-white" />
              <polyline points="0,100 300,0 600,100 900,0 1200,100" stroke="currentColor" strokeWidth="4" fill="none" className="text-white opacity-60" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      case 'dots':
        return (
          <div 
            ref={ref}
            className={`${color} h-32 md:h-40 relative overflow-hidden -mt-16 md:-mt-20 z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path
                d="M0,100 Q300,20 600,100 T1200,100 L1200,200 L0,200 Z"
                fill="currentColor"
                className="text-white"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-4 flex-wrap justify-center max-w-4xl">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-white rounded-full opacity-60 animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          </div>
        );
      case 'geometric':
        return (
          <div 
            ref={ref}
            className={`${color} h-32 md:h-40 relative overflow-hidden -mt-16 md:-mt-20 z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-2'
            }`}
          >
            <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
              <path
                d="M0,0 L400,0 L600,100 L800,0 L1200,0 L1200,200 L0,200 Z"
                fill="currentColor"
                className="text-white"
              />
              <path
                d="M0,200 L400,200 L600,100 L800,200 L1200,200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                className="text-white opacity-50"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative opacity-40">
                <div className="absolute top-6 left-1/4 w-16 h-16 border-[3px] border-white transform rotate-45 animate-pulse-slow"></div>
                <div className="absolute top-6 right-1/4 w-12 h-12 border-[3px] border-white transform rotate-45 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-1/2 w-10 h-10 border-[3px] border-white transform rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-8 h-8 border-2 border-white transform rotate-45 animate-pulse-slow" style={{ animationDelay: '0.25s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-white transform rotate-45 animate-pulse-slow" style={{ animationDelay: '0.75s' }}></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="w-full relative">{renderTransition()}</div>;
};

// Scroll-triggered animation wrapper with varied directions
export const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'left' // 'left', 'right', 'up', 'down', 'center', 'scale'
}: { 
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'center' | 'scale';
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getInitialTransform = () => {
    switch (direction) {
      case 'left':
        return 'translate-x-[-100px]';
      case 'right':
        return 'translate-x-[100px]';
      case 'up':
        return 'translate-y-[-50px]';
      case 'down':
        return 'translate-y-[50px]';
      case 'center':
        return 'translate-x-[-50px] translate-y-[30px]';
      case 'scale':
        return 'scale-95';
      default:
        return 'translate-x-[-100px]';
    }
  };

  const getFinalTransform = () => {
    switch (direction) {
      case 'scale':
        return 'scale-100';
      default:
        return 'translate-x-0 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? `opacity-100 ${getFinalTransform()}`
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default SectionTransition;

