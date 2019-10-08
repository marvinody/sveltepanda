<script>
  import axios from "axios";
  import { stores } from "@sapper/app";
  const { session } = stores();
  export let segment;
  $: user = $session.user;
  $: home = segment === undefined;
  $: login = segment === "login";
  $: register = segment === "register";

  const logout = () => {
    axios.post("/api/users/logout");
    session.set({ user: undefined });
  };
</script>

<nav id="nb">
  <a class={home ? 'selected' : ''} rel="prefetch" href="/">Front Page</a>
  {#if user}
    <a href="/" on:click={logout}>Logout</a>
  {:else}
    <a class={login ? 'selected' : ''} rel="prefetch" href="/login">Login</a>
    <a class={register ? 'selected' : ''} rel="prefetch" href="/register">
      Register
    </a>
  {/if}
</nav>
