<template>
  <v-container>
    <DataFilter />
    <CNPJFilter />
    <CPFFilter />
    <BooleanFilter />
  </v-container>
</template>

<script>
  import DataFilter from '../components/DataFilter'
  import CNPJFilter from '../components/CNPJFilter'
  import CPFFilter from '../components/CPFFilter'
  import BooleanFilter from '../components/BooleanFilter'
  export default {
    name: 'Main',
    components: {
      CNPJFilter,
      DataFilter,
      CPFFilter,
      BooleanFilter,
    },
    data: () => ({

    }),
  }
</script>

<style>
  .result {
    border-left: 1px solid black
  }
</style>
