<script>

</script>

<div id="entryInputContainer" class="container-fluid sticky-top">
  <div id="entryInput" class="row g-0 text-bg-dark">
    <div class="col-3">
      <div class="row g-0">
        <input id="entryDate" aria-label="Date" class="form-control text-bg-dark" placeholder="Date"
               type="date">
      </div>
      <div class="row g-0">
        <div class="form-floating">
                <textarea id="entryLocation" aria-label="Location" class="form-control text-bg-dark"
                          placeholder="Location"></textarea>
          <label for="entryLocation">Location</label>
        </div>
      </div>
    </div>
    <div class="col-6 g-0 h-100">
      <div class="form-floating">
                <textarea id="entryText" aria-label="Entry" class="form-control text-bg-dark"
                          placeholder="Entry"></textarea>
        <label for="entryText">Entry</label>
      </div>
    </div>
    <div class="d-grid gap-2 col-3">
      <button class="btn btn-outline-light" id="entryPreviewButton" data-bs-target="#previewModal" data-bs-toggle="modal">Preview Entry</button>
      <button class="btn btn-outline-light" id="entryButton">Create Entry</button>
    </div>
  </div>
</div>

<div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="previewModalLabel">Entry preview</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="markdownEntryPreview"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>