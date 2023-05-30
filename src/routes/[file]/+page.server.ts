import { PUBLIC_FILES } from '$lib/stores';
import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load = ({ params }) => {
	const publicFiles = get(PUBLIC_FILES);
	const file = publicFiles[params.file];
	if (!file) throw error(404, 'Arquivo não encontrado');
	return {
		id: params.file,
		fileName: file.label
	};
};
