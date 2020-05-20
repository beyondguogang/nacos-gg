let firstSidebar={
    data: function () {
        return {
            isItemList: false,
            isItemList1: false,
            isItemList2: false,
        }
    },
    methods: {
        fn3: function () {
            if (!this.isItemList) {
                this.isItemList = true
            } else {
                this.isItemList = false
            }
        },
        fn4: function () {
            if (!this.isItemList1) {
                this.isItemList1 = true
            } else {
                this.isItemList1 = false
            }
        },
        fn5: function () {
            if (!this.isItemList2) {
                this.isItemList2 = true
            } else {
                this.isItemList2 = false
            }

        },

    },
    template: `
    <div class="list-item">
    <div class="list-item1">
     <div class="flag">NACOS1.1.4</div>
     <div class="project">
     <div class="aa" v-on:click="fn3">
     <i v-bind:class="{icon:isItemList}"></i>配置管理
     </div>
     <!--列表项-->
     <div class="dis" v-bind:class="{itemList:isItemList}">
     <div style="background: #ececf6">巅峰战舰</div>
     <div class="bb">巅峰坦克</div>
     <div class="bb">抢滩游戏</div>
     <div class="bb">沙盒游戏</div>
     </div>


     <div class="aa" v-on:click="fn4">
     <i v-bind:class="{icon:isItemList1}"></i>服务管理
     </div>
     <div class="dis1" v-bind:class="{itemList1:isItemList1}">
      <div class="bb">巅峰战舰</div>
     <div class="bb">巅峰坦克</div>
     <div class="bb">抢滩游戏</div>
     <div class="bb">沙盒游戏</div>
     </div>


     <div class="aa"> 命名空间</div>
     <div class="aa" v-on:click="fn5">数据管理</div>
     <div class="dis2" v-bind:class="{itemList2:isItemList2}">
     </div>


     </div>
     <!--        <div style="position:fixed;bottom:0;background: red;"></div>-->
     </div>
</div>
     `
}