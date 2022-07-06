<script lang="ts">
  import { onMount } from "svelte";
  import TailwindCss from "./TailwindCSS.svelte";
  let profileData;

  const loadProfileData = () => {
    profileData = window.authApi.getDataFromLocalStorage();
  };

  onMount(async () => {
    // Get user data base64 string from url and save it to localStorage
    const _url = new URL(window.location.toString());
    const userDataParam = _url.searchParams.get("user_data");
    if (userDataParam) window.authApi.processAuth(userDataParam);

    loadProfileData();
  });

  const login = () => {
    window.authApi.login();
  };
  const logout = () => {
    window.authApi.logout();
    window.location.reload();
  };
</script>

<main>
  <TailwindCss />
  <p class="text-gray-600 text-4xl mt-32">
    Hello from the frame app :) {profileData?.name || profileData?.email || ""}
  </p>

  <div><button on:click={login}>login</button></div>
  <div><button on:click={logout}>logout</button></div>
</main>
