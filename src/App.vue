


<template>
  <v-app id="App">

    
    <Navigation />
 
    <v-content>
      <router-view></router-view>


    </v-content>
    <v-bottom-navigation
    v-model="bottomNav"
    shift
  >
    <v-btn to="/" >
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>

    <v-btn to="/menu">
      <span>Gallery</span>
      <v-icon>image</v-icon>
    </v-btn>

    <v-btn to="/orders">
      <span>Order</span>
      <v-icon>assignment</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>About</span>
      <v-icon>info</v-icon>
    </v-btn>
     <v-btn to="/login">
      <span>Login</span>
      <v-icon>lock</v-icon>
    </v-btn>
    <v-btn to="/admin">
      <span>Admin</span>
      <v-icon>lock</v-icon>
    </v-btn>
  
  </v-bottom-navigation>
  
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';



  export default {
    components: {
      Navigation,

  },
   
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      bottomNav: 3,
      drawer: null,
      
    }),
    
  }
</script>

<style lang="scss">
  main {
    background-image: url('./assets/cssbackground.jpg');
    background-size: cover;
  }

  
  .col h1{
    border: 5px solid "secondary";
    padding: 5px;
    margin-bottom: 5px;
    color: "accent";
    font-weight: bold;
    text-transform: uppercase;
    font-size: 16px;
    text-align: right;
  }
  .col:last-child  h1{
    text-align: left;
  }
    #info {
        background-color: #ffffff;
    }


    
</style>