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

     <div class='column is-full'>
        <b-field label="Email" class="top-padding">
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
        label="Número"
        class="top-padding"
      >
        <b-numberinput
           id="number-input"
           placeholder="número"
          icon-pack="far"
          icon="address-book"
           :controls="false"
           v-model="model.number"
        >
        </b-numberinput>
      </b-field>
    </div>

    <div class='column is-half'>
      <b-field
        label="Nota Promedio"
        class="top-padding"
      >
        <b-numberinput
          id="average-mark-input"
          placeholder="ej: 3.5"
          icon-pack="far"
          icon="star"
          step="0.1"
          :controls="false"
          v-model="model.averageMark"
        >
        </b-numberinput>
      </b-field>
    </div>

    <div class="buttons is-right top-padding-2">
      <div class="px-1">
        <button class="button is-primary" @click="$router.go(-1)">
          Crear Estudiante
        </button>
      </div>
      <div class="px-2">
        <button class="button is-light" @click="$router.go(-1)">
          Limpiar
        </button>
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
</style>

<script>
  import FormInput from '../../components/form/FormInput.vue'

  export default {
    name: 'StudentForm',
    components: {
      FormInput,
    },
    props: {},
    data() {
      return {
        model: {
          name: '',
          dni: '',
          phoneNumber: '',
          email: '',
          averageMark: null,
          number: null,
        },
        errors: {
        },
      }
    },
    methods: {
      validateField(field, label) {
        const value = this.model[field]?.trim()
        this.checkError(value, field, label)
      },
      checkError(value, field, label) {
        if (!value) {
          this.errors[field] = `${label} es obligatorio`
        } else {
          this.errors[field] = ''
        }
      },
    }
  }
</script>