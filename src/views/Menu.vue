<template>
    <v-container>
        <v-row>
            <v-col offset-md="1" md="9">
                <h1>Art Pieces</h1>
                <div class="pa-2" id="info" >
                    <v-simple-table id="menu-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" style="width: 100px;">Art</th>
                              <th class="text-left" stlye="width: 70%">Art Name</th>
                              <th class="text-left" style="width: 100px;">Price</th>
                              <th class="text-left" style="width: 100px;">Add to cart</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in menuItems" :key="item.name">
                              <td id="td_menuitem_img">
                                <v-img v-bind:src="item.image"></v-img>
                              </td>
                              <td>
                                <span id="td_name"> {{ item.name }} </span> <br> 
                                <span id="menu_item_description"> {{ item.description }} </span> 
                              </td>
                              <td>{{ item.price }} kr.</td>
                              <td>
                                  <v-btn small text @click="addToBasket(item)">
                                      <v-icon color="orange">
                                          add_box
                                      </v-icon>
                                  </v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//eslint-disable-next-line
  import { dbMenuAdd } from '../firebase';
    export default {
    data () {
      return {
        basketDump: [],
        
      }
    },

   beforeCreate() {
      this.$store.dispatch('setMenuItems')
    },

    methods: {
      addCheckOutItem() {
        this.$store.dispatch('setCheckOutItem')
      },
      addToBasket(item) {
        this.basketDump.push({
          name: item.name,
          price: item.price,
          quantity: 1
      });
      this.$store.commit('addBasketItems', this.basketDump);
      this.basketDump = [];
    },
    increaseQtn(item) {
        item.quantity++
    },
    decreaseQtn(item) {
      item.quantity--;
      if( item.quantity === 0 ) {
        this.basket.splice(this.basket.indexOf(item), 1)
      }
    }
    },
    computed: {
      basket() {
     
       return this.$store.getters.getBasketItems
      },
       menuItems() {
        return this.$store.getters.getMenuItems
      },
      subTotal () {
        var subCost = 0;
        for(var items in this.basket) {
            var individualItem = this.basket[items];
            subCost += individualItem.quantity * individualItem.price;
        }
        return subCost
        },
      total () {
          var deliveryPrice = 10;
          var totalCost = this.subTotal;
          return totalCost + deliveryPrice
      }
    }
  }
</script>

<style>
.col h1{
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
  .col:last-child  h1{
    text-align: left;
  }


    #emptyBasket {
      justify-content: center;
      text-align: center;
      margin: 0;  
    }

    tr th {
        font-weight: 300;
    }
    #td_name {
        font-weight: bold;
    }

    tr td {
        padding: 10px 10px 10px 16px;
    }

    #menu_item_description {
      font-style: italic;
      font-weight: 300;
      font-size: 13px;
    }

    #td_menuitem_img {
      max-width: 40px;
      max-height: 40px;
      padding: 0;
    }

    #basket_checkout {
        font-size: 13px;
    }
    #basket_checkout p:first-child {
        line-height: 2px;
    }




 .products{
        margin-top: 7rem;
        
        padding-bottom: 3rem;
    }
</style>