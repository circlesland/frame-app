<script lang="ts">
  import { onMount } from "svelte";
  import TailwindCss from "./TailwindCSS.svelte";
  import { ethers } from "ethers";

  let profileData;
  let address: string;

  const loadProfileData = async () => {
    profileData = window.authApi.getDataFromLocalStorage();

    if (profileData?.privateKey) {
      const privateKey = "0x" + profileData.privateKey;
      const wallet = new ethers.Wallet(privateKey);
      address = wallet.address;
      const signature = await wallet.signMessage("my awesome message");
      console.log("signed msg", signature);
      // const signingKey = new ethers.utils.SigningKey(privateKey);
    }
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

  {#if address}
    <p>Address: {address}</p>
  {/if}

  <div><button on:click={login}>login</button></div>
  <div><button on:click={logout}>logout</button></div>
</main>
