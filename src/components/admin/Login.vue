<template>
    <v-container>

        <v-row>
            <v-col offset-md="3" md="6" xs="12">
                <h1 class="admin">Admin login</h1>
                <div id="info">
                    <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    >

                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="password"
                        required
                    >

                    </v-text-field>
                    <v-btn
                        color="#3eb650"
                        @click.prevent="signIn()"
                    >
                        Login
                    </v-btn>
                    <v-btn
                        color="#e12b38"
                        @click.prevent="signOut()"
                    >
                        SignOut
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script >

import firebase from 'firebase'
import 'firebase/firestore'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signIn() {
               firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                   this.$router.replace('/admin')
               })
               .catch(function(error) {
                   var errorCode = error.code;
                   var errorMessage = error.message;
                   if (errorCode === 'auth/wrong-password') {
                       alert ("Wrong password")
                   } else {
                       alert (errorMessage)
                   }
                   console.log(error)
               })
            },
            signOut() {
                firebase.auth().signOut().then(() => {
                    alert('Logged out');
                    this.$router.replace('/')
                }).catch(error => {
                    alert(error)
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
#info {
    padding: 20px;
    background-color: white;


}
.admin {
    border: 3px solid white;
    color: white;
}
</style>