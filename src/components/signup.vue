<template lang="html">
  <div class="container col-md-4">
    <h3>Sign Up</h3>
    <div class="form-group">
      <input
      type="text"
      placeholder=" email"
      class="form-control"
      v-model="email"
      />
      <br>
      <input
      type="password"
      placeholder=" password"
      class="form-control"
      v-model="password"
      />
      <br>
      <button class="btn btn-primary" v-on:click="signUp">Sign Up</button>
    </div>
    <br>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signin">Already a user? Sign In</router-link>

  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
  data() {
    return{
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error
      })
    }
  }
}
</script>

<style lang="css">
</style>
