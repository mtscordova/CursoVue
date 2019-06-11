<template>
  <div>
    <h1>Formularios</h1>

    <form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobarLongitud"></b-form-input>
          <small>Minimo 3 caracteres</small>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="animales"></b-form-select>
          <p>Seleccion: {{select}}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
          <p>Seleccion: {{radio}}</p>
        </b-col>
        <b-col md="3">
          <b-form-checkbox-group v-model="check" :options="animalesRadio">></b-form-checkbox-group>
          <p>Multiple: {{check}}</p>
        </b-col>
      </b-row>
    </form>
    <p>Texto: {{texto}}</p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      check: [],
      animales: [
        { value: null, text: "Selecione un animal" },
        { value: "perro", text: "Selecione un perro" },
        { value: "gato", text: "Selecione un gato" },
        { value: "pato", text: "Selecione un pato" }
      ],
      animalesRadio: [
        { value: "perro", text: "Selecione un perro" },
        { value: "gato", text: "Selecione un gato" },
        { value: "pato", text: "Selecione un pato" }
      ]
    };
  },
  computed: {
    comprobarLongitud() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>