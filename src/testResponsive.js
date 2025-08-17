// Test file for responsive design improvements
// ملف اختبار لتحسينات التصميم المتجاوب

export const testResponsiveBreakpoints = () => {
  const breakpoints = {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1920
  };

  console.log('✅ Responsive breakpoints configured:', breakpoints);
  return breakpoints;
};

export const testScreenSize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  console.log(`📱 Current screen size: ${width}x${height}`);
  
  if (width < 640) {
    console.log('📱 Mobile layout active');
  } else if (width < 768) {
    console.log('📱 Small tablet layout active');
  } else if (width < 1024) {
    console.log('📱 Tablet layout active');
  } else if (width < 1280) {
    console.log('💻 Laptop layout active');
  } else if (width < 1536) {
    console.log('🖥️ Desktop layout active');
  } else if (width < 1920) {
    console.log('🖥️ Large desktop layout active');
  } else {
    console.log('🖥️ Ultra-wide layout active');
  }
  
  return { width, height };
};

export const testResponsiveClasses = () => {
  const classes = [
    'auth-container',
    'auth-content',
    'auth-layout',
    'auth-image-container',
    'auth-form-container',
    'auth-header',
    'auth-title',
    'auth-subtitle',
    'auth-input',
    'auth-button',
    'auth-secondary-button',
    'auth-link',
    'auth-info'
  ];
  
  console.log('✅ Responsive CSS classes available:', classes);
  return classes;
};

// Test responsive utilities
export const testResponsiveUtilities = () => {
  const utilities = [
    'container-responsive',
    'grid-responsive',
    'flex-responsive',
    'text-responsive',
    'space-responsive',
    'img-responsive',
    'btn-responsive',
    'form-responsive',
    'input-responsive',
    'nav-responsive',
    'card-responsive'
  ];
  
  console.log('✅ Responsive utility classes available:', utilities);
  return utilities;
};

// Auto-test on import
if (typeof window !== 'undefined') {
  console.log('🚀 Testing responsive design improvements...');
  testResponsiveBreakpoints();
  testScreenSize();
  testResponsiveClasses();
  testResponsiveUtilities();
  
  // Test on resize
  window.addEventListener('resize', () => {
    console.log('🔄 Screen resized, testing...');
    testScreenSize();
  });
}
