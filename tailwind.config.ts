import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '898px',
      // xl:"1024px"
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0b0b0c',
          card: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.12)'
        }
      },
      boxShadow: {
        soft: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 30px rgba(0,0,0,0.25)',
        glow: '0 0 0 1px rgba(255,255,255,0.06) inset, 0 10px 30px rgba(59,130,246,0.25)'
      },
      dropShadow: {
        glow: '0 10px 30px rgba(99,102,241,0.45)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(150deg, #1B1B16 1.28%, #565646 90.75%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'morphic-noise': "radial-gradient(1000px 600px at 10% -20%, rgba(99,102,241,0.18), transparent 50%), radial-gradient(800px 500px at 120% 10%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(600px 400px at -10% 110%, rgba(16,185,129,0.18), transparent 60%)"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        shine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 2.5s linear infinite'
      },
    },
  },
  plugins: [],
};
export default config;
