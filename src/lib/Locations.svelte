<script lang="ts">
    import { location } from "./../services/store";
    import { updateConditions } from "./../services/weather";

    const locationsArr: string[] = ['dallas', 'fort worth', 'cincinnati', 'pittsburgh', 'fort collins'];
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
        setLocation(customLocation.toLowerCase().trim());
    };
</script>
        
<section id="locations">
    <div id="search">
        <input bind:value="{customLocation}" type="text" placeholder="Another Location">
        <button on:click="{setCustomLocation}"><span class="turn">&#9906;</span></button>
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
            input, button {font-size: inherit; line-height: inherit;}
            input {
                flex: 1;
                color: $colorWhite;
                background: none; padding: 0 0 20px;
                border: none; border-bottom: 1px solid $colorWhite33;
            }
            button {
                flex: 0 0 auto;
                color: $colorBlack; font-size: 28px; line-height: 28px; font-weight: normal;
                background: rgba(255,255,255,0.9); border: none; padding: 30px;
                &:hover, &:active, &:focus {background: $colorWhite;}
            }
        }
        .list button { display: block; width: 100%; text-align: left;}
    }
</style>
