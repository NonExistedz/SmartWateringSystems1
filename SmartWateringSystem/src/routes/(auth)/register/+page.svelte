<script>
  export let form;
</script>

<div class="container">
  <link rel="stylesheet" href="/CSS/signup.css">

  <div class="col-left">
      <div class="info-left"></div>
  </div>
  <div class="col-right">
      <div class="logo">Easy to register</div>
      <div class="form">
          <form name="signup" method="post">
              {#if form?.mismatch}<p class="error">The password does not match</p>{/if}
              {#if form?.exists}<p class="error">E-mail already in-use</p>{/if}
              <input type="email" name="email" placeholder="email" class="email">
              <input type="password" name="password" placeholder="password" class="password" required>
              <input type="password" name="confirm-password" placeholder="confirm password" class="confirm_password" required>
              <input type="submit" value="REGISTER" class="button">
          </form>
          <a href="/login"><input type="submit" value="SIGN IN" class="button"></a>
      </div>
      <!-- <div class="forget"><a href="forget.html">Forgot your password?</a></div> -->
  </div>
</div>