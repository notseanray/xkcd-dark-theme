<script lang="ts">
    import { onMount } from "svelte";
    import { count } from "./store.ts";
    import { latest_xkcd, specific_xkcd } from "./xkcd.ts";
    let current;
    let max;
    onMount(async () => {
        const comic = await latest_xkcd()
        count.set(comic.num);
        max = comic.num;
        current = comic;
        document.title = `${current.safe_title} - ${current.num}`;
    });
    count.subscribe(async (v) => {
        if (v > 0 && v <= max) {
            current = await specific_xkcd(v);
            document.title = `${current.safe_title} - ${current.num}`;
        }
    });
</script>

<main>
    {#if current}
        <div class="comic-title">
            {current.title} (#{current.num})
        </div>
        <div class="xkcd">
            <div class="comic-wrapper">
                <div class="comic-image">
                    <img decoding="async" src={current.img} alt={current.alt} />
                </div>
            </div>
            <br />
            <div class="extra">
                {current.alt}
                <br />
                {current.day}/{current.month}/{current.year}
                <br />
                {current.news}
            </div>
        </div>
        <div class="centered">
            <div class="controls">
                <button on:click|preventDefault={() => count.set(1)}>
                    First
                </button>
                <button on:click|preventDefault={() => {
                    if ($count > 10) {
                        count.set($count - 10);
                    }
                }}>
                    Go back 10
                </button>
                <button on:click|preventDefault={() => {
                    if ($count > 1) {
                        count.decrement();
                    }
                }}>
                    Previous
                </button>
                <a href={`https://xkcd.com/${current.num}`} target="_blank">original</a>
                <button on:click|preventDefault={() => {
                    if ($count < max) {
                        count.increment();
                    }
                }}>
                    Next
                </button>
                <button on:click|preventDefault={() => {
                    if ($count <= max - 10) {
                        count.set($count + 10);
                    }
                }}>
                    Go forward 10
                </button>
                <button on:click|preventDefault={count.set(max)}>
                    Last
                </button>
            </div>
        </div>
        <!-- <input type="number"> </input> -->
    {/if}
</main>

<style>
    main {
        text-align: center;
        max-width: 50%;
        color: white;
    }
    .controls {
        position: fixed;
        justify-content: center;
    }
    .centered {
        display: flex;
        justify-content: center;
    }
    .xkcd {
       -webkit-filter: invert(1);
       filter: invert(1);
   }
   .comic-wrapper {
        display: flex;
        justify-content: center;
   }
   .comic-image {
        display: flex;
        justify-content: center;
       max-width: 500px;
       max-height: 500px;
   }
   .comic-title {
        color: #ff3e00;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 5px;
        margin-top: 5px;
    }
    .extra {
        text-align: center;
        color: blue;
        display: flex;
        justify-content: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
