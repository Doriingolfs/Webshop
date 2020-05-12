<template>
    <div>
    <v-navigation-drawer
        color="secondary"
        v-model="drawer"
        app>
        <div>
        <h4></h4>
        </div>
        <ul>
            <router-link tag="li" to="/" id="textColor"> <v-icon color="#6f828a">home</v-icon> Home</router-link>
            <router-link tag="li" to="/menu" id="textColor"> <v-icon color="#6f828a">image</v-icon> Gallery</router-link>
            <router-link tag="li" to="/about" id="textColor"> <v-icon color="#6f828a">info</v-icon> About</router-link>
            <router-link tag="li" to="/orders" id="textColor"> <v-icon color="#6f828a">assignment</v-icon> Orders</router-link>
            <router-link tag="li" to="/login" id="textColor"> <v-icon color="#50574c">lock</v-icon> Login</router-link>
            <router-link tag="li" to="/admin" id="textColor"> <v-icon color="#50574c">lock</v-icon> Admin</router-link>

             
        </ul>



        </v-navigation-drawer>

        

        <v-app-bar app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title class="headline">
            <span>Art by </span>
            <span class="font-weight-light">Dóri Design</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
            <v-btn icon>
                <v-badge left color="success"></v-badge>
                <span slot="badge"></span>
                <router-link to="/cart" id="textColor"> <v-icon color="#50574c">shopping_cart</v-icon></router-link>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script >
    

    import Vue from "vue";

    export default Vue.extend({
            data: () => ({
      drawer: null,
    }),
    computed: {
       
    }
    });
</script>

<style scoped>
    nav ul {
        padding: 0;
        margin-top: 20px;
        text-decoration: none;

    }
    nav li {
        color:white;
        margin-left: 35%;
        padding: 5px 20px;
        list-style-type: none;
        cursor:pointer;
    }

    nav li i  {
        margin-right: 10px;
    }
    nav li:last-child {
        position: absolute;
        bottom: 40px;

    }

    #textColor {
        color: #bebebe;
    }



    
</style>