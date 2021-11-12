<template>
  <header class="header">
    <div class="left-side">
      <button class="burger__button">
        <span class="burger"></span>
      </button>
      
      <h2 class="page__title">Dashboard</h2>
    </div>
    <div class="list">
      <select name="Actions" id="actions">
        <option disabled>Actions</option>
        <option value="email">user e-mail</option>
        <option value="logout">Log Out</option>
      </select>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 0;
  background: #1290a7;
  color: #fff;
  
  .left-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;

    .page__title {
      margin: 0 20px;
      padding: 0;
    }

    .burger__button {
      display: flex;
      background: none;
      align-items: center;
      height: 30px;
      width: 30px;

      .burger {
        position: relative;
        display: block;
        height: 2px;
        width: 22px;
        background: #fff;
      }
      
      .burger::before, .burger::after {
          position: absolute;
          display: block;
          width: 22px;
          height: 2px;
          background: #fff;
          left: 0;
      }
      .burger::before {
        top: -4px;
      }
      .burger::after{
        top: 4px;
      }
    }
  }
}
</style>