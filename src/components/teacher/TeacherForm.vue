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
        @save="saveTeacher"
        @find="findTeacher"
        @update="updateTeacher"
        @clear="clearForm"
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
  import TeacherService from '../../services/TeacherService.js'
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
        try {
          this.clearError()
          this.validateField('dni', 'Documento')
          if (this.errors.dni || !this.model.dni) {
            Dialog.showDialog(this.$buefy, 'Consultar', 'El Documento es obligatorio', 'is-info')
          } else {
            await this.find()
          }
        } catch(error) {
          console.error(error)
          this.errorDialog('Ocurrió un error al consultar el profesor', 'SERVER_ERROR')
        }
      },
      async find() {
        this.setLoading(true)
        try {
          const response = await TeacherService.get(this.model.dni)
          const dataResponse = Util.keysToCamelCase(response.data)
          this.model = dataResponse
        } catch(error) {
          console.error(error)
          this.errorDialog('Ocurrió un error al consultar el profesor', 'SERVER_ERROR')
        } finally {
          this.setLoading(false)
        }
      },
      saveTeacher() {
        try {
          const data = {
            dni: this.model.dni,
            name: this.model.name,
            phoneNumber: this.model.phoneNumber,
            email: this.model.email,
            salary: this.model.salary,
          };
          const isValid = this.isValidDataForm(data)
          if (isValid) {
            this.create(data)
          } else {
            const messages = Object.values(this.errors).filter(m => m)
            this.showFormError(messages)
          }
        } catch(error) {
          console.error(error)
          this.errorDialog('Ocurrió un error al guardar el profesor', 'CLIENT_ERROR')
        }
      },
      create(data) {
        const payload = Util.toSnakeCase(data)
        try {
          this.setLoading(true)
          TeacherService.create(payload)
            .then(response => {
              console.log(`response: ${response.data}`)
              this.clearForm()
              Dialog.showDialog(this.$buefy, 'Crear', 'Profesor creado exitosamente')
            })
            .catch(error => {
              this.handleError(error)
            })
            .finally(() => {
              this.setLoading(false)
            });
        } catch (error) {
          this.setLoading(false)
          console.error(error)
          this.errorDialog('Ocurrió un error al guardar el profesor', 'SERVER_ERROR')
        }
      },
      async updateTeacher() {
        if (!this.model.id) {
          this.errorDialog('No se ha consultado un profesor para actualizar', 'Actualizar')
        } else {
          this.setLoading(true)
          try {
            const data = {
              id: this.model.id,
              dni: this.model.dni,
              name: this.model.name,
              phoneNumber: this.model.phoneNumber,
              email: this.model.email,
              salary: this.model.salary,
            };
            const isValid = this.isValidDataForm(data)
            if (isValid) {
              await this.update(data)
            } else {
              const messages = Object.values(this.errors).filter(m => m)
              this.showFormError(messages)
            }
          } catch(error) {
            console.error(error)
            this.errorDialog('Ocurrió un error al actualizar el profesor', 'SERVER_ERROR')
          } finally {
            this.setLoading(false)
          }
        }
      },
      async update(data) {
        const payload = Util.toSnakeCase(data)
        const response = await TeacherService.update(data.id, payload)
        Dialog.showDialog(this.$buefy, 'Actualizar', response.data.message)
      },
      handleError(error) {
        if (TeacherService.checkAxiosError(error)) {
          Util.handleError(error, this.errorDialog)
        } else {
          Util.handleGenericError(error, this.errorDialog)
        }
      },
      isValidDataForm(data) {
        try {
          let isValid = true
          this.validateField('dni', 'Documento')
          if (this.errors.dni || !data.dni) {
            isValid = false
          }
          this.validateField('name', 'Nombre')
          if (this.errors.name || !data.name) {
            isValid = false
          }
          if (data.email) {
            const emailOk = this.validateEmail(data.email)
            isValid = emailOk
          }
          return isValid
        } catch(error) {
          console.error(error)
          this.errorDialog('Ocurrió un error al validar los datos', 'UNKNOWN_ERROR')
          return false
        }
      },
      validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
          this.errors.email = 'Email invalido'
          return false
        }
        this.errors.email = ''
        return true
      },
      showFormError(messages) {
        if (messages.length > 0) {
          const messageError = `<span>Validar los siguientes campos:<br> <b>${messages.join('<br>')}</b></span>`
          this.errorDialog(messageError)
        }
      },
      errorDialog(messageError, title = 'Error') {
        this.$buefy.dialog.alert({
          title: title,
          message: messageError,
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true,
        })
      },
      clearForm() {
        this.model = this.initModel()
      },
      clearError() {
        this.errors = {}
      },
      setLoading(load) {
        this.isLoading = load
      },
    }
  }
</script>