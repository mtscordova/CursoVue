const app = new Vue({

    el: '#app',
    data: {
        saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        //crea los metodos, observador y eventos, ero aun no accede al DOM, aun no se puede acceder a 'el'
        console.log('created');
    },
    beforeMount() {
        //se ejecuta antes de insertar el DOM
        console.log('beforeMount');
    },
    mounted() {
        //se ejecuta al insertar el Dom
        console.log('mounted');
    },
    beforeUpdate() {
        //al detectar un cambio
        console.log('beforeUpdate');
    },
    updated() {
        //al realizar un cambio
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
    methods: {
        destruir(){
            this.$destroy()
        }
    },

})