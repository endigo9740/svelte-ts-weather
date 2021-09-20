<script lang="ts">
    import { location, conditions } from "./../services/store";
    import Spinner from "./../lib/Spinner.svelte";

    // Handle Timestamp
    let timestamp: any;
    setInterval(() => { timestamp = new Date().toLocaleTimeString(); }, 1000);
</script>

<section id="core">
    <h1>svelte.weather</h1>
    <div id="conditions">
        {#if $conditions}
        <p id="temp">{$conditions.main.temp}</p>
        <p id="locTime">
            <strong>{$location}</strong>
            <small>{$conditions.weather[0].description}, {Math.round($conditions.wind.speed)} MPH, @ {timestamp ? timestamp : 'Loading...'}</small>
        </p>
        {:else}
        <Spinner />
        {/if}
    </div>
    <!-- Debug: -->
    <!-- <pre>location: {JSON.stringify($location, null, 2)}</pre> -->
    <!-- <pre>conditions: {JSON.stringify($conditions, null, 2)}</pre> -->
</section>

<style lang="scss" scoped>
    @import '../style-vars';
    #core {
        display: flex; flex-direction: column; justify-content: space-between;
        h1, #conditions {flex: 0 0 auto;}
        #conditions {
            flex: 0 0 200px; overflow: hidden;
            display: flex; justify-content: flex-start; align-items: center;
            #temp+#locTime {margin-left: 20px;}
            #temp {flex: 0 0 auto; font-size: 80px; line-height: 80px; font-weight: normal;}
            #locTime {
                flex: 0 0 auto;
                strong+small {margin-top: 10px;}
                strong, small {display: block;}
                strong {font-size: 48px; line-height: 48px; font-weight: lighter; text-transform: capitalize;}
                small {font-size: 14px; line-height: 14px; font-weight: normal; text-transform: uppercase;}
            }
        }
    }
</style>
