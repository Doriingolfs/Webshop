<template>
    <v-container>
        <v-row>
            <v-col offset-md="1" md="6">
                <h1>Orders</h1>
                <div class="pa-2" id="info" >
                    <v-row class="ma-0">
                        <v-col cols="12" md="1" class="pa-2">
                            <p class="font-weight-bold body-1 pl-1 #292930--text">
                                INFO:
                            </p>
                        </v-col>
                         <v-col cols="12" md="5" class="pa-2 pl-5">
                            <v-row align="center">
                                <div id="status_box" class="success">COMPLETED</div>
                                <span class="font-weight-light caption pl-1"> Done </span>
                            </v-row>
                            <v-row align="center">
                                <div id="status_box" class="warning">IN-PROGRESS</div>
                                <span class="font-weight-light caption pl-1"> Working on it </span>
                            </v-row>
                            <v-row align="center">
                                <div id="status_box" class="error">NOT STARTED</div>
                                <span class="font-weight-light caption pl-1"> Not started yet </span>
                            </v-row>
                        </v-col>
                         <v-col cols="12" md="6" class="pa-2">
                             <v-row>
                                <div id="status_box" class="success">COMPLETED</div>
                                <div id="status_box" class="warning">IN-PROGRESS</div>
                                <div id="status_box" class="error">NOT STARTED</div>
                             </v-row>
                             <v-row>
                                <p class="font-weight-light caption pl-1">
                                    <b>Single-click</b> to switch stage: complete => in progress => 
                                    <b>Double-click</b> the box to reset to "not started"
                                </p>
                                <span class="font-weight-light caption pl-1">
                                    <v-icon color="grey">archive</v-icon>
                                    Archive to "hide" it from orders list
                                </span>
                             </v-row>
                        </v-col>
                    </v-row>




                </div>
                <!-- Orders List Area -->
                <div class="pa-2 mt-1" id="info">
                    <p class="font-weight-bold body-1 pa-3 #292930--text">
                        ORDERS:
                    </p>
                    <v-simple-table id="menu-table">
                        <template v-slot:default>
                          <thead>
                            <tr>
                                <th class="text-left" style="width: 10%">Order Nr.</th>
                                <th class="text-left" style="width: 10%">Quantity</th>
                                <th class="text-left" style="width: 40%">Item</th>
                                <th class="text-left" style="width: 10%">Price</th>
                                <th class="text-left" stlye="width: 10%">Status</th>
                                <th class="text-left" style="width: 10%">Archive Item</th>
                                <th class="text-left" style="width: 10%">Remove</th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-light">
                            <tr v-for="item in storeOrderTest" :key="item.name">
                                <td>
                                    {{ item.orderNumber }}
                                </td>
                                <td class="py-3">
                                    <p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">
                                       {{ subItem.quantity }}
                                    </p>  
                                </td>
                                <td class="py-3">
                                    <p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">
                                        {{ subItem.name }}
                                    </p> 
                                </td>
                                <td class="py-3">
                                    <p style="margin:0;" v-for="subItem in item.orderLines" :key="subItem.id">
                                       {{ subItem.price }}
                                    </p> 
                                </td>
                                <td>
                                    <div id="status_box" v-bind:class="item.status" @click="switchStage(item.id)">
                                        {{ item.status }}
                                    </div>
                                </td>
                                <td>
                                    <v-btn small text @click="archiveOrderItem(item.id)">
                                        <v-icon color="secondary">
                                            archive
                                        </v-icon>
                                    </v-btn>
                                </td>
                                <td>
                                    <v-btn small text @click="deleteOrderItem(item.id)">
                                        <v-icon color="error">
                                            delete
                                        </v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                </div>
            </v-col>
            <v-col offset-md="0" md="4">
                <h1>Revenue</h1>
                <div class="pa-2" id="info">
                    <p class="font-weight-bold body-1">Completed Orders: </p>
                    <div>
                        <p id="totalOrders">Total Orders: 
                            <span class="error--text font-weight-bold">
                                {{orderItems.length}}
                            </span>
                        </p>
                    </div>
                    <div id="revenueList" v-for="item in itemArchiveTest" :key="item.name">
                        <p> Order Number: 
                            {{item.orderNumber}}        
                            <v-btn small text @click="deleteOrderItem(item.id)">
                                <v-icon color="error">delete</v-icon>
                            </v-btn>              
                        </p>
                    </div>
                </div>
                <div class="pa-2 mt-1" id="info">
                    <div id="totalRevenue">
                        <p id="totalRevenueText">
                            Total Revenue: <span id="totalRevenueTextTotal">{{revenueTotal}}</span>
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
//eslint-disable-next-line
  import { dbOrders } from '../firebase';
    export default {
    data () {
      return {
        basketDump: [],
        
      }
    },

   beforeCreate() {
      this.$store.dispatch('setOrderItems')
    },

    methods: {
        switchStage(id) {
            let selectedOrderItem = this.orderItems
            .filter(item => item.id === id)[0];
            if (selectedOrderItem.status === "inprogress") {
                dbOrders.doc(id).update({status:"complete"})
                .then(() => { 
                })
            }
            else if (selectedOrderItem.status === "incomplete") {
                dbOrders.doc(id).update({status:"inprogress"})
                .then(() => { 
            })
            }
            else if (selectedOrderItem.status === "complete") {
                dbOrders.doc(id).update({status:"incomplete"})
                .then(() => { 
                })
            }
        },
        archiveOrderItem(id) {
            dbOrders.doc(id).update({archive: true, storeOrder: true})
            .this(() => {})
        },
        deleteOrderItem(id) {
            dbOrders.doc(id).delete().then(() => {
                console.log("Stuff is deleted");
            }).catch(() => {
                
            })
        },

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
    }
    },
    computed: {
        itemArchiveTest() {
            return this.itemArchiveTest.filter(aItem => aItem.storeOrder == false)
        },

        storeOrderTest() {
            return this.orderItems.filter(oItem => oItem.storeOrder == false)
        },

        basket() {
            return this.$store.getters.getBasketItems
        },
        orderItems() {
            return this.$store.getters.getOrderItems
        },
        recenueTotal() {
            var revenueIncome = 0;
            this.orderItem.forEach(element => {
                if (element.archive == true) {
                    element.orderLines.forEach(elem => {
                    revenueIncome += elem.price * elem.quantity
                })
                }    
            });
            return revenueIncome
        }
        }
  }
</script>

<style scoped>
    #status_box {
        display: flex;
        justify-content: center;
        height: 35px;
        width: 90px;
        font-size: 12px;
        border-radius: 2px;
        margin: 5px 0;
        color: white;
        text-shadow: 1px 1px 1px #aaa;
    }

    #totalRevenue {
        padding: 20px 10px 20px 0;
        display: flex;
    }
    #totalRevenueText {
        display: flex;
        margin: 0;
        justify-content: space-between;
        font-style: italic;
        width: 100%;
    }
    #totalRevenueTextTotal {
        text-decoration: underline;
        font-weight: bold;
        font-style: normal;
    }

</style>