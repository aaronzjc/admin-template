<template>
    <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle" @click="styleStore.toggleAside()">
                <Icon :path="styleStore.isAsideMobileOpen ? mdiBackburger : mdiForwardburger" :size="24"></Icon>
            </a>
            <div class="navbar-item has-control">
                <div class="control"><input placeholder="搜索..." class="input"></div>
            </div>
        </div>
        <div class="navbar-brand is-right">
            <a class="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu"
                @click="styleStore.toggleNav()">
                <span class="icon"><i class="mdi mdi-dots-vertical"></i></span>
            </a>
        </div>
        <div :class="['navbar-menu fadeIn animated faster', { 'is-active': styleStore.isNavMobileOpen }]" id="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item has-dropdown has-dropdown-with-icons has-divider has-user-avatar is-hoverable">
                    <a class="navbar-link is-arrowless">
                        <div class="is-user-avatar">
                            <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe">
                        </div>
                        <div class="is-user-name">
                            <span>John Doe</span>
                        </div>
                        <span class="icon"><i class="mdi mdi-chevron-down"></i></span>
                    </a>
                    <div class="navbar-dropdown">
                        <a href="profile.html" class="navbar-item">
                            <span class="icon"><i class="mdi mdi-account"></i></span>
                            <span>My Profile</span>
                        </a>
                        <a class="navbar-item">
                            <span class="icon"><i class="mdi mdi-settings"></i></span>
                            <span>Settings</span>
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            <span class="icon"><i class="mdi mdi-logout"></i></span>
                            <span>Log Out</span>
                        </a>
                    </div>
                </div>
                <a href="https://justboil.me/bulma-admin-template/free-html-dashboard/" title="About"
                    class="navbar-item has-divider is-desktop-icon-only">
                    <Icon :path="mdiHelpCircleOutline"></Icon>
                    <span>About</span>
                </a>
                <a title="Log out" class="navbar-item is-desktop-icon-only">
                    <Icon :path="mdiLogout"></Icon>
                    <span>Log out</span>
                </a>
            </div>
        </div>
    </nav>

    <aside class="aside is-placed-left is-expanded">
        <div class="aside-tools">
            <div class="aside-tools-label">
                <span>Mu - 后台管理</span>
            </div>
        </div>
        <div class="menu is-menu-main">
            <p class="menu-label">全部</p>
            <ul class="menu-list">
                <MenuItem :menu="menu" v-for="menu in menus"></MenuItem>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { menus } from '@/config.js';
import { mdiForwardburger, mdiBackburger, mdiHelpCircleOutline, mdiLogout } from '@mdi/js';
import Icon from '@/components/Icon.vue';
import { useStyleStore } from '@/stores/style.js';
import MenuItem from '@/components/menu/Item.vue';
import { useRouter } from 'vue-router';

const styleStore = useStyleStore();

const router = useRouter()
router.beforeEach(() => {
    styleStore.isAsideMobileOpen = false
    styleStore.isNavMobileOpen = false
})
</script>