<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn>Texto</v-btn>

        <v-btn dark color="indigo darken-4">Texto</v-btn>

        <v-btn dark color="blue">Texto</v-btn>

        <v-btn flat>Sin fondo</v-btn>

        <v-btn color="warning" large>Largo</v-btn>
        <v-btn color="warning" small>Corto</v-btn>

        <v-btn color="warning" large :disabled="true">desabilitado</v-btn>

        <v-btn color="info" depressed>desabilitado</v-btn>

        <v-btn>
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn icon flat color="success">
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn fab color="danger">
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn fab small color="error">
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn fab large color="danger">
          <v-icon>forum</v-icon>
        </v-btn>

        <v-btn color="succes">
          Texto
          <v-icon class="ml-2">forum</v-icon>
        </v-btn>

        <v-btn color="succes">
          Texto
          <v-icon right>forum</v-icon>
        </v-btn>

        <v-btn color="succes">
          <v-icon left>forum</v-icon>Texto
        </v-btn>

        

        <v-btn block color="error">
          <v-icon left>forum</v-icon>Texto
        </v-btn>

        <v-btn round color="error">Boton redondo</v-btn>
      </v-flex>
      
    </v-layout>
    <v-layout>
      <v-flex xs6>
        <v-btn block  outline color="error">
          holi esto es un boton
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>