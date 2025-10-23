<template>
  <main>
    <PanelFomsContainer>
      <template #icon><DocumentationIcon /></template>
      <template #heading>Registro Estudiante</template>
      <StudentForm :model="model" />
    </PanelFomsContainer>
  </main>
</template>

<script>
  import PanelFomsContainer from '../../components/PanelFomsContainer.vue'
  import DocumentationIcon from '../../components/icons/IconDocumentation.vue'
  import StudentForm from '../../components/student/StudentForm.vue'

  export default {
    name: 'StudentView',
    components: {
      PanelFomsContainer,
      DocumentationIcon,
      StudentForm,
    },
    data() {
      const model = {
        "title": "",
        "done": false,
        "assignee_id": ""
      }
      return { model }
    },
  }
</script>