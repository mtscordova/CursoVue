<template>
  <div id="app" class="container">
    
    <Cabecera></Cabecera>
    <Lista></Lista>
    
  </div>
</template>

<script>

import Cabecera from './components/Cabecera'
import Lista from './components/Lista'

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista
  }
}
</script>


