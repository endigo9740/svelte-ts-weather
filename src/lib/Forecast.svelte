<script lang="ts">
    import { conditions } from "./../services/store";
    import Spinner from "./../lib/Spinner.svelte";

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function formatDayString(day: number): any {
        const offset = new Date(new Date().getTime() + (day * 24) * 60 * 60 * 1000).getDay();
        return weekdays[offset];
    }
</script>
        
<section id="forecast">
    <h2>Forecast</h2>
    {#if $conditions}
    <ul class="list">
        {#each $conditions.forecast as {day, temperature, wind}}
        <li>
            <span class="day">{formatDayString(day)}</span>
            <span class="wind">Wind of {wind}</span>
            <span class="temp">{temperature}</span>
        </li>
        {/each}
    </ul>
    {:else}
    <Spinner />
    {/if}
    <!-- <pre>forecast: {JSON.stringify($conditions.forecast, null, 2)}</pre> -->
</section>

<style lang="scss" scoped>
    @import '../style-vars';
    #forecast {
        .list li {
            display: flex;
            .day {flex: 0 0 100px;}
            .wind {flex: 1; margin: 0 20px; color: $colorWhite66;}
            .temp {flex: 0 0 auto;}
        }
    }
</style>
