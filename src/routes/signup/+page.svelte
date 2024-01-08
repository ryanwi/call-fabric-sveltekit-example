<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  // console.log('page.svelte data =', data);
  // console.log('page.svelte form =', form);
</script>


<div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
    <div class="max-w-md">
      <h1>Sign Up</h1>
      
      {#if form?.errors?.message}
        <div role="alert" class="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>{form?.errors?.message}</span>
        </div>
      {/if}
    
      <div class="">
        <form method="POST" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label>
              First Name:
              <input name="firstName" type="text" value={form?.firstName ?? ''} required class="input input-bordered w-full" />
            </label>
          </div>
          <div class="mb-4">
            <label>
              Last Name:
              <input name="lastName" type="text" value={form?.lastName ?? ''} required class="input input-bordered w-full" />
            </label>
          </div>
          <div class="mb-4">
            <label>
              Email:
              <input name="email" type="email" value={form?.email ?? ''} required class="input input-bordered w-full" />
            </label>
          </div>
          <div class="mb-4">
            <label>
              Password:
              <input name="password" type="text" required class="input input-bordered w-full" />
            </label>
          </div>
          <div class="mb-4">
            <label>
              Job Title:
              <input name="jobTitle" type="text" class="input input-bordered w-full" />
            </label>
          </div>
          <div class="">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
