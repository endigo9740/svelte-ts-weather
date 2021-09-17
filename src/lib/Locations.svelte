<script lang="ts">
    import { location } from "./../services/store";
    import { updateConditions } from "./../services/weather";

    const locationsArr: string[] = ['fort worth', 'dallas', 'cincinnati', 'pittsburgh', 'fort collins'];
    let customLocation: string;

    // Set & Update Location
    function setLocation(l: string): void {
        location.set(l);
        updateConditions();
        customLocation = undefined;
    };
    setLocation(locationsArr[0]);
    
    // Set Custom Location
    function setCustomLocation(): void {
        if (!customLocation) { return; }
        setLocation(customLocation.toLocaleLowerCase().trim());
    };
</script>
        
<section id="locations">
    <div id="search">
        <input bind:value="{customLocation}" type="text" placeholder="Another Location">
        <button on:click="{setCustomLocation}">&rarr;</button>
    </div>
    {#if locationsArr}
    <nav class="list">
        {#each locationsArr as l}
        <button on:click="{() => { setLocation(l) }}">{l}</button>
        {/each}
    </nav>
    {/if}
    <!-- <pre>Debug: {customLocation}</pre> -->
</section>

<style lang="scss" scoped>
    @import '../style-vars';
    #locations {
        #search {
            display: flex; align-items: flex-end;
            margin: -50px -50px 50px 0;
            input+button {margin-left: 20px;}
            input {
                flex: 1;
                background: none; padding: 0 0 20px;
                color: $colorWhite; font-size: inherit; line-height: inherit; font-weight: lighter;
                border: none; border-bottom: 1px solid $colorWhite33;
            }
            button {
                flex: 0 0 auto;
                font-size: 20px; line-height: 20px;
                background: rgba(255,255,255,0.9); color: $colorBlack; border: none; padding: 30px;
                &:hover, &:active, &:focus {background: $colorWhite;}
            }
        }
    }
</style>
