<script lang="ts">
  import { page } from "$app/stores"
  import "../app.css";
</script>

<div class="navbar bg-base-100">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">Call Fabric Demo</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>


<div>
  <header>
    <div class="signedInStatus">
      <p class="nojs-show loaded">
        {#if $page.data.session}
          {#if $page.data.session.user?.image}
            <span
              style="background-image: url('{$page.data.session.user.image}')"
              class="avatar"
            />
          {/if}
          <span class="signedInText">
            <small>Signed in as</small><br />
            <strong
              >{$page.data.session.user?.email ??
                $page.data.session.user?.name}</strong
            >
          </span>
          <a
            href="/auth/signout"
            class="button"
            data-sveltekit-preload-data="off">Sign out</a
          >
        {:else}
          <span class="notSignedInText">You are not signed in</span>
          <a
            href="/auth/signin"
            class="buttonPrimary"
            data-sveltekit-preload-data="off">Sign in</a
          >
        {/if}
      </p>
    </div>
    <nav>
      <ul class="navItems">
        <li class="navItem"><a href="/">Home</a></li>
        <li class="navItem"><a href="/full">Full</a></li>
        <li class="navItem"><a href="/minimal">Minimal</a></li>
      </ul>
    </nav>
  </header>
  <slot />
</div>
