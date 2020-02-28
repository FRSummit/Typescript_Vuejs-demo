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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { User } from './User';

@Component
export default class HelloWorld extends Vue {
  // @Prop() private msg!: string;
  data() {
    return {
      user: {} as User
    }
  }
  mounted() {
    this.user = {}
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
