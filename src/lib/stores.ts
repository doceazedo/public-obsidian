import { writable } from 'svelte/store';

type PublicFiles = {
	[id: string]: {
		label: string;
		url: string;
		description: string;
		repo: string;
	};
};

export const PUBLIC_FILES = writable<PublicFiles>({
	emotettv: {
		label: 'emoteTTV',
		url: 'https://mega.nz/file/ScdGWYhI#3OHmAdcoVwGaYlTG7mHiY56lsnBOXGqghaaa1MM2iUc',
		description: 'Interpretador de emotes da Twitch (BTTV e FFZ)',
		repo: 'doceazedo/emotettv'
	},
	fazendoca: {
		label: 'Fazendoca',
		url: 'https://mega.nz/file/nMtTyDzZ#7U-aAD-sP59bxP0De8i-Ncr6BO3qBjLAW_8BCRPDzfA',
		description: 'Jogo social de fazendinha sendo desenvolvido na UE5',
		repo: 'doceazedo/fazendoca-ue5'
	},
	guessify: {
		label: 'Guessify',
		url: 'https://mega.nz/file/aUU33QrS#GNiaV5_hca01tNISKgluHN-byG405eF8SwI6XR5uX4w',
		description: 'Quiz online multiplayer com playlists do Spotify',
		repo: 'doceazedo/guessify'
	},
	overlay: {
		label: 'Overlay (e bot)',
		url: 'https://mega.nz/file/2M8GDB5D#rNWZz961vKh17LhhL1zgw-2F3Wg_L-KODFx5B8MLRS0',
		description: 'Um conjunto com os visuais, comandos e afins das minhas lives',
		repo: 'doceazedo/overlay'
	},
	website: {
		label: 'Site pessoal',
		url: 'https://mega.nz/file/zE9UkaDD#LYy1ku3_yVmRaIT4zg2PX34fF07fNP6Socc6RhVvpXQ',
		description: 'Meu site pessoal e blog',
		repo: 'doceazedo/doceazedo.com'
	}
});
