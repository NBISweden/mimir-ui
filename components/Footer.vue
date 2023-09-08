<template>
<a href="https://nbis.se">
    <footer class="nbisfooter">
      <img class="logo" src="/nbislogo-green.svg" alt="NBIS logo">
      <div>National Bioinformatics Infrastructure Sweden</div>
    </footer>
</a>
</template>

<style scoped>
  .nbisfooter {
    display: flex;
    flex-direction: column;
    flex-shrink: 2;
    gap: 0.5rem;
    align-items: center;
    background-color: inherit;
    text-align: center;
  }
  .logo {
    width: 100px;
    height: auto;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  </style>
