

<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>

    <a href="\vehiculos">Vehiculos</a>
    <h1>Bienvenido al inicio</h1>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        items: [
          {
            text: 'Inicio',
            active: true
          }
        ]
      }
    }
  }
</script>