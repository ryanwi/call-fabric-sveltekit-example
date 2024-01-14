<script>
  export let room;
  export let sat;
</script>

<svelte:head>
  <script type="text/javascript" src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>  
</svelte:head>

<div>
  <p>Room</p>
  <p>{JSON.stringify(room)}</p>  
</div>

<p>Token: {sat}</p>
