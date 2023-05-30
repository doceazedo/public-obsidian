import { writable } from 'svelte/store';

type PublicFiles = {
	[id: string]: {
		fileName: string;
		description: string;
		repo: string;
	};
};

export const PUBLIC_FILES = writable<PublicFiles>({
	emotettv: {
		fileName: 'emoteTTV.md',
		description: 'Interpretador de emotes da Twitch (BTTV e FFZ)',
		repo: 'doceazedo/emotettv'
	},
	fazendoca: {
		fileName: 'Fazendoca.md',
		description: 'Jogo social de fazendinha sendo desenvolvido na UE5',
		repo: 'doceazedo/fazendoca-ue5'
	},
	guessify: {
		fileName: 'Guessify.md',
		description: 'Quiz online multiplayer com playlists do Spotify',
		repo: 'doceazedo/guessify'
	},
	overlay: {
		fileName: 'Overlay (e bot).md',
		description: 'Um conjunto com os visuais, comandos e afins das minhas lives',
		repo: 'doceazedo/overlay'
	},
	website: {
		fileName: 'Site pessoal.md',
		description: 'Meu site pessoal e blog',
		repo: 'doceazedo/doceazedo.com'
	}
});
