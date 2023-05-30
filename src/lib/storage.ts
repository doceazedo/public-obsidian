import { Storage } from 'megajs';
import { env } from '$env/dynamic/private';

export const storage = new Storage({
	email: env.MEGA_EMAIL,
	password: env.MEGA_PASSWORD
});
