Vue.component('hijo',{
    template: //html

    `
    <div class="py-5 bg-success" >
        <h4> Componente hijo : {{numero}}</h4>
        <h4> nombre:  {{nombre}}</h4>
        <button @click="numero++">+</button>
    </div>
    
    `,
    // el prop es para recibir informacion
    props: ['numero'],
    data(){ 
        return{
            nombre: 'Matias'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    },
})