<script>
  import axios from "axios";
  import { stores } from "@sapper/app";
  const { session } = stores();
  let username = "";
  let password = "";

  const submit = async () => {
    try {
      const { data: user } = await axios.post("/api/users/login", {
        username,
        password
      });
      session.set({ user: user.id });
    } catch (err) {
      console.error(err);
    }
  };
</script>

<style>
  div.login {
    margin: 200px auto auto auto;
    width: 400px;
    text-align: center;
    border: 1px solid #5c0d12;
    background: #edebdf;
    padding: 10px;
  }
  p {
    padding: 3px 1px;
    margin: 0;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .text-tag {
    flex: 1;
    display: flex;
  }
  .text-input,
  .text-tag div {
    flex: 1;
  }
  .halfer {
    text-align: left;
  }
</style>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="login">
  <p>Please enter your info to login.</p>
  <form method="POST">
    <div>
      <div class="row">
        <div class="text-tag">
          <div />
          <div class="halfer">
            <span>User*:</span>
          </div>
        </div>
        <div class="text-input">
          <input
            class="stdinput"
            type="text"
            name="username"
            bind:value={username} />
        </div>
      </div>
      <div class="row">
        <div class="text-tag">
          <div />
          <div class="halfer">
            <span>Password*:</span>
          </div>
        </div>
        <div class="text-input">
          <input
            class="stdinput"
            type="password"
            name="password"
            bind:value={password} />
        </div>
      </div>
      <div>
        <input
          class="stdbtn"
          type="submit"
          value="Login!"
          on:click|preventDefault={submit} />
      </div>
    </div>
  </form>
</div>
