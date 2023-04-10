<script lang="ts">
  import EntryInput from "./EntryInput.svelte";
  import DOMPurify from "dompurify";
  import { marked } from "marked";



  export let entryMap
  let formattedText = ''
  let inputText = ''
  let append: boolean
  let currentDate = new Date(Date.now()).toISOString().slice(0, 10)
  export let rapid: boolean

  function previewEntry() {
    formattedText = DOMPurify.sanitize(marked.parse(inputText))
    document.getElementById('markdownEntryPreview').innerHTML = formattedText
  }

  function handleSubmit() {
    console.log("submitting")
    let mappedDate = entryMap.get(currentDate)
    console.log(mappedDate)
    if (mappedDate !== undefined) {
      let intermediary = mappedDate
      intermediary.add({title:"Title 1", info:inputText})
      entryMap.set(currentDate, intermediary)
    } else {
      entryMap.set(currentDate, [{title:"Title 1", info:inputText}])
    }
    console.log(entryMap)
  }
</script>

<div id="entryInputContainer" class="container-xl sticky-top bg-transparent">
  <form on:submit|preventDefault={handleSubmit} id="entryInput" class="row g-0 justify-content-center">
    {#if !rapid}
      <div class="col-2">
        <div class="row g-0">
          <input id="entryDate" aria-label="Date" class="form-control" placeholder="Date"
                 type="date">
        </div>
        <div class="row g-0">
          <div class="form-floating">
                  <textarea id="entryLocation" aria-label="Location" class="form-control"
                            placeholder="Location"></textarea>
            <label for="entryLocation">Location</label>
          </div>
        </div>
      </div>
      <div class="col-8 g-0 h-100">
        <EntryInput {rapid} bind:inputText inputLabel="Entry"/>
      </div>
      <div class="col-2">
        <div class="row g-0">
          <button class="btn btn-outline-secondary form-control" type="button" id="entryPreviewButton"
                  on:click={previewEntry} data-bs-target="#previewModal" data-bs-toggle="modal">Preview Entry</button>
        </div>
        <div class="row g-0">
          <button class="btn btn-outline-secondary form-control" type="button" id="entryButton">Create Entry</button>
        </div>
      </div>
    {:else if (rapid)}
      <div class="col-8 g-0 h-100">
        <EntryInput {rapid} bind:inputText inputLabel="Press enter to create entry for today"/>
      </div>
    {/if}
  </form>
</div>

<style>
    #entryButton, #entryPreviewButton {
        max-height: 50px;
    }
    
    .form-control {
        border-radius: 0;
        min-height: 50px;
    }
</style>