import { extendTheme, ColorMode } from '@chakra-ui/react';

const config: { initialColorMode: ColorMode; useSystemColorMode: boolean } = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

export const theme = extendTheme({
	breakpoints: {
		base: '0em',
		sm: '450px',
		md: '768px',
		lg: '1350px',
		xl: '1600px',
		'2xl': '1920px',
	},
	config,
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
	colors: {
		brand: '#52FF00',
		'brand-dark': '#38CB89',
		accent: '#3300FF',
		text: '#323B4B',
		subtle: '#8A94A6',
		detail: '#4E5D78',
		border: '#F3F3F3',
		blue: '#3E15F4',
		informational: '#A0AEC0',
		critical: '#960D00',
		high: '#FF5C00',
		medium: '#FFE600',
		low: '#38CB89',
		gas: '#F795B4',
		'high-subtle': '#FFECE8',
		success: '#289F4C',
		pro: '#FAF9FF',
		beginner: '#EFFAFF',
		intermediate: '#FFEDE9',
		individual: '#FFEDE9',
		expired: '#F4F4F4',
		'pro-dark': '#806CCF',
		'beginner-dark': '#54C0EB',
		'intermediate-dark': '#FF5630',
		'individual-dark': '#FF5630',
		bg: {
			subtle: '#FAFBFC',
		},
	},
	styles: {
		global: {
			'html, body': {
				color: 'text',
				bg: 'white',
				fontWeight: 500,
			},
		},
	},
});
