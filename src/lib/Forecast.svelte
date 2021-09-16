<script lang="ts">
    import { conditions } from "./../services/store";

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
            <span class="temp">Will be {temperature}</span>
            <span class="wind">{wind}</span>
        </li>
        {/each}
    </ul>
    {/if}
</section>

<style lang="scss" scoped>
    #forecast {
        li {
            display: flex;
            .day {flex: 0 0 100px;}
            .temp {flex: 1; margin: 0 20px; opacity: 0.66;}
            .wind {flex: 0 0 auto;}
        }
    }
</style>
