<template>
  <v-app dark>
    <TopMenu />
    <nuxt />
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

<style lang="scss" scoped></style>
