import { writable } from 'svelte/store';

type PublicFiles = {
	[id: string]: {
		label: string;
		url: string;
	};
};

export const PUBLIC_FILES = writable<PublicFiles>({
	emotettv: {
		label: 'emoteTTV',
		url: 'https://mega.nz/file/ScdGWYhI#3OHmAdcoVwGaYlTG7mHiY56lsnBOXGqghaaa1MM2iUc'
	},
	fazendoca: {
		label: 'Fazendoca',
		url: 'https://mega.nz/file/nMtTyDzZ#7U-aAD-sP59bxP0De8i-Ncr6BO3qBjLAW_8BCRPDzfA'
	},
	guessify: {
		label: 'Guessify',
		url: 'https://mega.nz/file/aUU33QrS#GNiaV5_hca01tNISKgluHN-byG405eF8SwI6XR5uX4w'
	},
	overlay: {
		label: 'Overlay (e bot)',
		url: 'https://mega.nz/file/2M8GDB5D#rNWZz961vKh17LhhL1zgw-2F3Wg_L-KODFx5B8MLRS0'
	},
	website: {
		label: 'Site pessoal',
		url: 'https://mega.nz/file/zE9UkaDD#LYy1ku3_yVmRaIT4zg2PX34fF07fNP6Socc6RhVvpXQ'
	}
});
