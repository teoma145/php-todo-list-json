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
        console.log(response.data)
        this.todoList=response.data;
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
    }
    //const data ={
    //task:this.Newtask,
    //};
    //axios.post(ApiUrl,data,{
      //headers:{"Content-Type"}
    //})
  },

  mounted() {
    this.readList()
  },
}).mount("#app");
