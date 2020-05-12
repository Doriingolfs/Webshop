<template>
    <v-container>
        <v-row>
            <v-col offset-md="2" md="8">
                <h1>Current Basket</h1>
                <div class="pa-2" id="info">
                    <v-simple-table id="menu-table" v-if="basket.length > 0">
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-left" stlye="width: 30%">Quantity</th>
                              <th class="text-left" style="width: 30%;">Art</th>
                              <th class="text-left" style="width: 30%;">Art Name</th>
                              <th class="text-left" style="width: 10%;">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="item in basket" :key="item.name">
                              <td>
                                <v-icon color="orange" @click="increaseQtn(item)">add_box</v-icon>
                                    {{item.quantity}}
                                <v-icon color="orange" @click="decreaseQtn(item)">indeterminate_check_box</v-icon>
                              </td>
                              <td>{{ item.image }}</td>
                              <td>{{ item.name }}</td>
                              <td>{{ item.price }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>

                      <v-simple-table id="emptyBasket" v-else>
                          <p>The basket is empty</p>
                      </v-simple-table>

                      <v-divider></v-divider>
                      <v-row id="basket_checkout" class="mt-4" style="margin:0;" color="#cae7df">
                          <v-col>
                            <p>Subtotal:</p>
                            <p>Delivery:</p>
                            <p>Total amount:</p>
                          </v-col>
                          <v-col class="text-right">
                              <p> {{ subTotal }} DKK</p>
                              <p>10 DKK</p>
                              <p><b> {{total}}  DKK</b></p>
                          </v-col>
                      </v-row>
                      <v-row style="margin:0;">
                        <v-spacer></v-spacer>
                        <v-btn color="#3eb650" @click="addCheckOutItem()">Checkout</v-btn>
                      </v-row>
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
        this.$store.dispatch('setCheckoutItem')
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

<style lang="scss" scoped>
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