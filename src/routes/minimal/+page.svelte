<script lang="ts">
  import { page } from '$app/stores';
</script>

{#if $page.data.session}
  <p>
    You are signed in.
  </p>
  <p>Session expiry: {$page.data.session?.expires}</p>
{:else}
  <p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
  </p>
{/if}
