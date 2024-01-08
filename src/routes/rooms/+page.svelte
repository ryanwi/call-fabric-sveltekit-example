<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  // console.log('page.svelte data =', data);
</script>

<h1>Rooms</h1>

{#if data.session}
  {#if data.rooms}
    <div class="grid grid-cols-3">
      {#each data.rooms as room}
        <div class="card w-96 bg-base-100 shadow-xl m-6">
          <figure><img src="https://files.signalwire.com/cantina/02e3021d-861c-49da-9741-5c811aac8657/promos/44513608-5ff4-4b84-bccc-74c15f857c8c.jpg" /></figure>
          <div class="card-body">
            <h2 class="card-title">{room.display_name}</h2>
            <p>{room.name}</p>
            <div class="card-actions justify-end">
              <a href="/rooms/{room.name}" class="btn btn-primary">Join</a>
            </div>
          </div>
        </div> 
      {/each}
    </div>
  {:else if data.error}
    <p>{data.error}</p>  
  {/if}
{:else}
  <h1>Access Denied</h1>
  <p>
    <a href="/auth/signin"> You must be signed in to view this page </a>
  </p>
{/if}
