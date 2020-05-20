//新修改
let firstOne={
    data:function(){
        return{
            msg:'',
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            isIcon:false,
            sty:'none',
            rot:'rotate(45deg)',
            line:'',
            od:'none',
            serverList:""
        }
    },
    mounted() {

        this.getConfData();

    },
    methods:{
        getConfData:function(){
            axios
                .get('http://10.0.30.83:1337/v1/keys/zhanjian/zj_namespace1/zj_group_01/mykey1')
                .then(response => (this.serverList = response.data.serverList))

        },
        fn4:function(){
            if (!this.isItemList1) {
                this.isItemList1=true
            }else{
                this.isItemList1=false
            }
        },
        fn5:function(){
            if (!this.isItemList2) {
                this.isItemList2=true
            }else{
                this.isItemList2=false
            }

        },
        ico:function(){
            this.isIcon=false;
            this.msg='';
        },
        box:function(){

            if(this.sty==='none'){
                this.sty = 'block';
                //this.line='all 0.1s ease 0.5s'
            }else{
                this.sty='none'
            }
        },
        rotate:function(){
            if(this.rot==='rotate(45deg)'){
                this.rot='rotate(225deg)'
            }else{
                this.rot='rotate(45deg)'
            }
        },
        dropDown:function(){

            if(this.od==='none'){
                this.od='block'
            }else{
                this.od='none'
            }
        },
        delIcon:function(){
            this.isIcon=true
            if(this.msg===''){
                this.isIcon=false
            }

        },
    },
    template: `<div style="display: none">
        <!--内容-->
        <div class="content">
          <!--左边栏-->
          <div class="list-item">
            <h2 class="flag">标题</h2>
            <div class="project">
              <div class="aa" v-on:click="">
                <i v-bind:class="{icon:isItemList}"></i>配置管理</div>
              <!--列表项-->
              <div class="dis" v-bind:class="{itemList:isItemList}">
                <div style="background: #ececf6">配置列表</div>
                <div class="bb">历史版本</div>
                <div class="bb">监听查询</div></div>
              <div class="aa" v-on:click="fn4">
                <i v-bind:class="{icon:isItemList1}"></i>服务管理</div>
              <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                <div class="bb">服务列表</div>
                <div class="bb">订阅者列表</div></div>
              <div class="aa">命名空间</div>
              <div class="aa" v-on:click="fn5">
                <i v-bind:class="{icon:isItemList2}"></i>数据管理</div>
              <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                <div class="bb">节点列表</div></div>
            </div>
            <!-- <div style="position:fixed;bottom:0;background: red;"></div>--></div>
          <!--右边栏-->
          <div class="page">
            <!--右边栏头部导航-->
            <div class="content-right-nav">
              <span class="sp1">public</span>
              <span class="sp2">sandbox-intranet</span>
              <span class="sp3">sandbox</span></div>
            <!--动态显示查询结果 -->
            <div class="query">
              <table>
                <thead>
                  <tr>
                    <th>group1</th></tr>
                </thead>
              </table>
            </div>
            <!--查询输入框 -->
            <div class="in">
              <label for="text">Data ID:</label>
              <input id="text" style="border: 1px solid rgb(90, 98, 104);" placeholder="模糊查询请输入Data " type="text">
              <label for="text1">Group:</label>
              <input id="text1" style="border: 1px solid rgb(90, 98, 104);" placeholder="模糊查询请输入Group" type="text" v-model="msg" v-on:input="delIcon">
              <span class="icon">
                <img src="../img/timg3.jpg" alt="" v-bind:class="{ic:isIcon}" v-on:click="ico"></span>
              <button>查询</button>
              <span class="frame" v-on:click="box">高级查询</span>
              <button>导出高级查询</button>
              <button>导入配置</button>
              <div class="plus">+</div>
              <div style="display: none" class="senior" v-bind:style="{display:sty}">
                <label for="text2">归属应用:</label>
                <input id="text2" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入应用名" type="text">
                <label for="text3">标签:</label>
                <input id="text3" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入标签" type="text">
                <i class="arrow" @click="rotate" :style="{transform:rot,transition:line}" v-on:click="dropDown"></i>
                <div class="sel" :style="{display:od}">
                  <span>无选项</span></div>
              </div>
            </div>
            <!--显示隐藏-->
            <!--数据 头-->
            <div class="data">
              <table>
                <thead>
                  <tr>
                    <th class="add">Data Id</th>
                    <th class="add">Group</th>
                    <th class="add">归属应用:</th>
                    <th class="add">操作</th></tr>
                  <tr v-for="slist in serverList">
                    <td>{{slist.fld_key}}</td>
                    <td>{{slist.fld_des}}</td>
                    <td>1212</td>
                    <td>121212</td></tr>
                </thead>
              </table>
            </div>
            <!--数据内容 --></div>
          <!--底部-->
          <div></div>
        </div>
      </div>`
}