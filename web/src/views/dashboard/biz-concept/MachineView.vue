<template>
  <div class="machine-view">


<!--    当前路径-->
    <n-breadcrumb>
      <n-breadcrumb-item>业务概念</n-breadcrumb-item>
      <n-breadcrumb-item>机器列表</n-breadcrumb-item>
    </n-breadcrumb>
    <n-divider/>

<!--    搜索栏-->
    <div style="display: flex;margin-bottom: 5px;">
      <n-input type="text" placeholder="按照ID进行搜索"
               clearable style="width: 315px;margin-right: 5px"/>
      <n-input type="text" placeholder="按照群组进行搜索"
               clearable style="width: 200px;margin-right: 5px"/>
      <n-input type="text" placeholder="按照资源池搜索"
               clearable style="width: 200px;margin-right: 5px"/>
      <n-select v-model:value="MachineSearchTypeData" size="medium" :options="MachineSearchTypeOptions"
                placeholder="机器类型" style="width: 100px;margin-right: 5px"/>
      <n-select v-model:value="MachineSearchStatusData" size="medium" :options="MachineSearchStatusOptions"
                placeholder="选择状态" style="width: 100px;margin-right: 5px"/>
      <n-button type="primary" size="medium" ghost style="margin-right: 10px">
        <n-icon>
          <search></search>
        </n-icon>
      </n-button>
      <n-button type="primary" size="medium" ghost>
        <n-icon>
          <close></close>
        </n-icon>
      </n-button>
    </div>

<!--    数据表-->
    <div>
      <n-data-table :columns="MachineCreateColumns" :data="MachineData" striped :single-line="true"
                    :single-column="false"
                    :pagination="MachinePaginationReactive" size="small"
                    scroll-x="1600"
                    max-height="507"/>
    </div>
  </div>
</template>

<script setup>
import {h, reactive, ref} from "vue";
import {NButton, NTag} from "naive-ui";
import {Search, Close} from "@vicons/carbon";

//搜索框
const MachineSearchTypeData = ref([])
const MachineSearchTypeOptions = [
  {}
];
const MachineSearchStatusData = ref([])
const MachineSearchStatusOptions = [
  {}
];

//翻页器
const MachinePaginationReactive = reactive({
  page:1,
  pageSize: 20,
  "show-quick-jumper": true,
  pageSizes: [5, 10, 20],
  showSizePicker: true,
  goto: () => '跳转至',
  prefix: () => '共999条数据',
  displayOrder:['size-picker', 'pages', 'quick-jumper'],
  onChange: (page) => {
    MachinePaginationReactive.page = page
},
  onUpdatePageSize: (pageSize) => {
    MachinePaginationReactive.pageSize = pageSize;
    MachinePaginationReactive.page = 1;
  },
});


//数据表内容
const MachineCreateColumns = [
  {
    type: 'selection',
    fixed: "left"
  },
  {
    title: "ID",
    key: "id",
    width: 290,
    fixed: "left",
  },
  {
    title: "类型",
    key: "type",
    width: 80,
    align: 'center',
  },
  {
    title: "群组",
    key: "group",
    width: 160,
    align: 'center',
  },
  {
    title: "资源池",
    key: "res-pool",
    width: 120,
    align: 'center',
  },
  {
    title: "安全组",
    key: "safe-group",
    minWidth: 200,
    align: 'center',
    render(row) {
      return row["safe-group"].map((tagKey) => {
        return h(
            NTag,
            {
              style: {
                marginRight: "6px",
                marginTop: "2px"
              },
              size: "small",
              bordered: false
            },
            {
              default: () => tagKey
            }
        );
      });
    }
  },
  {
    title: "受控时间",
    key: "create-time",
    width: 180,
    align: 'center',
  },
  {
    title: "数据上报时间",
    key: "update-time",
    width: 180,
    align: 'center',
  },
  {
    title: "状态",
    key: "status",
    width: 100,
    fixed: 'right',
    align: 'center',
  },
  {
    title: "操作",
    key: "op",
    width: 100,
    align: 'center',
    fixed: 'right',
    render() {
      return h(
          NButton,
          {
            size: "tiny",
            secondary: true,
          },
          {
            default: () => "电源"
          }
      );
    },
  },
];
const MachineData = Array.from({length: 46}).map((_, index) => ({
  'key': index,
  'id': `dc8f3ea9-aecc-11ed-b6f0-84699355932e${index}`,
  'type': `物理机 ${index}`,
  'status': `正在运行 ${index}`,
  'group': `/动物园之星/全球 ${index}`,
  'safe-group': ["Web 服务", "数据库服务", "登录网关服务", "运维"],
  'res-pool': `北京东三区  ${index}`,
  'create-time': `2023/02/15 00:12:0 ${index}`,
  'update-time': `2023/02/15 00:12:0 ${index}`,
}));

</script>


<style scoped>
</style>