import { redirect } from '@sveltejs/kit';
import { SIGNALWIRE_FABRIC_API_URL } from '$env/static/private';

// /** @type {import('./$types').PageServerLoad} */
export async function load(event) {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/auth/signin');

	const response = await fetch(`${SIGNALWIRE_FABRIC_API_URL}/addresses?type=room`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${session.sat}`
		}
	});

	if (!response.ok) {
		return { status: response.status, error: 'Failed to get rooms' };
	}

	const rooms = await response.json();
	return {
		rooms: rooms.data
	};
}
