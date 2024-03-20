<script>
    export let form;
</script>

<link rel="stylesheet" href="/CSS/signin.css">
<div class="container">
    <div class="col-left">
        <div class="info-left"></div>
    </div>
    <div class="col-right">
        <div class="logo">Welcome to dashboard</div>
        <div class="form">
            <form name="signin" method="post">
                {#if form?.invalid}<p class="error">Invalid email or password</p>{/if}
                <input type="email" name="email" id="email" placeholder="email" class="email" required>
                <input type="password" name="password" id="password" placeholder="password" class="password" required>
                <input type="submit" value="SIGN IN" class="button">
            </form>
        <a href="/register"><input type="submit" value="SIGN UP" class="button"></a>
        </div>
        <!-- <div class="forget"><a href="forget.html">Forget your password?</a></div> -->
    </div>
</div>