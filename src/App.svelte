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
    // NOTE: .scss extension optional
    @import 'style-vars';
    @import 'style-globals';
    main {
        background: $colorBlack url('https://i.imgur.com/mcKETT3.jpeg') center center no-repeat; background-size: cover;
        box-shadow: 0 0 50px rgba(0,0,0,0.05);
        width: 1500px; height: 840px;
        // Layout
        display: flex;
        #core {flex: 1; padding: 50px 100px;}
        #sidebar {
            flex: 0 0 560px; padding: 50px;
            background: $colorBlack75; backdrop-filter: blur(10px); 
            overflow-x: hidden; overflow-y: auto;
            #locations+#forecast {border-top: 1px solid $colorWhite33; margin-top: 60px; padding-top: 60px;}
        }
    }
</style>
