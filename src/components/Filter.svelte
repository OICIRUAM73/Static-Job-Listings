<script>
  import { activeFilters } from '../store/store.js';

  const handleRemove = (filter) => {
    activeFilters.update( current => {
      current.delete(filter);
      return current;
    });
  }
  
  const clearFilters = () => {
    activeFilters.update( current => {
      return new Set();
    });
  };

</script>

<style>

  .filter-container {
    padding-left: 12%;
    padding-right: 12%;
    justify-content: center;
    display: flex;
    background-color: transparent;
    margin-bottom: -65px;
  }
  .content {
    background-color: white;
    width: 100%;
    padding: 30px 30px 30px 45px;
    transform: translateY(-50%);
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    box-shadow: 0px 5px 20px -10px var(--dark-grayish-cyan);
  }
  .filters {
    display: flex;
    padding: 0;
    margin: 0;
  }
  .filter {
    display: flex;
  }
  .filter span {
    color: var(--desaturated-dark-cyan);
    font-weight: 700;
    font-size: 15px;
    padding: 10px;
    background-color: var(--light-grayish-background);
    border-radius: 3px 0px 0px 3px;
  }
  .remove {
    display: inline-flex;
    height: 37px;
    background-color: var(--desaturated-dark-cyan);
    align-items: center;
    width: 37px;
    justify-content: center;
    cursor: pointer;
    border-radius: 0px 3px 3px 0px;
    margin-right: 15px;
  }
  .remove:hover {
    background-color: black;
  }
  .clear {
    color: var(--dark-grayish-cyan);
    font-weight: bold;
    display: flex;
    cursor: pointer;
  }
  .clear:hover {
    color: var(--desaturated-dark-cyan);
    text-decoration: underline;
  }
  .clear span {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
  @media(max-width: 480px) {
    .filter-container {
      padding-left: 6%;
      padding-right: 6%;
      margin-bottom: -30px;
    }

    .content {
      padding: 15px 15px 5px 15px;
      transform: translateY(-35%);
    }

    .filters {
      display: block;
      width: 100%;
    }

    .filter {
      display: inline-block;
      margin-bottom: 10px;
    }

    .filter span {
      font-size: 13px;
      font-weight: bold;
      margin-left: 0;
      padding: 5px;
    }
    .remove {
      height: 23px;
      width: 23px;
    }
    .remove img {
      width: 10px;
      height: 10px;
    }
    .clear span {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
</style>

{#if $activeFilters.size != 0}
  <div class="filter-container">
    <div class="content">
      <ul class="filters">
        {#each Array.from($activeFilters) as filter}
          <li class="filter">
            <span>{filter}</span>
            <div class="remove" on:click={handleRemove(filter)}>
              <img src="images/icon-remove.svg" alt="remove" width="15" height="15">
            </div>
          </li>
        {/each}
        </ul>
      <div class="clear">
        <span on:click={clearFilters}>Clear</span>
      </div>
    </div>
  </div>
{/if}