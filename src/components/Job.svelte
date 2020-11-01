<script>
  import { activeFilters } from '../store/store.js';

  export let id;
  export let logo;
  export let company;
  export let isNew;
  export let featured;
  export let position;
  export let postedAt;
  export let contract;
  export let role;
  export let level;
  export let languages;
  export let tools;
  export let location;

  const handleFilter = (filter) => {
    activeFilters.update( current => {
      current.add(filter);
      return current;
    });
  }
</script>

<style>
  .container {
    margin-bottom: 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 5px 20px -10px var(--dark-grayish-cyan);
    width: 100%;
    box-sizing: border-box;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 30px 30px 45px;
  }

  .logo {
    display: flex;
  }
  .logo img {
    width: 90px;
    height: 90px;
  }
  .main {
    display: flex;
    flex-direction: row;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    text-align: left;
  }

  .container.featured {
    border-left: 5px solid var(--desaturated-dark-cyan);
  }

  .container.featured .content {
    padding-left: 40px;
  }
  .company {
    color: var(--desaturated-dark-cyan);
    font-weight: 600;
    font-size: 16px;
  }
  
  .featured-chip,
  .new {
    color: white;
    font-weight: 600;
    padding: 10px 10px 8px 10px;
    border-radius: 15px;
    font-size: 12px;
  }
  .new {
    background: var(--desaturated-dark-cyan);
    margin-left: 20px;
  }
  .featured-chip {
    background: #2c3c3c;
    margin-left: 5px;
  }
  .position {
    font-weight: bold;
    font-size: 21px;
    margin-top: 15px;
    cursor: pointer;
  }
  .position:hover {
    color: var(--desaturated-dark-cyan);
  }
  .profile {
    color: var(--dark-grayish-cyan);
    margin-top: 15px;
    text-align: left;
  }
  .profile ul {
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: disc;
    padding: 0;
    display: flex;
    list-style-position: outside;
  }

  .profile ul li:first-child {
    display: inline-block;
  }

  .profile ul li:not(:first-child) {
    margin-left: 34px;
    padding-left: 10px;
  }
  .tags {
    display: flex;
  }
  .tags ul {
    display: flex;
    list-style-type: none;
  }
  .tags ul li {
    cursor: pointer;
    color: var(--desaturated-dark-cyan);
    font-weight: 700;
    font-size: 15px;
    margin-right: 15px;
    padding: 10px;
    background-color: var(--light-grayish-background);
    border-radius: 4px;
  }
  .tags ul li:hover,
  .tags ul li.active {
    color: var(--light-grayish-background);
    background-color: var(--desaturated-dark-cyan);
  }

  @media(max-width: 480px) {
    .container {
      padding: 30px 15px 0px 15px;
      margin-bottom: 40px;
    }

    .main, 
    .content {
      flex-direction: column;
      width: 100%;
    }

    .container.featured .content,
    .content {
      padding-left: 0;
      padding: 0;
    }

    .logo {
      transform: translateY(-115%);
      position: absolute;
    }
    .logo img {
      width: 45px;
      height: 45px;
    }
    .info {
      margin-left: 0;
    }
    .company {
      font-size: 13px;
    }
    .new {
      margin-left: 15px;
    }
    .new,
    .featured-chip {
      font-size: 11px;
      padding: 6px 6px 5px 6px;
    }

    .position {
      font-size: 15px;
    }

    .profile {
      margin-top: 15px;
      border-bottom: 1px solid #c7cac9;
      padding-bottom: 15px;
    }

    .profile ul li {
      font-size: 12px;
    }

    .profile ul li:not(:first-child) {
      margin-left: 20px;
      padding-left: 0px;
    }

    .tags {
      width: 100%;
    }

    .tags ul {
      display: block;
      padding: 0;
      position: relative;
      width: 100%;
      text-align: left;
      margin-top: 15px;
    }
    .tags ul>li {
      display: inline-block;
      margin-left: 0;
      margin-right: 15px;
      margin-bottom: 10px;
      font-size: 13px;
      padding: 7px;
      font-weight: 700;
    }

  }
</style>

<div class="container" data-id={id} class:featured>
  <div class="content">
    <div class="main">
      <div class="logo">
        <img src={logo} alt={company}>
      </div>
      <div class="info">
        <div class="relevance">
          <span class="company">{company}</span>
          {#if isNew}
            <span class="new">NEW!</span> 
          {/if}
          {#if featured}
             <span class="featured-chip">FEATURED</span>
          {/if}
        </div>
        <div class="position">
          <span>{position}</span>
        </div>
        <div class="profile">
          <ul>
            <li>{postedAt}</li>
            <li>{contract}</li>
            <li>{location}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tags">
      <ul>
        <li on:click={handleFilter(role)} class:active={$activeFilters.has(role)} >{role}</li>
        <li on:click={handleFilter(level)} class:active={$activeFilters.has(level)}>{level}</li>
        {#each languages as language}
          <li on:click={handleFilter(language)} class:active={$activeFilters.has(language)}>{language}</li>
        {/each}
        {#each tools as tool}
          <li on:click={handleFilter(tool)} class:active={$activeFilters.has(tool)}>{tool}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>