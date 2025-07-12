import { defineCollection, reference, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
import { file } from 'astro/loaders';


export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(),
	}),
	shipWeapons: defineCollection({
		loader: file("src/assets/data/ShipWeaponProjectiles.json"),
		schema: z.object({
			projectile: z.string(),
		})
	})
};