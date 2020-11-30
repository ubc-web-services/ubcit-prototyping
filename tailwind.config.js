module.exports = {
	purge: {
		layers: ['components', 'utilities'],
		content: [
			'./src/**/*.html',
			'./src/**/*.vue',
			'./src/**/*.js',
			'./templates/**/*.twig'],
		options: {
			safelist: ['sticky', 'top-0'],
		},
	},
	separator: '--',
	theme: {
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'black': '#000',
			'white': '#fff',
			'ubc-blue': '#002145', // rgb - (0,33,69)
			'ubc-blue-sea': '#003A79', // rgb - (0,58,121)
			'ubc-blue-cobalt': '#0055b7', // rgb - (0,85,183)
			'ubc-blue-neptune': '#40b4e5', // rgb - (64,180,229)
			'ubc-blue-sky': '#61c1e9', // rgb - (64,180,229)
			'ubc-blue-cornflower': '#97d4e9', // rgb - (151,212,233)
			'ubc-blue-polar': '#def1f8', // rgb - (255,243,249) (was #e1f3f9)
			'unit-primary': 'var(--color-primary)',
			'unit-secondary': 'var(--color-secondary)',
			'unit-accent': 'var(--color-accent)',
			grey: {
				50: '#fafafa',
				100: '#f5f5f5',
				//200: '#eee',
				300: '#e0e0e0',
				//400: '#bdbdbd',
				500: '#9e9e9e',
				//600: '#757575',
				700: '#616161',
				//800: '#424242',
				900: '#212121',
			},
		},
		screens: {
			//xs: '320px',
			sm: '640px',
			md: '960px',
			lg: '1280px',
			xl: '1720px',
			xxl: '2400px',
			//xxxl: '3200px',
		},
		fontFamily: {
			sans: [
				'Catamaran',
				'Arial',
				'sans-serif',
			],
			serif: [
				'Merriweather',
				'Georgia',
				'Cambria',
				'"Times New Roman"',
				'Times',
				'serif',
			],
			mono: [
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		fontSize: {
			'xs': '.75rem', //12px
			'sm': '.875rem', //14px
			'base': '1rem', //16px
			'lg': '1.125rem', //18px
			'xl': '1.25rem', //20px
			'2xl': '1.5rem', //24px
			'3xl': '1.75rem', //28px
			'4xl': '2rem', // 32px
			'5xl': '2.25rem', //36px
			'6xl': '3.375rem', //54px
			'7xl': '4rem', // 64px
			'8xl': '5rem', //80px
			'9xl': '7.625rem', //122px
		},
		fontWeight: {
			light: 300,
			normal: 400,
			semibold: 600,
			bold: 700,
		},
		borderColor: theme => {
			return global.Object.assign({
				DEFAULT: theme('colors.grey.300', 'currentColor')
			}, theme('colors'))
		},
		extend: {
			padding: {
        leading: 'calc(var(--leading) * var(--base-font-size))',
      },
      margin: {
        leading: 'calc(var(--leading) * var(--base-font-size))',
      },
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'group-hover'],
		boxShadow: ['responsive', 'hover', 'group-hover'],
		cursor: [],
		fill: [],
		fontFamily: [],
		fontWeight: ['responsive'],
		outline: ['focus'],
		pointerEvents: [],
		resize: [],
		stroke: [],
		textColor: ['responsive', 'hover', 'group-hover'],
	},
	plugins: [],
}
