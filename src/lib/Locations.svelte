<script lang="ts">
    import { location, updateWeatherConditions } from "./../services/store";
    const locationsArr: string[] = ['dallas', 'london', 'paris'];

    function setLocation(l: string): void {
        location.set(l);
        updateWeatherConditions();
    };
    setLocation(locationsArr[0]);
</script>
        
<section id="locations">
    <h2>Locations</h2>
    {#if locationsArr}
    <nav class="list">
        {#each locationsArr as l}
        <button on:click="{() => { setLocation(l) }}">{l}</button>
        {/each}
    </nav>
    {/if}
</section>

<style lang="scss" scoped>
    // #locations {}
</style>
