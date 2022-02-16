<template>
  <div class="animate-inside" v-in-viewport.once>
    <h3 class="underlined-header__inverted">We invite you to Robonomics Academy</h3>
    <p class="form-p">1. Choose your role</p>
    <div class="form-role-wrapper">
      <div class="form-card-wrapper">
        <Checkbox :disabled=finished v-model="student" checked="student">Student</Checkbox>
        <p>MSc and Phd students in IoT and Robotics who want to discover a new technology stack</p>
      </div>
      <div class="form-card-wrapper">
        <Checkbox :disabled=finished v-model="researcher" checked="researcher">Researcher</Checkbox>
        <p>Young researchers looking for new horizons in the field of IoT</p>
      </div>
      <div class="form-card-wrapper">
        <Checkbox :disabled=finished v-model="owner" checked="owner">Owner IoT Project</Checkbox>
        <p>Fresh higher-ed graduates thinking about their own IoT project</p>
      </div>
    </div>
    <div class="form-inputs-container">
      <Input :disabled=finished v-model="email">2. Contact email</Input>
      <Input :disabled=finished v-model="additionalInfo">3. You may provide additional info</Input>
    </div>
    <div class="button-wrapper">
      <Button @click="sendForm" :loading=loading :finished=finished>Apply</Button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Form",
  components: {
    Input: () => import ("~/components/Input"),
    Checkbox: () => import("~/components/Checkbox"),
    Button: () => import("~/components/Button")
  },
  data: () => {
    return {
      student: false,
      researcher: false,
      owner: false,
      email: '',
      additionalInfo: '',
      loading: false,
      finished: false,
    }
  },
  methods: {
    sendForm() {
      let role = ''
      if (this.$data.student)
        role += 'student '
      if (this.$data.researcher)
        role += 'researcher '
      if (this.$data.owner)
        role += 'IoT owner'
      let request = ''
      request += `email=${this.$data.email}&additional_info=${this.$data.additionalInfo}&role=${role}`
      this.$data.loading = true
      axios
          .post(`https://script.google.com/macros/s/AKfycbxC1Rh0_lDevyLfhfcenPY5L0OucRICvHVdBuZqP_jc6W4yuspbXQb_1eKD-GGr3i0O/exec?${request}`,)
          .then(res => {
            this.$data.loading = false
            this.$data.finished = true
            console.log('local res')
            console.log(res)
          }).catch(e => {
        this.$data.loading = false
        console.log('local error')
        console.log(e)
      })
    }
  },
}
</script>

<style scoped>
.form-role-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 90px;
}

.form-card-wrapper {
  background-color: var(--color-light);
  padding: 14px 18px;
  border: 1px solid var(--color-gray-dark);
}

.form-card-wrapper > p {
  font-size: 1.2rem;
}

.form-inputs-container {
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  gap: 90px;
  margin-top: 60px;
}

.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.underlined-header__inverted + p {
  margin-top: 120px;
}

@media screen and (max-width: 1050px) {
  .form-role-wrapper {
    grid-template-columns: 1fr;
    gap: 50px;
  }

  .form-inputs-container {
    margin-top: 40px;
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

</style>