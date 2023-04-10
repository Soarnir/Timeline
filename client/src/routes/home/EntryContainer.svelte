<script lang="ts">
import EntryDate from "./EntryDate.svelte";
import { writable } from "svelte/store";

type entryMapType = Map<string, entryInterface[]>;
interface entryInterface {
  title: string;
  info: string;
}

export let entryMap: entryMapType = new Map();

entryMap.set("2023-01-02", [{ title: "Entry title", info: "Entry text" }, { title: "Entry title", info: "Entry text" }])
entryMap.set("2023-01-01", [{ title: "Entry title", info: "Entry text" }, { title: "Entry title", info: "Entry text" }])
entryMap.set("2023-01-03", [{ title: "Entry title", info: "Entry text" }, { title: "Entry title", info: "Entry text" }])

const entryMap2 = writable(entryMap)

let entryArray = Array.from($entryMap2, ([key, value]) => ({ key, value }))

entryArray.sort((a, b) => (new Date(b.key) - new Date(a.key)));

$: {
  entryArray = Array.from($entryMap2, ([key, value]) => ({ key, value }));
  entryArray.sort((a, b) => (new Date(b.key) - new Date(a.key)));
}

</script>


<div id="entryDiv" class="justify-content-center">
  {#each entryArray as date}
    <EntryDate date={date}/>
  {/each}
</div>


<style>
    #entryDiv {
        padding-left: 50px;
        padding-right: 50px;
        margin-top: 20px;
    }
</style>