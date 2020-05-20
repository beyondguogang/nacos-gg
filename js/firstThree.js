let firstThree={
    data:function () {
        return{
            bor:'1px solid #5a6268',
            bor1:'1px solid #5a6268',
            msg1:'',
            msg:'',
            isItemList:false,
            isItemList1:false,
            isItemList2:false,
            vm:'配置',
            con:'block',
            con1:'none',
            rot:'rotate(45deg)',
            hide:'none',
            hide1:'none',
            bg:'#e2e3e5',
            bg1:'white',
            sty:'none',
        }
    },
    methods:{
        content:function(){
            if(this.rot==='rotate(225deg)'){
                this.rot='rotate(45deg)'
                this.sty='none'
            }

        },
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
        register:function(){
            if(this.rot==='rotate(45deg)'){
                this.rot='rotate(225deg)'
                this.sty='block'

            }else{
                this.rot='rotate(45deg)'
                this.sty='none'
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
        configure:function(){
            this.vm='配置';
            this.con1='none';
            this.con='block';
            if(this.bg!=='#e2e3e5'){
                this.bg='#e2e3e5';
                this.bg1='white'
            }

        },
        ip:function(){
            this.vm='IP';
            this.con='none';
            this.con1='block';
            if(this.bg1!=='#e2e3e5'){
                this.bg1='#e2e3e5';
                this.bg='white'
            }
        },
    },
    template:`<div style="display:none" v-cloak>
        <div style="display: block">
            <!--内容-->
            <div class="content"  @click="content">
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
                        <h5>监听查询</h5>
                    </div>
                    <div class="content-right-nav">
                        <span class="sp1">public</span>
                        <span class="sp2">sandbox-intranet</span>
                        <span class="sp3">sandbox</span>
                    </div>
                    <!--查询输入框 1  -->
                    <div class="in" style="display: block" :style="{display:con}" v-cloak>
                        <label for="text0Three">查询维度:</label>
                        <input id="text0Three" type="text"  v-model="vm">
                        <i class="arrow" style="transform: rotate(45deg);" @click.stop="register" :style="{transform:rot}"></i>
                        <label for="textThree"><i style="color: red ;padding-right: 5px;">*</i>Data ID:</label>
                        <input id="textThree" placeholder="模糊查询请输入Data " type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Three"><i style="color: red ;padding-right: 5px;">*</i>Group:</label>
                        <input id="text1Three" placeholder="模糊查询请输入Group" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div  class="text1">
                            <span style="display: none" :style="{display:hide}">Data ID不能为空</span>
                            <span :style="{display:hide1}" style="display: none;position: absolute;left: 257px">Group不能为空</span>
                        </div>

                        <div class="swi" style="display: none" :style="{display:sty}" >
                           <p @click="configure" :style="{background:bg}" ><i class="correct"></i><span class="sp">配置</span></p>
                            <p @click="ip" :style="{background:bg1}"><i class="correct"></i><span class="sp">IP</span></p>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>
                    <!--查询输入框 2  -->
                    <div class="in" style="display: none" :style="{display:con1}" v-cloak>
                        <label for="text0Three">查询维度:</label>
                        <input class="inp3" id="text0Three1" type="text"  v-model="vm">
                        <i class="arrow" @click.stop="register" :style="{transform:rot}"></i>
                        <input class="inp3" type="text" placeholder="请输入IP">
                        <button @click="Empty">查询</button>
                        <div class="swi" :style="{display:sty}" >
                            <p @click="configure" :style="{background:bg}"><i class="correct"></i><span class="sp">配置</span></p>
                            <p @click="ip" :style="{background:bg1}"><i class="correct"></i><span class="sp">IP</span></p>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>
                    <!--显示隐藏-->

                    <!--数据 头1-->
                    <div style="display: block" :style="{display:con}">
                    <div class="data">
                        <table style="width: 100%">
                            <thead>
                            <tr>
                                <th class="add" style="width: 33.33%;border:none">
                                    <div>Data ID</div>
                                </th>
                                <th class="add" style="width: 33.33%">
                                    <div>Group</div>
                                </th>
                                <th class="add" style="width: 33.33%">
                                    <div>MD5</div>
                                </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <!--数据内容 -->
                    <div class="data-content">
                        <p> 没有数据</p>
                    </div>
                    <div class="data-item">
                        <button><i class="left-arrow"></i>上一页</button>
                        <button class="btn1">1</button>
                        <button>下一页<i class="right-arrow"></i></button>
                    </div>
                </div>
                    <!--数据 头2-->
                    <div style="display: none" :style="{display:con1}">
                        <div class="data">
                            <table style="width: 100%">
                                <thead>
                                <tr>
                                    <th class="add" style="width: 50%;border:none">
                                        <div>IP:</div>
                                    </th>
                                    <th class="add" style="width: 50%">
                                        <div>MD5</div>
                                    </th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <!--数据内容 -->
                        <div class="data-content">
                            <p> 没有数据</p>
                        </div>
                        <div class="data-item">
                            <button><i class="left-arrow"></i>上一页</button>
                            <button class="btn1">1</button>
                            <button>下一页<i class="right-arrow"></i></button>
                        </div>
                    </div>


                </div>
                <!--底部-->
                <div></div>
            </div>
        </div>
    </div>`
}