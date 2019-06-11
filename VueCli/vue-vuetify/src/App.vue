<template>
  <v-app>
    <v-toolbar app class="warning">
      <v-toolbar-side-icon @click="drawer =!drawer"></v-toolbar-side-icon>
      <v-toolbar-tiitle>Vuetify</v-toolbar-tiitle>
      <v-spacer></v-spacer>
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Juanito Perez</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  }
};
</script>
