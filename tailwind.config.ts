import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { forest:'#123c2d', eco:'#2E7D32', mint:'#E8F5E9' }, boxShadow:{glow:'0 20px 60px rgba(46,125,50,.18)'} } }, plugins: [] };
export default config;
