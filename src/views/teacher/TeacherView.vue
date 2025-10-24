<template>
   <main>
    <PanelFomsContainer>
      <template #icon><CommunityIcon /></template>
      <template #heading><h1 class="sub-title">Registro Profesor</h1></template>
      <TeacherForm :model="model" />
    </PanelFomsContainer>
  </main>
</template>


<script>
  import PanelFomsContainer from '../../components/PanelFomsContainer.vue'
  import CommunityIcon from '../../components/icons/IconCommunity.vue'
  import TeacherForm from '../../components/teacher/TeacherForm.vue'

  export default {
    name: 'TeacherView',
    components: {
      PanelFomsContainer,
      CommunityIcon,
      TeacherForm,
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