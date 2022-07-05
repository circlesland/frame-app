<script lang="ts">
  import TailwindCss from "./TailwindCSS.svelte";
  const login = () => {
    window.authApi.login();
  }
  const logout = () => {
    window.authApi.logout();
  }
</script>

<main>
  <TailwindCss />
  <p class="text-gray-600 text-4xl mt-32">
    Hello from the frame app :)asd
  </p>

  <button on:click={login}>login</button>
  <button on:click={logout}>logout</button>
</main>
