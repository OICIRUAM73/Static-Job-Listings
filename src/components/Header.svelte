<div class="header">
  <div class="header-image"></div>
</div>

<style>
  .header {
    height: 150px;
    background-color: var(--desaturated-dark-cyan);
  }

  .header-image {
    height: 150px;
    background: url("../images/bg-header-desktop.svg") round center ;
  }

  @media(max-width: 480px) {
    .header-image {
      background: url("../images/bg-header-desktop.svg") right;
    }
  }
</style>