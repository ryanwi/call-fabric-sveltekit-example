import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_SIGNALWIRE_FABRIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.getSession();
  if (!session?.user) throw redirect(303, '/auth/signin');

  const response = await fetch(
    `${PUBLIC_SIGNALWIRE_FABRIC_API_URL}/addresses?type=room`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.sat}`,
      },
    }
  );

  if (!response.ok) {
    return { status: response.status, error: 'Failed to get rooms' };
  }

  const rooms = await response.json();
  return {
    rooms: rooms.data,
  };
}
