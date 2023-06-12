<script lang="ts">
  export let entry = {};
  export let date = "";
</script>

<div id="EntryCard" class="card mb-3" style="width: 800px; margin: auto">

  <div class="card-header">
    <h4 class="card-title">{entry.title}</h4>
    <h6 class="card-subtitle text-body-secondary">{date}</h6>
  </div>

  <div class="card-body">
    <div class="card-text">{entry.info}</div>
  </div>

  <div class="card-footer">Footer</div>

</div>

<style>
  #EntryCard {
      color: var(--secbuttn);
      background-color: var(--secbuttn);
      opacity: 1;
      border-radius: 1rem;
  }
</style>