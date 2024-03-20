<script>
  export let data;
  function logout() {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location = '/login'
  }
</script>

<div>
  <nav class="flex justify-between bg-[#181C25] items-center">
    <a style="margin-left: 15px;" href="/" class="flex items-center">
        <img src="/Image/logo.png" alt="" style="width: 50px; margin: 10px;">
        <img src="/Image/Name.png" alt="" style="height: 25px;">
    </a>
    <p>Smart Watering Dashboard, Unlock Your Unlimited Potential Today</p>
  
    <div class="dropdown">
      <div class="flex items-center">
        <button style="background-color: #181C25;">{data.email}</button>
        <img src="https://www.freeiconspng.com/download/14960" class="w-10 mr-4" alt="settings">
      </div>
      <div class="dropdown-options flex-col absolute right-0 hidden [.dropdown:hover_&]:flex">
        <a href="profile">Account</a>
        <a href="about-us">About Us</a>
        <button on:click={logout} type="button">Logout</button>
      </div>
    </div>
  </nav>
  
  <div class="h-full">
    <slot />
  </div>
</div>