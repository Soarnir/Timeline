<script lang="ts">
  import { afterUpdate } from "svelte";

  export let inputLabel = ''
  export let inputText = ''
  export let rapid;
  let minHeight = 0;
  let height = 0;

  afterUpdate(() => {
    // DOM updated
    if (minHeight === 0) {
      minHeight = document.getElementById('entryInputContainer').clientHeight;
      console.log("set height to: " + minHeight)
    }
    height = document.getElementById('entryTextArea').scrollHeight
    if (height <= minHeight) {
      height = minHeight
    }
    console.log("setting height: " + height)
    document.getElementById('entryTextArea').setAttribute(
      "style",
      "height:" + height + "px;overflow-y:hidden;"
    );
  })

</script>

{#if !rapid}
  <div class="form-floating">
  <textarea id="entryTextArea" bind:value={inputText} aria-label="Entry" class="form-control"
            placeholder="Entry"></textarea>
    <label for="entryTextArea">{inputLabel}</label>
  </div>
{:else if (rapid)}
  <div class="form-floating">
    <input id="entryTextInput" bind:value={inputText}  aria-label="Entry" class="form-control"
           placeholder="Entry"/>
    <label for="entryTextInput">{inputLabel}</label>
  </div>
{/if}



<style>
    #entryTextArea {
        border-radius: 0;
        border-color: transparent;
        background-color: slategray;
        color: black;
        min-height: 91px;
        outline: none;
        --bs-btn-active-border-color: none;
    }

    #entryTextInput {
        border-radius: 0;
        border-color: transparent;
        background-color: lightslategray;
        color: black;
        outline: none;
        --bs-btn-active-border-color: none;
    }

    #entryTextArea:focus, #entryTextInput:focus {
        border-color: transparent;
        --bs-btn-active-border-color: none;
    }

</style>