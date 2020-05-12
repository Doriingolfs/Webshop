import Vue from 'vue'
import Vuex from 'vuex'
import { dbMenuAdd } from '../firebase'
import { dbOrders } from '../firebase'

//import { db } from '../firebase'
//eslint-disable-next-line
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    counter: 1,
    basketItems: [
   
    ],

    menuItems: [
   
    ],
    orderItems: [
      {
        /*      
        orderNr: 1,
        name : "name 1",
        price: 230,
        quantity: 2,
        status: "inprogress" 
        */
       }
    ],
    currentUser: null
  },
  mutations: {
    // delete order item
   /*
    deleteOrderItem: (state, item) => {
      
      dbOrders.doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch(function(error) {
      });
    },
    */
    // Testing checkout upload
    //eslint-disable-next-line
    addCheckoutItem: (state , basketItems) => {
      dbOrders.add({
        archive: false, 
        storeOrder: false, 
        orderNumber: state.counter++,
        status: "incomplete" ,
        orderLines: state.basketItems
      })
    
    
    },
    addBasketItems: (state, basketItems) => {
      if(basketItems instanceof Array) {
        basketItems.forEach(item => {
          if(state.basketItems.find(itemInArray => item.name === itemInArray.name)) {
            item = state.basketItems.find(itemInArray => item.name === itemInArray.name);
            item.quantity++
          }
          else {
            state.basketItems.push({
              name: item.name,
              price: item.price,
              quantity: 1
            })
            console.log("basketitem", basketItems)
          }
        })
      } 
    },
    userStatus (state, user) {
      if(user) {
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    },
    // IMport firebase
    setMenuItems: state => {
      let menuItems = []
 
      dbMenuAdd.onSnapshot((snapshotItems) => {
        menuItems = []  // empty it, or it will duplicate the stuff on delete
        snapshotItems.forEach((doc) => {
          var menuItemData = doc.data();
          menuItems.push({ 
            // Spread operator istedet for at gøre det for hvert enkelte
            ...menuItemData, // spread operator - grabbing all the items (person, due, title, content, etc)
            id: doc.id 
          })
         // console.log("Test:", menuItemData, "id: ", doc.id)
        })
        state.menuItems = menuItems
      })
    },
    setOrderItems: state => {
      let orderItems = []
 
      dbOrders.onSnapshot((snapshotItems) => {
        orderItems = []
        snapshotItems.forEach((doc) => {
          var orderItemData = doc.data();
          orderItems.push({ 
          
            ...orderItemData, 
            id: doc.id 
          })
        })
        state.orderItems = orderItems
      })
    }
  },
  actions: {
    setCheckoutItem(context) {
      context.commit('addCheckoutItem')
    },
    setUser(context, user) {  
  //  setUser({ commit }, user) {
      context.commit('userStatus', user)
      // commit('userStatus', user)
    },
    setMenuItems: context => {
      context.commit('setMenuItems')
    },
    setOrderItems: context => {
      context.commit('setOrderItems')
    }
  },
  getters: {
    getBasketItems: state => state.basketItems,
    currentUser: state => state.currentUser,
    getMenuItems: state => state.menuItems,
    getOrderItems: state => state.orderItems
  }
})
