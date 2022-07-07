<script lang="ts">
  import Router from "svelte-spa-router";
  import { routes } from "../utils/routes";
  import { link } from "svelte-spa-router";
</script>

<main>
  <Router {routes} />

  <ul class="pb-12 text-2xl">
    <li><a href="/" use:link>Home</a></li>
    <li><a href="/about" use:link>About</a></li>
    <li><a href="/book/321" use:link>Dummy page</a></li>
  </ul>
</main>
