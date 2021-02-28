<template>
  <v-container>
    <v-card>
      <v-card-title>Filtro de CPF</v-card-title>
      <v-card-text>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Tipo do dado
                </th>
                <th class="text-left">
                  Valor do dado
                </th>
                <th class="text-center result">
                  Resultado do Filtro
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) of results"
                :key=index
              >
                <td>{{typeof item.value }}</td>
                <td>{{ item.value}}</td>
                <td class="text-center result">{{ item.value | cpf }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import * as moment from 'moment'
  export default {
    name: 'HelloWorld',

    data: () => ({
      moment() {
        return moment()
      },
      results: [
        { value: '00000000000'},
        { value: 11111111111 },
      ]
    }),
  }
</script>

<style>
  .result {
    border-left: 1px solid black
  }
</style>
