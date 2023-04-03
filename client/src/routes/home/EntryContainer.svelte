<script>
import Entry from "./Entry.svelte";

let entries = [
  { name: "thing", info: "info" },
  { name: "thing", info: "info" },
  { name: "thing", info: "info" },
  { name: "thing", info: "info" },
  { name: "thing", info: "info" }
]
</script>


<div id="entryDiv" class="justify-content-center">
  {#each (entries) as entry}

    <Entry entry="{entry}"/>

  {/each}
</div>


<style>
    #entryDiv {
        padding-left: 50px;
        padding-right: 50px;
        margin-top: 20px;
    }
</style>