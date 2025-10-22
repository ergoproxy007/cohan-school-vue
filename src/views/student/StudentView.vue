<script setup>
import PanelFomsContainer from '../../components/PanelFomsContainer.vue'
import SupportIcon from '../../components/icons/IconSupport.vue'
</script>

<template>
  <main>
    <template>
      <p>Student View</p>
    </template>

    <PanelFomsContainer>
      <template #icon><SupportIcon /></template>
      <template #heading>Support Vue</template>
      <p>
        As an independent project, Vue relies on community backing for its sustainability.
        You can help us by
        <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
      </p>
  </PanelFomsContainer>
  </main>
</template>
