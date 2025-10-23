<template>
    <div class='columns is-multiline is-mobile'>

      <div class='column is-half'>
        <b-field
          id="fieldset-title"
          label="Documento"
          :message="errors.name"
          :type="errors.name ? 'is-danger' : ''"
        >
          <b-input
            trim
            id="name-input"
            :required="true"
            placeholder="Documento"
            v-model="model.dni"
            @blur="validateField('dni', 'Documento')"
            @input="validateField('dni', 'Documento')"
          />
        </b-field>
      </div>

      <div class='column is-half'>
        <b-field
          id="fieldset-title"
          label="Nombre"
          :message="errors.name"
          :type="errors.name ? 'is-danger' : ''"
        >
          <b-input
            trim
            id="name-input"
            :required="true"
            placeholder="Nombre Completo"
            v-model="model.name"
            @blur="validateField('name', 'Nombre')"
            @input="validateField('name', 'Nombre')"
          />
        </b-field>
      </div>

  </div>
</template>

<script>

export default {
  name: 'StudentForm',
  props: {},
  data() {
    return {
      model: {
        name: '',
        dni: '',
      },
      errors: {
        name: ''
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