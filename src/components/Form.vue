<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <form
  id="app"
  @submit="checkForm"
  action="https://vuejs.org/"
  method="post"
>

  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
        <li v-for="error in errors" :key="error.index">{{ error }}</li>
    </ul>
  </p>

  <p>
    <label for="marca">Marca</label>
    <input
      id="marca"
      v-model="marca"
      type="text"
      name="marca"
    >
  </p>
  <p>
    <label for="modelo">Modelo</label>
    <input
      id="modelo"
      v-model="modelo"
      type="text"
      name="modelo"
    >
  </p>
  <p>
    <label for="anio">Año</label>
    <input
      id="anio"
      v-model="anio"
      type="number"
      name="anio"
    >
  </p>
  <p>
    <label for="numeroserie">Numero de Serie</label>
    <input
      id="numeroserie"
      v-model="numeroserie"
      type="text"
      name="numeroserie"
    >
  </p>

  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>

    </div>
</template>


<script>
export default {
    data() {
        return {
            items: [
                { text: 'Inicio', href: '/inicio' },
                { text: 'Vehiculos', href: '/vehiculos' },
                { text: 'Formulario', active: true },
            ],
            errors: [],
            marca: null,
            modelo: null,
            anio: null,
            numeroserie: null
        }
    },
    methods:{
        checkForm: function (e) {
        this.errors = [];
        if (!this.marca) {
            this.errors.push('Marca requerida.');
        }else if(!/^[a-zA-Z0-9]*$/.test(this.marca)){
            this.errors.push('Marca no debe contener caracteres especiales.');
        }
        if (!this.modelo) {
            this.errors.push('Modelo requerido.');
        }else if(!/^[a-zA-Z0-9]*$/.test(this.modelo)){
            this.errors.push('Modelo no debe contener caracteres especiales.');
        }
        if (!this.anio) {
            this.errors.push('Año requerido.');
        }else if(this.anio>2024){
            this.errors.push('Año no debe ser mayor al actual.');
        }
        if (!this.numeroserie) {
            this.errors.push('Numero de Serie requerido.');
        }else if(!/^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/.test(this.numeroserie)){
            this.errors.push('Numero de Serie no cumple con el formato.');
        }

        if(this.errors.length==0)
        {
            const url = 'http://localhost:8080/api/vehiculos';
            const data = {
            brand: this.marca,
            model: this.modelo,
            serie: this.numeroserie,
            year: this.anio
            };

            fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                alert('Registro Correcto');
            })
            .catch(error => {
                alert('Error al enviar la solicitud');
            });
        }
     

        e.preventDefault();
        }
    }       
}
</script>
