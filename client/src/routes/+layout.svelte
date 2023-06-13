<script>
	import '../app.scss';
  import 'bootstrap/js/dist/modal'
  import 'bootstrap/js/dist/button'
  import 'bootstrap/js/dist/tab'
  import Logo from '$lib/assets/logo.svelte'
</script>

<nav class="navbar navbar-expand-lg bg-body">
  <div class="container-fluid">
    <div class="navbar-brand">
      <Logo sizeX="200" sizeY="100" animated={false} />
    </div>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/admin">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<slot />


<!-- Global styles -->
<!--Primary: #ffffff (RGB: 255, 255, 255)-->
<!--Secondary: #00001c (RGB: 0, 0, 28)-->
<!--Primary Button: #0080ff (RGB: 0, 128, 255)-->
<!--Secondary Button: #c0c0c0 (RGB: 192, 192, 192)-->
<!--Accent: #80ffff (RGB: 128, 255, 255)-->


<style>
    :global(body) {
        background-color: var(--secondary);
    }
    :global(text) {
        color: var(--primary);
    }
    :global(button) {
        color: var(--primbuttn);
    }
</style>