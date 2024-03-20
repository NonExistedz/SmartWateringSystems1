<script>
  export let form;
  let pw = '', pwConfirm = ''
</script>
<link rel="stylesheet" href="/CSS/profile.css">



<!-- -------------------------------------------Ead Head------------------------ -->

<div class="container-fluid" style="margin-right: 0%">
  <div class="row content" style="background-color: black;">
      <div class="profile flex justify-center">
          <img src="/Image/Ellipse 5.png" class="mt-8" alt="" style="width: 200px; height: 200px;">
    </div>
    <center>
        <div class="container">
            <div class="information">
                <div class="form-container">
                    <form method="POST">
                      {#if form?.invalid}<p class="error">Invalid password</p>{/if}
                      {#if form?.success}<p class="error">Successfully changed password</p>{/if}
                      <input type="password" name="password-old" placeholder="old password" class="password" required>
                      <input type="password" name="password-new" placeholder="new password" class="password" bind:value={pw} required>
                      <input type="password" name="password-new-confirm" placeholder="confirm new password" class="confirm_password" bind:value={pwConfirm} required>
                      <input type="submit" value="SAVE" class="button mt-4">
                    </form>
                </div>
            </div>
        </div>
    </center>
  </div>
</div>