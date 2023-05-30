import { get } from 'svelte/store';
import { error, json } from '@sveltejs/kit';
import { PUBLIC_FILES } from '$lib/stores';
import { storage } from '$lib/storage';

export type FileResponse = {
	content: string;
};

const activeProjectsNodeId = 'GV8jHa7L';

export const GET = async ({ params }) => {
	const publicFiles = get(PUBLIC_FILES);
	const fileData = publicFiles[params.file];
	if (!fileData) throw error(404, 'Arquivo não encontrado');

	await storage.ready;

	const file = Object.values(storage.files).find(
		(file) => file.name === fileData.fileName && file.parent?.nodeId === activeProjectsNodeId
	);
	if (!file) throw error(404, 'Arquivo não encontrado');

	const buffer = await file.downloadBuffer({});
	const content = buffer.toString();

	const resp: FileResponse = {
		content
	};
	return json(resp);
};
