let firstFour={
    data:function () {
        return{
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg:'',
            bg3:'',
            off:'',
            offOne:''
        }
    },
    methods:{
        fn3:function(){
            if (!this.isItemList) {
                this.isItemList=true
            }else{
                this.isItemList=false
            }
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
        delIcon:function(){
            this.isIcon=true
            if(this.msg===''){
                this.isIcon=false
            }

        },
        offTwo:function(){
            if(this.off!=='0'){
                this.off='0';
                this.offOne='translateX(0)';
                this.bg3='#e9ecef'
            }else{
                this.off='100%';
                this.offOne='translateX(-100%)';
                this.bg3='#5584ff'
            }

        },

    },
    template:`<div style="display: none">
            <!--内容-->
            <div class="content" >
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--动态显示查询结果  -->
                    <div class="query">
                        <i></i>
                        配置管理
                        <span class="txt">public</span>
                        <span class="txt1">查询结果：共查询到x条满足要求的配置。</span>
                    </div>
                    <!--查询输入框   -->
                    <div class="in">
                        <label for="text4">服务名称</label>
                        <input id="text4" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入服务器名称" type="text">
                        <label for="text1Four">分组名称</label>
                        <input id="text1Four" style="border: 1px solid rgb(90, 98, 104);" placeholder="请输入分组名称" type="text" v-model="msg" v-on:input="delIcon">
                        <span class="sp-hide">隐藏空服务</span>
                        <div class="slide" @click="offTwo" :style="{background:bg3}"><i :style="{left:off,transform:offOne}"></i></div>
                        <button class="query-btn">查询</button>
                        <button class="establish-btn">创建服务</button>
                    </div>
                    <div>
                        <textarea name="" ></textarea>
                    </div>

                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>
                                <th class="add" style="border:none">
                                    <div>服务名</div>
                                </th>
                                <th class="add">
                                    <div>分组名称</div>
                                </th>
                                <th class="add">
                                    <div>集群数目</div>
                                </th>
                                <th class="add">
                                    <div>实例数</div>
                                </th>
                                <th class="add">
                                    <div>健康实例数</div>
                                </th>
                                <th class="add">
                                    <div>触发保护阈值</div>
                                </th>
                                <th class="add">
                                    <div>操作</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>`
}
let firstFive={
    data:function () {
        return {
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg1:'',
            msg:'',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            hide:'none',
            hide1:'none',
        }
    },
    methods:{
        fn3:function(){
            if (!this.isItemList) {
                this.isItemList=true
            }else{
                this.isItemList=false
            }
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
        inp:function(){
            this.hide='none';
            this.bor='1px solid #5a6268';
            if(this.msg===''){
                this.hide='inline-block';
                this.bor='1px solid red';
            }
        },
        inp2:function(){
            this.hide1='none';
            this.bor1='1px solid #5a6268';
            if(this.msg1===''){
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }
        },
        Empty:function(){
            if(this.msg===''&& this.msg1===''){
                this.hide='inline-block';
                this.bor='1px solid red';
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }else if(this.msg===''&& this.msg1!==''){
                this.hide='inline-block';
                this.bor='1px solid red';
            }else if(this.msg!==''&&this.msg1===''){
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }
        },
    },
    template:`<div style="display: none">
        <div style="display: block">
            <!--内容-->
            <div class="content" >
                <!--左边栏-->
                <div class="list-item">
                    <h2 class="flag">标题</h2>
                    <div class="project">
                        <div class="aa" v-on:click="fn3">
                            <i v-bind:class="{icon:isItemList}"></i>配置管理
                        </div>
                        <!--列表项-->
                        <div class="dis" v-bind:class="{itemList:isItemList}">
                            <div style="background: #ececf6">配置列表</div>
                            <div class="bb">历史版本</div>
                            <div class="bb">监听查询</div>
                        </div>


                        <div class="aa" v-on:click="fn4">
                            <i v-bind:class="{icon:isItemList1}"></i>服务管理
                        </div>
                        <div class="dis1" v-bind:class="{itemList1:isItemList1}">
                            <div class="bb">服务列表</div>
                            <div class="bb">订阅者列表</div>
                        </div>


                        <div class="aa"> 命名空间</div>
                        <div class="aa" v-on:click="fn5">
                            <i v-bind:class="{icon:isItemList2}"></i>数据管理
                        </div>
                        <div class="dis2" v-bind:class="{itemList2:isItemList2}">
                            <div class="bb">节点列表</div>
                        </div>


                    </div>
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
                </div>
                <!--右边栏-->
                <div class="page">
                    <!--右边栏头部导航-->
                    <div class="header">
                        <h5>历史版本(保留30天)</h5>
                    </div>
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--动态显示查询结果  -->
                    <div class="query">
                        <i></i>
                        配置管理
                        <span class="txt">public</span>
                        <span class="txt1">查询结果：共查询到x条满足要求的配置。</span>
                    </div>
                    <!--查询输入框   -->
                    <div class="in">
                        <label for="textFive">服务名称</label>
                        <input id="textFive" placeholder="请输入服务名称" type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Five">分组名称</label>
                        <input id="text1Five" placeholder="请输入分组名称" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div class="text">
                            <span style="display: none" :style="{display:hide}">请输入服务器名称</span>
                            <span :style="{display:hide1}" style=" display: none;position: absolute;left: 257px">请输入服务器名称</span>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>


                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>                                                        
                                <th class="add">
                                    <div>地址</div>
                                </th>
                                <th class="add" style="width: 766px">
                                    <div>客户端版本</div>
                                </th>
                                <th class="add">
                                    <div>应用名</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>
    </div>`
}
//命名空间
let firstSix={
    data:function(){
        return {
            spring:'none',
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            msg1:'',
            msg:'',
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            hide:'none',
            hide1:'none',
        }
    },
    methods:{
        fn3:function(){
            if (!this.isItemList) {
                this.isItemList=true
            }else{
                this.isItemList=false
            }
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
        inp:function(){
            this.hide='none';
            this.bor='1px solid #5a6268';
            if(this.msg===''){
                this.hide='inline-block';
                this.bor='1px solid red';
            }
        },
        inp2:function(){
            this.hide1='none';
            this.bor1='1px solid #5a6268';
            if(this.msg1===''){
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }
        },
        Empty:function(){
            if(this.msg===''&& this.msg1===''){
                this.hide='inline-block';
                this.bor='1px solid red';
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }else if(this.msg===''&& this.msg1!==''){
                this.hide='inline-block';
                this.bor='1px solid red';
            }else if(this.msg!==''&&this.msg1===''){
                this.hide1='inline-block';
                this.bor1='1px solid red';
            }
        },
        establish:function(){
            this.spring='block'
        },
        cross:function(){
            this.spring='none'
        }
    },
    template:`<div style="display: none" >
     <!--内容-->
     <div class="content"  > 
     <!--右边栏-->
     <div class="page" >
     <!--右边栏头部导航-->
     <div class="header" style="font-size: 30px">
     <i style=" border:1px solid deepskyblue;font-size: 30px;"></i>命名空间 
     </div>
     <button class="btn-six" @click=" establish">新建命名空间</button>
     <div style="clear: both"></div>
     <div class="data" >

     <table>
     <thead>
     <tr>
     <th class="add" style="width:25% ">命名空间名称</th>
     <th class="add"  style="width:40% ">命名空间ID</th>
     <th class="add"  style="width:10% ">配置数</th>
     <th class="add"  style="width:25% "> 操作</th>
     </tr>      
     <tr>
     <td>1212</td>
     <td>1212</td>
     <td>1212</td>
     <td>
     <a href="#javascript ">详情</a>
     <a href="#javascript">删除</a>
     <a href="#javascript">编辑</a>
     </td>
     </tr>
     </thead>
     </table>
     </div >

     <div class="spring-box" :style="{display:spring}">
     <span class="newly-build" >新建命名空间</span>          
     <img @click="cross" src="../img/resizeApi.png" alt="12" class="newly-build1">
     <div class="box-m">
     <div class="space"> <label for="in1"><i>*</i>命名空间名:</label>  <input idin type="text"></div>
     <div class="describe">  <label for="in2"><i>*</i>描述:</label><input id="in2" type="text"></div>
     </div>
     <div class="determine-cancel">
     <button class="determine">确定</button>
     <button class="cancel">取消</button>

     </div>

     </div>    
     </div>  
     </div>
     </div>`

}
//新建配置
let firstSeven={
    data:function(){
        return{

        }
    },
    methods:{

    },
    template:`
<div style="display: block" >
    <!--内容-->
    <div class="content"  >
        <!--右边栏-->
        <div class="page" >
            <!--右边栏头部导航-->
            <form action="" class="in ">
                <div class="box-seven">
                    <div><h1>新建配置</h1></div>
                    <div class="case-seven">
                        <label for="in-seven">
                            <i>*</i>
                            Data ID:
                        </label> <span  class="sp-seven">
    <input id="in-seven" type="text" class="in-seven">
    </span>
                    </div>
                   
                    <div class="case-seven case-seven1">
                        <label for="in-seven1">
                            <i>*</i>
                            Group:
                        </label><span  class="sp-seven">
    <input id="in-seven1" type="text" class="in-seven" placeholder="DEFAULT_GROUP">
    <img src="../img/timg3.jpg" alt="删除">
    </span>
                    </div>
                    
                    </div>
                    <div>
                    <p class="p-seven">更多高级选项</p>
                    </div>
                    <div class="container-seven">
                    <div class="text-seven "> <span>描述:</span></div>
                   
                    <textarea name="" id="" cols="3" rows="10"></textarea>
                    </div>
            </form>
        </div>
    </div>
</div>
`
}