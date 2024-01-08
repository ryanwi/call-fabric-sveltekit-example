import { fail, redirect } from '@sveltejs/kit';
import { SIGNALWIRE_API_URL, SIGNALWIRE_PROJECT, SIGNALWIRE_API_TOKEN } from '$env/static/private';
import type { PageServerLoad, Actions } from './$types';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const { email, password, firstName, lastName } = Object.fromEntries(formData);
    const authString = Buffer.from(`${SIGNALWIRE_PROJECT}:${SIGNALWIRE_API_TOKEN}`).toString('base64');

    const response = await fetch(`${SIGNALWIRE_API_URL}/api/fabric/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + authString
      },
      body: JSON.stringify({ email, password, first_name: firstName, last_name: lastName })
    });

    if (response.ok) {
      redirect(303, '/auth/signin');
    } else {
      const errorBody = await response.text(); // or response.json()
      console.log('Error Body:', errorBody);      

      const errors: Record<string, unknown> = {}
      errors.message = errorBody;
      
      const data = {
        data: Object.fromEntries(formData),
        errors,
      };
      return fail(400, data);
    }
  }
};
