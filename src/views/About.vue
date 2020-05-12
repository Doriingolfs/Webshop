<template>
  <v-container grid-list-xs>
    <v-layout align-center class="info_box">
      <v-flex sm10 xs12 offset-sm1>
        <h1>
          Who is Dóri Design?
        </h1>
      </v-flex>
    </v-layout>  
    <v-layout align-center class="info_box" row wrap>
      <v-flex sm3 xs12 offset-sm2 class="about">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
        </div>  
      </v-flex>
      <v-flex sm4 xs12 offset-sm3 class="image">
        <div>

        </div>
      </v-flex> 
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .container .layout h1{
    border: 5px solid white;
    padding: 5px;
    margin-bottom: 5px;
    color: "secondary";
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: right;
    color: white;
  }
  .container .layout p {
    background-color: white;
    padding: 15px;
    margin-bottom: 5px;
    color: "secondary";
    font-size: 16px;
    text-align: left;
    color: secondary;
  }
  .layout:first-child {
    height: 20vh;
  }

  .info_box .flex h1 {
    height: 100px;
    padding-top: 30px;
  }
  .image {
    height: 350px;
    background-image: url('../assets/businessman.jpg');
    background-size: contain;
  }
</style>