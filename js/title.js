let firstTitle={
    data:function(){
        return{
            isActive: false,
        }
    },
    methods:{
        fn:function(){
            this.isActive=true;
        },
        fn2:function(){
            this.isActive=false
        },
    },
    template:` 
       <div class="title">
           <a href="#javascript">
            <img alt="logo" class="logo" src="../img/logo-2000-390.svg" style="">
           </a>
    </div>`
}