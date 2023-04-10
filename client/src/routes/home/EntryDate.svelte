<script lang="ts">

import Entry from "./Entry.svelte";

export let date;

</script>

<div id="indEntryCont" class="mb-4">
  <h1 class="text-center">{date.key}</h1>
  {#each date.value as entry}
    <Entry entry="{entry}" date="{date.key}"/>
  {/each}
</div>


<style>
  #indEntryCont {
      width: 1000px; 
      margin: auto;
      padding-bottom: 10px;
      border-radius: 0.375rem;
      background: rgba(171,171,171,0.66);
  }
</style>