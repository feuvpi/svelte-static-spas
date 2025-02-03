// src/lib/theme.ts
import { writable } from 'svelte/store';

// Theme type definition
export type Theme = 'dark' | 'light';

// Theme configurations
export const themes = {
  light: {
    // Background Colors
    bgPrimary: '#f8fafc',
    bgSecondary: '#f1f5f9',
    bgAccent: '#e2e8f0',
    bgCard: 'rgba(255, 255, 255, 0.02)',
    bgCardHover: 'rgba(255, 255, 255, 0.04)',
    bgBlackOpacity: 'rgba(0, 0, 0, 0.4)',
    
    // Text Colors
    textPrimary: 'rgba(0, 0, 0, 0.9)',
    textSecondary: 'rgba(0, 0, 0, 0.7)',
    textAccent: 'rgba(0, 0, 0, 0.5)',
    
    // Border Colors
    borderPrimary: 'rgba(0, 0, 0, 0.05)',
    borderSecondary: 'rgba(0, 0, 0, 0.02)',
    
    // Gradient Colors - Blue to Cyan
    gradientFromBlue: 'rgba(59, 130, 246, 0.9)',  // blue-400/90
    gradientToBlue: 'rgba(34, 211, 238, 0.9)',    // cyan-400/90
    
    // Gradient Colors - Cyan to Green
    gradientFromCyan: 'rgba(34, 211, 238, 0.9)',  // cyan-400/90
    gradientToGreen: 'rgba(74, 222, 128, 0.9)',   // green-400/90
    
    // Gradient Colors - Purple to Blue
    gradientFromPurple: 'rgba(168, 85, 247, 0.9)', // purple-400/90
    gradientToBlue2: 'rgba(59, 130, 246, 0.9)',    // blue-400/90
    
    // Background Gradients
    bgGradientFromBlue: 'rgba(59, 130, 246, 0.05)',  // blue-500/5
    bgGradientToBlue: 'rgba(34, 211, 238, 0.05)',    // cyan-500/5
    bgGradientFromCyan: 'rgba(34, 211, 238, 0.05)',  // cyan-500/5
    bgGradientToGreen: 'rgba(74, 222, 128, 0.05)',   // green-500/5
    
    // Special Effects
    blur: 'rgba(255, 255, 255, 0.1)',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  },
  dark: {
    // Background Colors
    bgPrimary: '#0A0A0B',                     // Original dark background
    bgSecondary: '#18181b',
    bgAccent: '#27272a',
    bgCard: 'rgba(255, 255, 255, 0.02)',      // white/[0.02]
    bgCardHover: 'rgba(255, 255, 255, 0.04)', // white/[0.04]
    bgBlackOpacity: 'rgba(0, 0, 0, 0.4)',     // black/40
    
    // Text Colors
    textPrimary: 'rgba(255, 255, 255, 0.9)',  // white/90
    textSecondary: 'rgba(255, 255, 255, 0.7)', // white/70
    textAccent: 'rgba(255, 255, 255, 0.6)',    // white/60
    
    // Border Colors
    borderPrimary: 'rgba(255, 255, 255, 0.05)', // white/[0.05]
    borderSecondary: 'rgba(255, 255, 255, 0.02)', // white/[0.02]
    
    // Gradient Colors - Blue to Cyan
    gradientFromBlue: 'rgba(59, 130, 246, 0.9)',  // blue-400/90
    gradientToBlue: 'rgba(34, 211, 238, 0.9)',    // cyan-400/90
    
    // Gradient Colors - Cyan to Green
    gradientFromCyan: 'rgba(34, 211, 238, 0.9)',  // cyan-400/90
    gradientToGreen: 'rgba(74, 222, 128, 0.9)',   // green-400/90
    
    // Gradient Colors - Purple to Blue
    gradientFromPurple: 'rgba(168, 85, 247, 0.9)', // purple-400/90
    gradientToBlue2: 'rgba(59, 130, 246, 0.9)',    // blue-400/90
    
    // Background Gradients
    bgGradientFromBlue: 'rgba(59, 130, 246, 0.05)',  // blue-500/5
    bgGradientToBlue: 'rgba(34, 211, 238, 0.05)',    // cyan-500/5
    bgGradientFromCyan: 'rgba(34, 211, 238, 0.05)',  // cyan-500/5
    bgGradientToGreen: 'rgba(74, 222, 128, 0.05)',   // green-500/5
    
    // Special Effects
    blur: 'rgba(0, 0, 0, 0.1)',
    shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
  }
} as const;

// CSS Variables utility
export const generateThemeCSS = (theme: Theme): string => {
  const themeConfig = themes[theme];
  return `
    :root[data-theme="${theme}"] {
      --bg-primary: ${themeConfig.bgPrimary};
      --bg-secondary: ${themeConfig.bgSecondary};
      --bg-accent: ${themeConfig.bgAccent};
      --bg-card: ${themeConfig.bgCard};
      --bg-card-hover: ${themeConfig.bgCardHover};
      --bg-black-opacity: ${themeConfig.bgBlackOpacity};
      
      --text-primary: ${themeConfig.textPrimary};
      --text-secondary: ${themeConfig.textSecondary};
      --text-accent: ${themeConfig.textAccent};
      
      --border-primary: ${themeConfig.borderPrimary};
      --border-secondary: ${themeConfig.borderSecondary};
      
      /* Blue to Cyan Gradient */
      --gradient-from-blue: ${themeConfig.gradientFromBlue};
      --gradient-to-blue: ${themeConfig.gradientToBlue};
      
      /* Cyan to Green Gradient */
      --gradient-from-cyan: ${themeConfig.gradientFromCyan};
      --gradient-to-green: ${themeConfig.gradientToGreen};
      
      /* Purple to Blue Gradient */
      --gradient-from-purple: ${themeConfig.gradientFromPurple};
      --gradient-to-blue-2: ${themeConfig.gradientToBlue2};
      
      /* Background Gradients */
      --bg-gradient-from-blue: ${themeConfig.bgGradientFromBlue};
      --bg-gradient-to-blue: ${themeConfig.bgGradientToBlue};
      --bg-gradient-from-cyan: ${themeConfig.bgGradientFromCyan};
      --bg-gradient-to-green: ${themeConfig.bgGradientToGreen};
      
      --blur: ${themeConfig.blur};
      --shadow: ${themeConfig.shadow};
    }
  `;
};

// Theme store
const createThemeStore = () => {
  const defaultTheme: Theme = 'dark';
  
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return defaultTheme;
    return (window.localStorage.getItem('theme') as Theme) || defaultTheme;
  };

  const { subscribe, set } = writable<Theme>(getInitialTheme());

  // Create and inject style element for theme CSS
  const injectThemeCSS = () => {
    if (typeof window === 'undefined') return;

    let styleEl = document.getElementById('theme-css');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'theme-css';
      document.head.appendChild(styleEl);
    }

    const css = generateThemeCSS('light') + generateThemeCSS('dark');
    styleEl.textContent = css;
  };

  if (typeof window !== 'undefined') {
    injectThemeCSS();
  }

  return {
    subscribe,
    setTheme: (newTheme: Theme) => {
      if (typeof window === 'undefined') return;
      window.localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      set(newTheme);
    },
    toggle: () => {
      if (typeof window === 'undefined') return;
      const currentTheme = window.localStorage.getItem('theme') as Theme;
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      set(newTheme);
    },
    initialize: () => {
      if (typeof window === 'undefined') return;
      const theme = getInitialTheme();
      document.documentElement.setAttribute('data-theme', theme);
    }
  };
};

// Export theme store instance
export const theme = createThemeStore();

// Helper function to get theme value synchronously
export const getThemeValue = (property: keyof typeof themes.dark) => {
  const currentTheme = typeof window !== 'undefined' ? 
    (window.localStorage.getItem('theme') as Theme) || 'dark' : 
    'dark';
  return themes[currentTheme][property];
};