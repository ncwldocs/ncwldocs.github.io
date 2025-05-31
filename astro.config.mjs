import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://WreakHavocOnTheMiddleClass.github.io',
	base: 'ncwl-docs',
	integrations: [
		starlight({
			title: 'NCWL Docs',
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
						{
							label: "Removed",
							autogenerate: { directory: 'shipyard/Removed' },
						}
					]
				},
			],
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				Head: './src/components/Head.astro',
			},
			customCss: ['./src/styles/custom.css'],
			editLink: {
				baseUrl: 'https://github.com/WreakHavocOnTheMiddleClass/ncwl-docs/edit/main/',
			},
		}),
	],
});
