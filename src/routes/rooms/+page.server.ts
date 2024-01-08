import { redirect } from '@sveltejs/kit';
import { SIGNALWIRE_FABRIC_API_URL } from '$env/static/private';

// /** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const session = await event.locals.getSession()
  if (!session?.user) throw redirect(303, '/auth/signin');

  console.log(session.user);

  const response = await fetch(`${SIGNALWIRE_FABRIC_API_URL}/addresses?type=room`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.accessToken}`
    }
  });

  // const responseBody = await response.text();
  // console.log(responseBody);
  
  if (response.ok) {
    const rooms = await response.json();
    return {
      rooms: rooms.data,
    }  
  } else {
    return { status: response.status, error: 'Failed to get rooms' };
  }
} 
