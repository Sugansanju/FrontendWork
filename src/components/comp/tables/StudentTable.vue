<template>
  <b-table responsive hover :items="items" :fields="fields" style="text-align: left">
      <template slot="student" slot-scope="data" >
          <b-link href="#">
          <b-img rounded="circle" :src="data.value.image" style="width: 10%"></b-img>{{data.value.name}}
          </b-link>
      </template>
      <template slot="teacher" slot-scope="data" style="text-align: left">
          <b-link href="#">
            <b-img rounded="circle" :src="data.value.image" style="width: 10%"></b-img>{{data.value.name}}
          </b-link>
      </template>
  </b-table>
</template>

<script>
export default {
    props: ['items'],    
  data () {
    return {  
        fields:{
            roll:{label: '#', sortable: true},
            student:{label: 'Student', sortable: true},
            teacher:{label: 'Teacher', sortable: true},
            parents:{label: 'Parents', sortable: false},
            classes:{label: 'Classes', sortable: false},
        },
        // items: [
        //     {
        //         roll: '01', 
        //         student: { image: '/static/images/bluetoy.png', name: 'Siva Kumar'}, 
        //         // teacher: { image: '/static/images/img111.png', name: 'Roselyn'}, 
        //         parents: '02', 
        //         classes: '06'
        //     },
        //     {
        //         roll: '07', 
        //         student: { image: '/static/images/browntoy.png', name: 'Mirnalini'}, 
        //         // teacher: { image: '/static/images/img222.png', name: 'Jonathan'}, 
        //         parents: '01', 
        //         classes: '03'
        //     },
        //     {
        //         roll: '03', 
        //         student: { image: '/static/images/yellowtoy.png', name: 'Mirnalini'}, 
        //         // teacher: { image: '/static/images/img333.png', name: 'Jonathan'}, 
        //         parents: '01', 
        //         classes: '03'
        //     },            
        // ],
        // fields: ['#', 'Student', 'Teacher', 'Parent', 'Classes'],
    }
  }
}
</script>
<style scoped>
a{
    color: #2c3e50;
}
a:hover{
    color: #68b8b6;
}
</style>

