import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { PUBLIC_SIGNALWIRE_FABRIC_API_URL } from '$env/static/public';

export const load: PageServerLoad = async ({ locals, params }) => {
  const session = await locals.getSession();
  if (!session?.user) throw redirect(303, '/auth/signin');

  const { slug } = params;

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

  if (response.ok) {
    const rooms = await response.json();
    let room = rooms.data.find((item) => item.name === slug);
    return {
      room: room,
    };
  } else {
    console.log(await response.text());
    return { status: response.status, error: 'Failed to get rooms' };
  }
}
