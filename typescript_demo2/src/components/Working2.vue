<template>
  <div class="hello">
    <form @submit.prevent="onSubmit">
      <div>
        <Label>First Name</Label>
        <input v-model="fName" placeholder="F R"/>
      </div>
      <div>
        <Label>Last Name</Label>
        <input v-model="lName" placeholder="S"/>
      </div>
      <div>
        <Label>Twitter Handle</Label>
        <input v-model="twitterHandle" placeholder="Nothing"/>
      </div>
      <div>
        <Label>City</Label>
        <input v-model="city" placeholder="Banani"/>
      </div>
      <div>
        <Label>State</Label>
        <input v-model="state" placeholder="Dhaka"/>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
import { Component, Vue } from 'vue-property-decorator';
import { User } from './User';

// @Component
export default Vue.extend({
  data() {
    return {
      user: {} as User,
      fName: '',
      lName: '',
      twitterHandle: '',
      city: '',
      state: '',
    }
  },
  methods: {
    onSubmit() {
      console.log(this.fName)
    }
  },
  computed: {
    fullName(): string { // Computed Property returns a string
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  mounted() {
    this.user = {
      firstName: 'F.R.',
      lastName: 'Summit',
      twitterHandle: '@frsummit',
      location: {
        city: 'Mymensingh',
        state: 'Dhaka'
      }
    }
  }
})


</script>

<style scoped>
form {
  width: 40%;
  margin: 0 auto;
}
form div {
  margin: 10px;
}
label {
  width: 30%;
  margin-right: 10px;
  display: inline-block;
}
input {
  width: 60%;
  display: inline-block;
}
</style>
