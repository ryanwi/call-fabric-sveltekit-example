<script lang="ts">
  import { page } from '$app/stores';
</script>

{#if $page.data.session}
  <h1 class="text-4xl mb-4 mt-4 font-extrabold">Get started</h1>
  <div>
    <p>You are signed in.</p>
    <p>Session expiry: {$page.data.session?.expires}</p>
    <p>Subsriber ID: {$page.data.session?.user?.id}</p>
    <p>Token: {$page.data.session?.accessToken}</p>
  </div>
{:else}
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div>
        <h1 class="text-5xl font-bold">Simplified Communication</h1>
        <p class="py-6">Connect and interact with voice, video, and chat seamlessly</p>
        <div>
          <div class="inline-flex w-full flex-col items-stretch justify-center gap-2 px-4 md:flex-row xl:justify-start xl:px-0">
            <a data-sveltekit-preload-data="off" href="/signup" class="btn btn-primary md:btn-lg md:btn-wide group px-12">Join</a>
            <a data-sveltekit-preload-data="off" href="/auth/signin" class="btn btn-neutral md:btn-lg md:btn-wide group px-12">
              Sign in
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
