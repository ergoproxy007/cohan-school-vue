<template>
    <div class='columns is-multiline is-mobile is-gapless'>

      <FormInput
        label="Documento"
        id="dni"
        type="text"
        placeholder="documento"
        icon="id-card"
        v-model="model.dni"
        :error="errors.dni"
        required
        @validate="validateField"
      />

      <div class='column is-half'>
        <b-field
          label="Celular"
          :message="errors.phoneNumber"
          :type="errors.phoneNumber ? 'is-danger' : ''"
        >
          <b-input
            id="phone-number-input"
            placeholder="ej: 3004445555"
            type="tel"
            minlength="10"
            maxlength="13"
            icon-pack="far"
            icon="user"
            v-model="model.phoneNumber"
          />
        </b-field>
      </div>

      <FormInput
        label="Nombre"
        id="name"
        type="text"
        placeholder="nombre completo"
        column-size="is-full"
        v-model="model.name"
        :error="errors.name"
        required
        @validate="validateField"
     />

     <div class='column is-half'>
        <b-field label="Email" class="top-padding right-padding">
          <b-input
            id="email-input"
            placeholder="ej: dantr@cohan.com"
            type="email"
            icon-pack="far"
            icon="envelope"
            v-model="model.email"
          />
        </b-field>
     </div>
     
    <div class='column is-half'>
      <b-field
        label="Salario"
        class="top-padding"
      >
        <b-numberinput
          id="number-input"
          placeholder="salario"
          icon-pack="far"
          icon="heart"
          :controls="false"
          :min="0"
          :max="999999999"
          v-model="model.salary"
        >
        </b-numberinput>
      </b-field>
    </div>

    <div class="buttons is-right top-padding-2">
      <FormButtonActions
        @save="saveStudent"
        @find="findStudent"
        @update="updateStudent"
        @clear="clearForm"
        :disabled="true"
      />
      <div class="px-2" v-if="isLoading">
        <VueSpinner size="40" />
      </div>
    </div>
  </div>
</template>

<style scoped>
    .top-padding {
        padding-top: 1rem;
    }
    .top-padding-2 {
        padding-top: 2rem;
    }
    .right-padding {
        padding-right: 2rem;
    }
</style>

<script>
  import FormInput from '../../components/form/FormInput.vue'
  import FormButtonActions from '../../components/form/FormButtonActions.vue'
  import StudentService from '../../services/StudentService.js'
  import Util from '../../services/util.js'
  import Dialog from '../../services/dialog.js'
  import { VueSpinner } from 'vue3-spinners'

  export default {
    name: 'TeacherForm',
    components: {
      FormInput,
      FormButtonActions,
      VueSpinner,
    },
    props: {},
    data() {
      return {
        model: this.initModel(),
        errors: {},
        isLoading: false,
      }
    },
    methods: {
      initModel() {
        return {
          id: '',
          name: '',
          dni: '',
          phoneNumber: '',
          email: '',
          salary: null,
        };
      },
      validateField(field, label) {
        const value = this.model[field]?.trim()
        if (value) {
          this.checkError(value, field, label)
        }
      },
      checkError(value, field, label) {
        if (!value) {
          this.errors[field] = `${label} es obligatorio`
          this.model[field] = this.model[field]?.trim()
        } else {
          this.errors[field] = ''
        }
      },
      async findTeacher() {
      },
      saveTeacher() {
      },
      async updateTeacher() {
      },
    }
  }
</script>