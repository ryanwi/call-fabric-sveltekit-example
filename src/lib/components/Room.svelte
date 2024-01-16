<script lang="ts">
  import { browser } from '$app/environment';
  import type { FabricAddress } from '$lib/types/FabricAddress';
  import { PUBLIC_RELAY_HOST } from '$env/static/public';

  // passed as properties
  export let room: FabricAddress;
  export let sat: string;

  if (browser) {
    const _token = sat;
    const _host = PUBLIC_RELAY_HOST;
    const destination = room.channels['video'];
    console.log('This is the browser', _token, _host, destination);
  }
</script>

<svelte:head>
  <script async type="text/javascript" src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>  
  <script async type="text/javascript" src="https://unpkg.com/@signalwire/js"></script>
</svelte:head>

<div>
  <p>Room</p>
  <p>{JSON.stringify(room)}</p>
</div>

<p>Token: {sat}</p>
