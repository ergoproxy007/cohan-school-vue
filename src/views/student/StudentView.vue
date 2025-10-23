<template>
  <main>
    <PanelFomsContainer>
      <template #icon><DocumentationIcon /></template>
      <template #heading><h1 class="sub-title">Registro Estudiante</h1></template>
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

<style scoped>
  .sub-title {
    font-size: 1.7rem;
    color:#00BD7E;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }
</style>