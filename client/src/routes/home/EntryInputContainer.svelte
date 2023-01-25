<script>
  import EntryInput from "./EntryInput.svelte";
  import DOMPurify from "dompurify";
  import { marked } from "marked";

  let formattedText = ''
  let inputText = ''

  function previewEntry() {
    formattedText = DOMPurify.sanitize(marked.parse(inputText))
    document.getElementById('markdownEntryPreview').innerHTML = formattedText
  }
</script>

<div id="entryInputContainer" class="container-xl sticky-top bg-transparent">
  <div id="entryInput" class="row g-0">
    <div class="col-3">
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
    <div class="col-6 g-0 h-100">
      <EntryInput bind:inputText/>
    </div>
    <div class="d-grid gap-2 col-3">
      <button class="btn btn-outline-secondary form-control" type="button" id="entryPreviewButton" on:click={previewEntry} data-bs-target="#previewModal" data-bs-toggle="modal">Preview Entry</button>
      <button class="btn btn-outline-secondary form-control" type="button" id="entryButton">Create Entry</button>
    </div>
  </div>
</div>

<style>
    .form-control {
        border-radius: 0;
        min-height: 50px;
    }
</style>