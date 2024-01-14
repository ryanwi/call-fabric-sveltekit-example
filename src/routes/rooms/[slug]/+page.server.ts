import { SIGNALWIRE_FABRIC_API_URL } from '$env/static/private';

// /** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
  const session = await locals.getSession()
  if (!session?.user) throw redirect(303, '/auth/signin');

  const { slug } = params;  

  const response = await fetch(`${SIGNALWIRE_FABRIC_API_URL}/addresses?type=room`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.sat}`
    }
  });

  if (response.ok) {
    const rooms = await response.json();
    let room = rooms.data.find(item => item.name === slug);
    console.log("room = ", room);
    return {
      room: room
    }  
  } else {
    console.log(await response.text());
    return { status: response.status, error: 'Failed to get rooms' };
  }
}

