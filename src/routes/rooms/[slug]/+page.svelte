<script>
  import Room from '$lib/components/Room.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  // console.log('page.svelte data =', data);

  export let room = data.room;
  let sat = data.session?.sat;
</script>

<h1 class="text-4xl mb-4 mt-4 font-extrabold">Room</h1>

<Room {room} {sat} />
