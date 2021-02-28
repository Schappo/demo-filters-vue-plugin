<template>
  <v-container>
    <v-card>
      <v-card-title>Filtro de Data</v-card-title>
      <v-card-subtitle>Formato padrão <b>DD/MM/YYYY</b></v-card-subtitle>
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
                <th class="text-left">
                  Formatação desejada
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
                <td>{{ item.format ? item.format : '-'}}</td>
                <td class="text-center result" v-if="item.format">{{ item.value | data(item.format) }}</td>
                <td class="text-center result" v-else>{{ item.value | data }}</td>
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
        { value: '042020', format: 'MM/YYYY'},
        { value: '202004', format: 'YYYY/MM'},
        { value: '01-04-2020', format: 'YYYY'},
        { value: '01/04/2020', format: 'MM'},
        { value: 1614548425000, format: 'DD' },
        { value: 1614548425000 },
        { value: new Date(), format: 'YYYY/MM'},
      ]
    }),
  }
</script>

<style>
  .result {
    border-left: 1px solid black
  }
</style>
