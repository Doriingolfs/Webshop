<template>
  <v-layout row wrap>
    <v-row>
      <v-col sm12 xs12 offset-sm2>
          <div class="title">
              Go to Gallery to see our Artpiece
          </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs-12">
        <v-carousel hide-delimiters id="carousel" class="cara">
          <v-carousel-item extends v-img
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row> 
      <v-col>
        <div id="button">
          <router-link tag="btn" to="/menu" id="textColor"> 
            <v-btn>
              <v-icon color="#6f828a">images</v-icon>
              Gallery
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>  
  </v-layout>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/webshop-d22d1.appspot.com/o/Products%2Fchanged4.png?alt=media&token=ec7fa492-cd68-486c-ab8d-445500fed88a',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/webshop-d22d1.appspot.com/o/Products%2FEsbjerg.png?alt=media&token=e33e50d5-33f3-4596-8783-42f50889f67f',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/webshop-d22d1.appspot.com/o/Products%2Fchanged1.png?alt=media&token=31a59267-ca48-45e5-b050-a723f9c40af6',
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/webshop-d22d1.appspot.com/o/Products%2Fchanged3.png?alt=media&token=95ad2e63-5f01-4a04-8064-01fca1b13371',
          },
        ],
      }
    },
  }
</script>
<style lang="scss">
  .cara, .cara .v-window__container, .cara .v-carousel__item { 
    height: 100vh !important;
    max-width: 100vw !important;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 50px;
    color: white;
    font-size: 2em;
    padding: 20px;
    font-style: bold;
  }
  #button {
    right: 47%;
    left: 47%;
    transform: translate(-50%, -50%);
    margin: 5px;
  }
</style>