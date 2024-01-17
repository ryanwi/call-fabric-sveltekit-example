<script lang="ts">
  /** @type {import('./$types').ActionData} */
  export let form;
  const formDataErrorClasses = 'input input-bordered w-full input-error';
  const formDataBaseClasses = 'input input-bordered w-full';
  let emailClass = form?.errors?.email ? formDataErrorClasses : formDataBaseClasses;
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
    <div class="max-w-md">
      <h1 class="text-4xl mb-4 font-extrabold">Sign Up</h1>
      
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
              <input name="firstName" type="text" value={form?.data?.firstName ?? ''} required class="input input-bordered w-full" />
            </label>
            {#if form?.errors?.firstName}
              <div class="text-red-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                {form?.errors?.firstName}
              </div>              
            {/if}
          </div>
          <div class="mb-4">
            <label>
              Last Name:
              <input name="lastName" type="text" value={form?.data.lastName ?? ''} required class="input input-bordered w-full" />
            </label>
            {#if form?.errors?.lastName}
              <div class="text-red-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                {form?.errors?.lastName}
              </div>              
            {/if}
          </div>
          <div class="mb-4">
            <label>
              Email:
              <input name="email" type="email" value={form?.data?.email ?? ''} required class={emailClass} />
            </label>
            {#if form?.errors?.email}
              <div class="text-red-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                {form?.errors?.email}
              </div>              
            {/if}
          </div>
          <div class="mb-4">
            <label>
              Password:
              <input name="password" type="text" value={form?.data?.password ?? ''} required class="input input-bordered w-full" />
            </label>
            {#if form?.errors?.password}
              <div class="text-red-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                {form?.errors?.password}
              </div>
            {/if}
          </div>
          <div class="mb-4">
            <label>
              Job Title:
              <input name="jobTitle" type="text" value={form?.data?.jobTitle ?? ''} class="input input-bordered w-full" />
            </label>
            {#if form?.errors?.jobTitle}
              <div class="text-red-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
                </svg>
                {form?.errors?.jobTitle}
              </div>
            {/if}
          </div>
          <div class="">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
