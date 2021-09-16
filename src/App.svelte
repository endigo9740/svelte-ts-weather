<script lang="ts">
    import Core from "./lib/Core.svelte";
    import Locations from "./lib/Locations.svelte";
    import Forecast from "./lib/Forecast.svelte";
</script>

<main>
    <Core />
    <section id="sidebar">
        <Locations />
        <Forecast />
    </section>
</main>

<style lang="scss" global>
    :root {
        // Reset
        border: none; margin: 0; padding: 0; outline: none;
        // Globals
        display: flex; justify-content: center; align-items: center;
        width: 100%; height: 100%;
        // Gradient via: https://cssgradient.io/
        background: #141414;
        background: linear-gradient(0deg, rgba(113,83,103,1) 0%, rgba(47,64,95,1) 50%, rgba(18,23,46,1) 100%);

        // Typography
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-weight: lighter;
        font-size: 18px; line-height: 24px;
        h1, h2, strong {font-weight: normal;}
        h1 {font-size: 16px; line-height: 20px;}
        h2 {font-size: 20px; line-height: 24px; margin-bottom: 50px;}
        a, button {
            color: rgba(255,255,255,0.66); text-decoration: none; cursor: pointer;
            &:hover, &:active, &:focus {color: #FFF;}
        }
        button {font-size: 18px; line-height: 24px; font-weight: lighter; background: none; border: none; text-transform: capitalize;}

        // Elements
        pre {background: black; color: white; padding: 16px; overflow: auto;}

        // Classes
        .list {
            padding: 0;
            li, button {list-style: none;}
            li+li, button+button {margin-top: 40px;}
            button {display: block;}
        }
    }
    main {
        background: black url('https://i.imgur.com/mcKETT3.jpeg') center center no-repeat; background-size: cover;
        box-shadow: 0 0 50px rgba(0,0,0,0.05);
        border-radius: 8px; overflow: hidden;
        width: 1500px; height: 840px;

        // Layout
        display: flex;
        #core {flex: 1; padding: 50px 100px;}
        #sidebar {
            flex: 0 0 560px;
            background: rgba(7,9,25,0.75); padding: 50px;
            overflow-x: hidden; overflow-y: auto;
            backdrop-filter: blur(5px);
            #locations+#forecast {border-top: 1px solid rgba(255,255,255,0.33); margin-top: 60px; padding-top: 60px;}
        }
    }
</style>
