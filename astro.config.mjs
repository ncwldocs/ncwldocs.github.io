import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ncwldocs.github.io',
	base: '/',
	integrations: [
		starlight({
			title: 'NCWL Docs',
			logo: {
				src: './src/assets/images/ncwl-logo.svg',
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Shipyard',
					items: [
						{
							label: "NCWL",
							autogenerate: { directory: 'shipyard/NCWL' },
						},
						{
							label: "Civilian",
							autogenerate: { directory: 'shipyard/Civilian' },
						},
					]
				},
			],
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				Head: './src/components/Head.astro',
			},
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/ncwldocs/ncwl-docs/edit/main/',
			},
		}),
	],
});
