<script lang="ts">
	import type { PageData } from './$types';
  import { browser } from '$app/environment';
  import { PUBLIC_RELAY_HOST } from '$env/static/public';
  import { onMount } from 'svelte';

  export let data: PageData;
  console.log('page.svelte data =', data);

  export let room = data.room;
  let sat = data.session?.sat;

  onMount(() => {
		if (!browser) return;
    // console.log("document.readyState =", document.readyState)

  	const _token = sat;
    const _host = PUBLIC_RELAY_HOST;
    const _destination = room.channels['video'];

    console.log("sat in the browser?", sat);
    console.log(_host, _token, _destination);
    // console.log("room =", room);

    let client = null;

    async function connect() {
      console.log('connect');

      client = await SignalWire.SignalWire({
        host: _host,
        token: _token,
        rootElement: document.getElementById('rootElement'),
      });

      await client.connect();
    }

    async function makeCall() {
      const call = await client.dial({
        to: _destination,
        logLevel: 'debug',
        debug: { logWsTraffic: true },
      })

      await call.start();
    }

    // var start = async function() { 
    //   // Your async task will execute with await
    //   await connect()
    //   // console.log('I will execute after foo get either resolved/rejected')
    //   console.log("client =", client)
    //   makeCall()
    // }
    // start()

    (async() => {
      console.log('before start')
      await connect()
      console.log("client =", client)
      console.log('after start')
      makeCall()
    })();      

	});
</script>

<h1 class="text-4xl mb-4 mt-4 font-extrabold">{room.display_name}</h1>

<div id="rootElement"></div>
