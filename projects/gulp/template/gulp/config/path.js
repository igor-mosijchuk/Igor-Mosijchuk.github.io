import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());



const buildFolder = `./${rootFolder}-12`;
const srcFolder = `./src`;


export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		sass: `${srcFolder}/sass/style.sass`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		favicon: `${srcFolder}/favicon.ico`,
		faviconAppleTouch: `${srcFolder}/apple-touch-icon.png`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		sass: `${srcFolder}/sass/**/*.sass`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}