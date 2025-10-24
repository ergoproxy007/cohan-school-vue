<template>
    <div class="px-1">
        <button :disabled class="button is-primary" @click="onSave">
            Crear
        </button>
    </div>
    <div class="px-2">
        <button :disabled class="button is-info" @click="onFind">
            Consultar
        </button>
    </div>
    <div class="px-2">
        <button :disabled class="button is-warning is-light" @click="onUpdate">
            Actualizar
        </button>
    </div>
    <div class="px-2">
        <button :disabled class="button is-light" @click="onClear">
            Limpiar
        </button>
    </div>
</template>

<script>
    export default {
        name: 'FormButtonActions',
        props: {
            disabled: { type: Boolean },
        },
        data() {
            return {
            }
        },
        methods: {
            onSave() {
                this.$emit('save')
            },
            onFind() {
                this.$emit('find')
            },
            onUpdate() {
                this.$emit('update')
            },
            onClear() {
                this.$emit('clear')
            }
        }
    }
</script>