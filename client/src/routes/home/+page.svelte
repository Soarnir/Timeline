<script>
  import EntryInputContainer from "./EntryInputContainer.svelte";
  import EntryContainer from "./EntryContainer.svelte";

</script>

<div style="font-style: italic; font-size: 12px">
  <p class="text-center" style="margin: 0">This website supports <a href="https://commonmark.org/help/" target=”_blank”>markdown</a>!</p>
</div>

<div id="topDiv" class="bg-gradient align-content-center">
  <ul class="nav nav-tabs justify-content-center">
    <li class="nav-item" id="rapidTab">
      <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#rapidTabPanel"><span>Rapid</span></button>
    </li>
    <li class="nav-item" id="advancedTab">
      <button class="nav-link" data-bs-toggle="tab" data-bs-target="#advancedTabPanel"><span>Advanced</span></button>
    </li>
  </ul>

  <div class="tab-content">
    <div class="tab-pane fade show active" id="rapidTabPanel" role="tabpanel">
      <EntryInputContainer rapid={true} />
    </div>
    <div class="tab-pane fade" id="advancedTabPanel" role="tabpanel">
      <EntryInputContainer rapid={false} />
    </div>
  </div>
</div>

<div>
  <EntryContainer/>
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

<style>
  .nav-link {
      padding-left: 32px;
      padding-right: 32px;
      border-radius: 0;
      transform: skew(-30deg);
      --bs-nav-link-hover-color: none;
  }
  button > span {
      color: black;
      display: inline-block;
      transform: skew(30deg);
  }
</style>