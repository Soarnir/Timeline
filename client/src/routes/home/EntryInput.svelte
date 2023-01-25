<script>
  import {afterUpdate} from 'svelte'

  export let inputText = ''

  function resizeTextarea(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  afterUpdate(() => {
    // DOM updated
    let height = document.getElementById('entryText').scrollHeight
    if (height < document.getElementById('entryInputContainer').scrollHeight) {
      height = document.getElementById('entryInputContainer').scrollHeight
    }

    document.getElementById('entryText').setAttribute(
      "style",
      "height:" + height + "px;overflow-y:hidden;"
    );
    document.getElementById('entryText').addEventListener("input", resizeTextarea);
  })

</script>

<div class="form-floating">
                <textarea id="entryText" bind:value={inputText} aria-label="Entry" class="form-control"
                          placeholder="Entry"></textarea>
  <label for="entryText">Entry</label>
</div>


<style>
    #entryText {
        border-radius: 0;
        height: 91px;
    }


</style>