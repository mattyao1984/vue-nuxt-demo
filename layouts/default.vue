<template>
  <div class="pa1">
    <header>
      <nav class="top-nav code f3">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/new">New Stories</nuxt-link>
        <nuxt-link to="/jobs">Jobs</nuxt-link>
      </nav>
    </header>

    <div class="container">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<style lang="scss">
  .top-nav {
    background: #333;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    z-index: 9;
    justify-content: flex-end;
    align-items: center;

    a {
      margin: 0 10px;
      color: white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 30px;
  }
</style>

