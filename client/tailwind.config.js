const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			shade1: '#E3F2FD',
			shade2: '#BBDEFB',
			shade3: '#90CAF9',
			shade4: '#64B5F6',
			shade5: '#42A5F5',
			shade6: '#2196F3',
			shade7: '#1E88E5',
			shade8: '#1976D2',
			shade9: '#1565C0',
			shade10: '#0D47A1',
		},
		extend: {},
	},
	plugins: [],
});
