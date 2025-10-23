<template>
  <div :class="`column with-padding ${columnSize}`">
    <b-field :class="columnSize === 'is-half' ? 'with-padding' : 'no-padding'"
      :id="`fieldset-${id}`"
      :label="label"
      :message="error"
      :type="error ? 'is-danger' : ''"
    >
      <b-input
        trim
        :type="number"
        :id="`${id}-input`"
        :required="required"
        :placeholder="placeholder"
        v-model="internalValue"
        icon-pack="far"
        :icon="icon"
        @blur="onValidate"
        @input="onValidate"
      />
    </b-field>
  </div>
</template>

<style scoped>
    .with-padding {
        padding-right: 0.8rem;
    }
    .no-padding {
        padding: 0;
    }
</style>

<script>
    export default {
        name: 'FormInput',
        props: {
            id: { type: String, required: true },
            type: { type: String, default: 'text' },
            label: { type: String, required: true },
            icon: { type: String, default: 'eye' },
            columnSize: { type: String, default: 'is-half' },
            placeholder: { type: String, default: '' },
            required: { type: Boolean, default: false },
            modelValue: { type: [String, Number], default: '' },
            error: { type: String, default: '' },
        },
        emits: ['update:modelValue', 'validate'],
        computed: {
            internalValue: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                },
            },
        },
        methods: {
            onValidate() {
            this.$emit('validate', this.id, this.label)
            },
        },
    }
</script>
