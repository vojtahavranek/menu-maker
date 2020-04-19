<template>
  <v-app dark>
    <TopMenu />
    <v-container id="main-container" fluid>
      <nuxt />
    </v-container>
    <BottomMenu />
  </v-app>
</template>

<script>
import TopMenu from '~/components/layout/TopMenu'
import BottomMenu from '~/components/layout/BottomMenu'

export default {
  name: 'MainLayout',
  components: { BottomMenu, TopMenu }
}
</script>

<style lang="scss" scoped>
#main-container {
  max-width: 600px;
}
</style>
