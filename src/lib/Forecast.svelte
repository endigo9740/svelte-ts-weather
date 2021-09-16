<script lang="ts">
    import { conditions } from "./../services/store";
</script>
        
<section id="forecast">
    <h2>Forecast</h2>
    {#if $conditions}
    <ul class="list">
        {#each $conditions.forecast as {day, temperature, wind}}
        <li>
            <span class="day">Day {day}</span>
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
            .day {flex: 0 0 auto;}
            .temp {flex: 1; margin: 0 20px; opacity: 0.66;}
            .wind {flex: 0 0 auto;}
        }
    }
</style>
