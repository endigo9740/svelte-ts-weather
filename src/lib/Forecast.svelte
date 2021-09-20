<script lang="ts">
    import { forecast } from "./../services/store";
    import Spinner from "./../lib/Spinner.svelte";

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function formatDayString(t: any): any {
        return weekdays[new Date(t).getDay()];
    }
</script>
        
<section id="forecast">
    <h2>Forecast</h2>
    {#if $forecast}
    <ul class="list">
        {#each $forecast.list as {dt_txt, wind, main}}
        <li>
            <span class="day">{formatDayString(dt_txt)}</span>
            <span class="wind">Wind {Math.round(wind.speed)} MPH</span>
            <span class="temp">{main.temp}</span>
        </li>
        {/each}
    </ul>
    {:else}
    <Spinner />
    {/if}
    <!-- <pre>forecast: {JSON.stringify($forecast, null, 2)}</pre> -->
</section>

<style lang="scss" scoped>
    @import '../style-vars';
    #forecast {
        .list li {
            display: flex;
            .day {flex: 0 0 220px; font-size: 16px;}
            .wind {flex: 1; margin: 0 20px; color: $colorWhite66;}
            .temp {flex: 0 0 auto;}
        }
    }
</style>
