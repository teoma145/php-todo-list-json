const { createApp } = Vue;

createApp({
  data() {
    return {
      ApiUrl:'server.php',
      todoList:[],
      Newtask:'',
    };
  },
  methods: {
    readList(){
      axios.get(this.ApiUrl).then((response) => {
        
        this.todoList=response.data;
      })
    },
    DoneTask(index){
      
      const data = new FormData();
      data.append("updatetask",index)
      axios.post(this.ApiUrl, data,).then((response) => {
        console.log('success')
        this.todoList= response.data
        
      })
      
    },
    RemoveTask(index){
      
      const data = new FormData();
      data.append("removetask",index)
      axios.post(this.ApiUrl, data,).then((response) => {
        console.log('success')
        this.todoList= response.data
        
      })
      
    },
    Addtask(){
      console.log(this.Newtask)
      const data = new FormData();
      data.append("task",this.Newtask)
      axios.post(this.ApiUrl, data,).then((response) => {
        console.log('success')
        this.todoList= response.data
        
      })
    },
 
  },

  mounted() {
    this.readList()
    
  },
}).mount("#app");
