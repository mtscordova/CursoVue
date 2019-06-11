<template>
  <!-- <v-container>
    <v-layout wrap text-xs-center>
      <v-flex class="success" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="error" xs6>
        <h1>6</h1>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5 secondary" justify-center align-center style="height:300px">
      <v-flex class="info" xs3>
        <h1>Centrado</h1>
      </v-flex>
      <v-flex class="light-green white--text" xs3>
        <h1>Centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-xs-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
        <h1 class="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia quas repudiandae numquam illo asperiores omnis accusamus, ad beatae dolorum totam expedita eligendi, rem porro perspiciatis molestias consequatur ex eius?.</h1>
      </v-flex>
    </v-layout>
  </v-container>-->
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container fill-height>
              <v-layout>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque veritatis non voluptatem similique aliquam, molestiae rerum neque commodi dignissimos.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" flat center-left>Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"></v-img>
          <v-card-title>
            <h2>Lorem, ipsum dolor.</h2>
          </v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae itaque veritatis non voluptatem similique aliquam, molestiae rerum neque commodi dignissimos.</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="info" flat @click="dialog = !dialog">Accion</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>



    <!-- dialog -->
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title>
          Esto es un titulo
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo inventore voluptate nesciunt quis ex maxime ipsum eum, quos enim quam officiis quas! Velit, consectetur quo cumque architecto explicabo ea.
        </v-card-text>
        <v-divider>

        </v-divider>
        <v-card-action >
          <v-btn @click="dialog =!dialog">Cerrar</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
    <!-- fin dialog -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    }
  },
};
</script>
