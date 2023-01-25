<script>
  import EntryInputContainer from "./EntryInputContainer.svelte";
  import EntryInput from "./EntryInput.svelte";

</script>

<div id="topDiv" class="bg-gradient align-content-center">
  <ul class="nav nav-tabs justify-content-center">
    <li class="nav-item">
      <button class="nav-link" data-bs-toggle="tab" data-bs-target="#basicTabPanel">Basic</button>
    </li>
    <li class="nav-item">
      <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#advancedTabPanel">Advanced</button>
    </li>
  </ul>

  <div class="tab-content">
    <div class="tab-pane fade" id="basicTabPanel" role="tabpanel">
      <EntryInput/>
    </div>
    <div class="tab-pane fade show active" id="advancedTabPanel" role="tabpanel">
      <EntryInputContainer/>
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