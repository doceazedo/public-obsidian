import { File } from 'megajs';
import { get } from 'svelte/store';
import { error, json } from '@sveltejs/kit';
import { PUBLIC_FILES } from '$lib/stores';

export type FileResponse = {
	content: string;
};

export const GET = async ({ params }) => {
	const publicFiles = get(PUBLIC_FILES);
	const fileData = publicFiles[params.file];
	if (!fileData) throw error(404, 'Arquivo não encontrado');

	const file = File.fromURL(fileData.url);
	const attr = await file.loadAttributes();
	const buffer = await file.downloadBuffer({});
	const content = buffer.toString();

	if (!attr.name) throw error(500, 'Arquivo sem nome');

	const resp: FileResponse = {
		content
	};
	return json(resp);
};
