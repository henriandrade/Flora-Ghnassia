<script lang="ts">
  import Webflow from "@public/webflow/index.html?raw";
  import WebflowExport from "@/WebflowExport.svelte";
</script>

<main>
  {@html Webflow}
  <WebflowExport />
</main>
