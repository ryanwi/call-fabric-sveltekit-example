<script>
  /** @type {import('./$types').PageData} */
  export let data;
  // console.log('page.svelte data =', data);
</script>

<svelte:head>
  <script type="text/javascript" src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js"></script>  
</svelte:head>

<h1 class="text-4xl mb-4 mt-4 font-extrabold">Room</h1>

<div>
  <p>Data</p>
  <p>{JSON.stringify(data)}</p>  
</div>

<div>
  <p>Room</p>
  <p>{JSON.stringify(data.room)}</p>  
</div>

<!-- this should only be rendered in the html sent to the browser -->
<script type="text/javascript">
  console.log("you made it to the browser");
  const _token = "{data.session?.accessToken}";
  const _host = "relay.swire.io";
</script>
<script type="text/javascript" src="https://unpkg.com/@signalwire/js"></script>
