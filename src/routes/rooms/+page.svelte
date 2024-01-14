<script lang="ts">
  import RoomCard from '$lib/components/RoomCard.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  // console.log('page.svelte data =', data);
</script>

<h1 class="text-4xl mb-4 mt-4 font-extrabold">Rooms</h1>

{#if data.session}
  {#if data.rooms}
    <div class="grid grid-cols-3">
      {#each data.rooms as room (room.id)}
        <RoomCard {room} />
      {/each}
    </div>
  {:else if data.error}
    <p>{data.error}</p>  
  {/if}
{:else}
  <h1>Access Denied</h1>
  <p>
    <a href="/auth/signin" aria-label="Sign in"> You must be signed in to view this page </a>
  </p>
{/if}
