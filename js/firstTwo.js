let firstTwo={
    data:function(){
        return{
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
                
                    <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
              
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
                        <label for="textTwo"><i style="color: red ;padding-right: 5px;">*</i>Data ID:</label>
                        <input id="textTwo" placeholder="模糊查询请输入Data " type="text" v-model="msg" :style="{border:bor}" @input="inp">
                        <label for="text1Tow"><i style="color: red ;padding-right: 5px;">*</i>Group:</label>
                        <input id="text1Tow" placeholder="模糊查询请输入Group" type="text" v-model="msg1" :style="{border:bor1}" @input="inp2">
                        <button @click="Empty">查询</button>
                        <div class="text">
                            <span style="display: none" :style="{display:hide}">Data ID不能为空</span>
                            <span :style="{display:hide1}" style=" display: none;position: absolute;left: 257px">Group不能为空</span>
                        </div>

                        <div><i class="VerticalLine"></i>查询结果:共查询到0条满足要求的配置</div>
                    </div>


                    <!--显示隐藏-->

                    <!--数据 头-->
                    <div class="data">
                        <table>
                            <thead>
                            <tr>
                                <th class="add1"><span></span></th>
                                <th class="add">
                                    <div>Data Id</div>
                                </th>
                                <th class="add">
                                    <div>Group</div>
                                </th>
                                <th class="add">
                                    <div>归属应用:</div>
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
        </div>
    </div>`
}