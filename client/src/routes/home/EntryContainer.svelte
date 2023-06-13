<script lang="ts">
import EntryDate from "./EntryDate.svelte";
import { writable } from "svelte/store";

type entryMapType = Map<string, entryInterface[]>;
interface entryInterface {
  title: string;
  info: string;
}

export let entryMap: entryMapType = new Map();

entryMap.set("2023-01-02", [{ title: "Fun times", info: "They were indeed fun" }, { title: "Fun but not times", info: "Mostly fun but one thing ruined it all, ducks!" }])
entryMap.set("2023-01-01", [{ title: "Sad times", info: "Very sad" }, { title: "Somewhat better", info: "Slightly better after" }])
entryMap.set("2023-01-03", [{ title: "Melancholy times", info: "Indifferent I shall be" }, { title: "Still melancholy", info: "Screw it all!" }])

const entryMap2 = writable(entryMap)

//TODO optimizations
//IDEA: preload array of set size with db calls (eg 100)
//Within bounds of scroll (eg 25 from bottom or top) if array not at start or end begin loading next entries from db
//Depopulate array of scrolled past entries beginning from extremes, populate array with new entries.
//Maintain set size to reduce unnecessary db calls and loading
//Cache either closest 100 entries to today or from when leaving website

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