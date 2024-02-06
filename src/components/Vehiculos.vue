<template>
  <div>    <b-breadcrumb :items="items"></b-breadcrumb> 
  
  <b-container class="mt-5">
    <a href="\form">Agregar vehiculo</a>
    <b-input placeholder="apunta algo" v-model="filtro"></b-input>
    <b-table
      id="my-table"
      :items="vehiculos"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      label-sort-asc=""
      label-sort-desc=""
      small
      :filter="filtro"
      @filtered="onFiltered"
    >
    </b-table>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </b-container>
</div>
</template>

<script>
import vehiculoService from "../services/Vehiculo.js"; 

export default {
  data() {
    return {
      filtro: null,
      sortBy: "brand",
      sortDesc: false,
      perPage: 5,
      rows:0,
      items: [
        { text: "Inicio", href: "/inicio" },
        { text: "Vehiculos", active: true },
      ],
      currentPage: 1,
      vehiculos: [],
      fields: [
        { key: "id", label: "Id", sortable: true },
        { key: "brand", label: "Marca", sortable: true },
        { key: "model", label: "Modelo", sortable: true },
        { key: "serie", label: "Numero Serie", sortable: true },
        { key: "year", label: "Año", sortable: true },
      ],
    };
  },
  mounted() {
    this.getvehiculos();
  },
  methods: {
    async getvehiculos() {
      try {
        const data = await vehiculoService.getVehiculosPaginados(
          parseInt(this.currentPage),
          parseInt(0),
          this.sortBy
        );
        this.vehiculos = data.content;
        this.rows = this.vehiculos.length;
      } catch (error) {
        console.error(error);
        // Manejar errores (puedes mostrar un mensaje de error al usuario, por ejemplo)
      }
    },
    onFiltered(filteredItems){
      this.currentPage = 1;
      this.rows = filteredItems.length;
    }
  },
};
</script>