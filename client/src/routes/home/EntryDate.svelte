<script lang="ts">

import Entry from "./Entry.svelte";

export let date;

</script>

<div id="indEntryCont" class="mb-4">
  <h1 class="text-center" id="dateTitle">{date.key}</h1>
  {#each date.value as entry}
    <Entry entry="{entry}" date="{date.key}"/>
  {/each}
</div>


<style>
  #dateTitle {
      color: var(--primary);
  }
  #indEntryCont {
      width: 1000px; 
      margin: auto;
      padding-bottom: 10px;
      border-radius: 0.1rem;
  }
</style>