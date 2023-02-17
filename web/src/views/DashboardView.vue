<script setup xmlns="http://www.w3.org/1999/html">
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from "vue-router";
import {NIcon} from "naive-ui";
import {
  View,
  CubeView,
  ViewMode1,
  TaskView,
  UserAccess,
  GroupAccess,
  SettingsView,
  AccessibilityAlt,
  Workspace,
  BareMetalServer01,
  Group,
  GroupSecurity,
  StoragePool,
  Settings,
  Cloud,
  Version,
  AudioConsole,
  Information
} from "@vicons/carbon";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

function renderRouterLink(path, params, label) {
  return () =>
      h(
          RouterLink,
          {
            to: {
              path: path,
              params: params
            }
          },
          {default: () => label}
      )
}

const menuOptions = [
  {
    label: "概览",
    key: "overview",
    icon: renderIcon(View),
    children: [
      {
        label: renderRouterLink("/dashboard/overview/permissions", {}, "权限"),
        key: "permissions-overview",
        icon: renderIcon(CubeView)
      },
      {
        label: renderRouterLink("/dashboard/overview/machine", {}, "机器"),
        key: "machine-overview",
        icon: renderIcon(ViewMode1)
      },
      {
        label: renderRouterLink("/dashboard/overview/concept", {}, "业务概念"),
        key: "concept-overview",
        icon: renderIcon(TaskView)
      },
      {
        label: renderRouterLink("/dashboard/overview/repo-config", {}, "存储库与配置"),
        key: "repo-config-overview",
        icon: renderIcon(SettingsView)
      },
    ]
  },
  {
    label: "权限控制",
    key: "permission-control",
    icon: renderIcon(AccessibilityAlt),
    children: [
      {
        label: renderRouterLink("/dashboard/permission-control/group", {}, "组"),
        key: "group-mgmt",
        icon: renderIcon(GroupAccess)
      },
      {
        label: renderRouterLink("/dashboard/permission-control/member", {}, "成员"),
        key: "member-mgmt",
        icon: renderIcon(UserAccess)
      }
    ]
  },
  {
    label: "业务概念",
    key: "biz-concept",
    icon: renderIcon(Workspace),
    children: [
      {
        label: renderRouterLink("/dashboard/biz-concept/machine", {}, "机器"),
        key: "machine",
        icon: renderIcon(BareMetalServer01)
      },
      {
        label: renderRouterLink("/dashboard/biz-concept/group", {}, "群组"),
        key: "group",
        icon: renderIcon(Group)
      },
      {
        label: renderRouterLink("/dashboard/biz-concept/safe-group", {}, "安全组"),
        key: "safe-group",
        icon: renderIcon(GroupSecurity)
      },
      {
        label: renderRouterLink("/dashboard/biz-concept/res-pool", {}, "资源池"),
        key: "res-pool",
        icon: renderIcon(StoragePool)
      },
    ]
  },
  {
    label: "配置",
    key: "config",
    icon: renderIcon(Settings),
    children: [
      {
        label: renderRouterLink("/dashboard/config/repo", {}, "存储库"),
        key: "repo",
        icon: renderIcon(Cloud)
      },
      {
        label: renderRouterLink("/dashboard/config/vcs", {}, "版本控制"),
        key: "vcs",
        icon: renderIcon(Version)
      }
    ]
  },
  {
    label: renderRouterLink("/dashboard/audit", {}, "审计"),
    key: "audit",
    icon: renderIcon(AudioConsole)
  },
  {
    label: renderRouterLink("/dashboard/about-me", {}, "关于我"),
    key: "about",
    icon: renderIcon(Information)
  }
];


onMounted(() => {
  document.title = 'Mate CMDB - 配置文件数据库管理系统'
      document.getElementById("left-side").style.height = window.innerHeight + "px"
      window.onresize = () => {
        document.getElementById("left-side").style.height = window.innerHeight + "px"
      }
    }
)
</script>

<template>
  <div class="dashboard-view">
    <n-layout has-sider>
        <n-layout-sider
            id="left-side"
            show-trigger="bar"
            :show-collapsed-content="false"
            collapsed-width="0"
            width="245"
            :native-scrollbar="false"
            style="position: relative"
        >
          <n-menu :options="menuOptions"/>

          <n-button style="width: 245px;bottom: 2px;position: absolute;">
            退&nbsp;出&nbsp;登&nbsp;录
          </n-button>
        </n-layout-sider>

        <n-layout-content content-style="padding: 15px">
          <RouterView style="width: 100%;height: 100%;"></RouterView>
        </n-layout-content>
    </n-layout>
  </div>
</template>

<style scoped>
.dashboard-view {
  width: 100%;
  height: 100%;
}

</style>
