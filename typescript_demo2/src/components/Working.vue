<template>
  <div class="hello">
    <h3>{{ firstName }}</h3>
    <h3>{{ lastName }}</h3>
    <h3>{{ fullName }}</h3>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { Component, Vue } from 'vue-property-decorator';
// import { User } from './User';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg !: string
  firstName = 'F. R.'
  lastName = 'Summit'

  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  created() {
    console.log('created')
  }
  mounted() {
    console.log('mounted')
  }
}


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
