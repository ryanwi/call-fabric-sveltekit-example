import { fail, redirect } from '@sveltejs/kit';
import { SIGNALWIRE_API_URL, SIGNALWIRE_PROJECT, SIGNALWIRE_API_TOKEN } from '$env/static/private';
import type { CreateFabricSubscriberRequest } from '$lib/types/FabricSubscriber';
import { validateEmail } from '$lib/utils/validation';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const jobTitle = formData.get('jobTitle') as string;

    const errors: Record<string, unknown> = {}
        
    const subscriber: CreateFabricSubscriberRequest = { email, password, first_name: firstName, last_name: lastName, job_title: jobTitle };

    if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (Object.keys(errors).length > 0) {
      const data = {
        data: Object.fromEntries(formData),
        errors,
      };
      return fail(400, data);
    }

    const authString = Buffer.from(`${SIGNALWIRE_PROJECT}:${SIGNALWIRE_API_TOKEN}`).toString('base64');
    const response = await fetch(`${SIGNALWIRE_API_URL}/api/fabric/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + authString
      },
      body: JSON.stringify(subscriber)
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
