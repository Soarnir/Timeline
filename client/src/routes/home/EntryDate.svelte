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
  .card-background {
      background-color: var(--primary);
      opacity: 5%;
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 6px;
      flex: 1;
      top: 0;
      left: 0;
  }
  #indEntryCont {
      width: 1000px; 
      margin: auto;
      padding-bottom: 10px;
      border-radius: 0.1rem;
  }
</style>