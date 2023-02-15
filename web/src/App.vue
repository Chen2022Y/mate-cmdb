<script setup xmlns="http://www.w3.org/1999/html">
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from "vue-router";
import {NIcon, darkTheme, useOsTheme} from "naive-ui";
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
        label: renderRouterLink("/overview/permissions", {}, "权限"),
        key: "permissions-overview",
        icon: renderIcon(CubeView)
      },
      {
        label: renderRouterLink("/overview/machine", {}, "机器"),
        key: "machine-overview",
        icon: renderIcon(ViewMode1)
      },
      {
        label: renderRouterLink("/overview/concept", {}, "业务概念"),
        key: "concept-overview",
        icon: renderIcon(TaskView)
      },
      {
        label: renderRouterLink("/overview/repo-config", {}, "存储库与配置"),
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
        label: renderRouterLink("/permission-control/group", {}, "组"),
        key: "group-mgmt",
        icon: renderIcon(GroupAccess)
      },
      {
        label: renderRouterLink("/permission-control/member", {}, "成员"),
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
        label: renderRouterLink("/biz-concept/machine", {}, "机器"),
        key: "machine",
        icon: renderIcon(BareMetalServer01)
      },
      {
        label: renderRouterLink("/biz-concept/group", {}, "群组"),
        key: "group",
        icon: renderIcon(Group)
      },
      {
        label: renderRouterLink("/biz-concept/safe-group", {}, "安全组"),
        key: "safe-group",
        icon: renderIcon(GroupSecurity)
      },
      {
        label: renderRouterLink("/biz-concept/res-pool", {}, "资源池"),
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
        label: renderRouterLink("/config/repo", {}, "存储库"),
        key: "repo",
        icon: renderIcon(Cloud)
      },
      {
        label: renderRouterLink("/config/vcs", {}, "版本控制"),
        key: "vcs",
        icon: renderIcon(Version)
      }
    ]
  },
  {
    label: renderRouterLink("/audit", {}, "审计"),
    key: "audit",
    icon: renderIcon(AudioConsole)
  },
  {
    label: renderRouterLink("/about", {}, "关于"),
    key: "about",
    icon: renderIcon(Information)
  }
];


onMounted(() => {
      document.getElementById("left-side").style.height = window.innerHeight + "px"
      window.onresize = () => {
        document.getElementById("left-side").style.height = window.innerHeight + "px"
      }
    }
)
</script>

<template>
  <div class="app">
    <n-config-provider id="dark-mod" :theme="useOsTheme().value === 'dark' ? darkTheme : null">
      <n-layout has-sider>
        <n-layout-sider
            id="left-side"
            show-trigger="bar"
            :show-collapsed-content="false"
            collapsed-width="0"
            width="245"
            :native-scrollbar="false"
        >
          <n-menu
              :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout-content>
          <RouterView style="width: 100%;height: 100%"></RouterView>
        </n-layout-content>
      </n-layout>
    </n-config-provider>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}

</style>
