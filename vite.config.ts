import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

process.env.BROWSER = "safari"

export default defineConfig({
    plugins: [sveltekit()],
});
