<template>
    <nav id="navbar-main" class="navbar is-fixed-top">
        <div class="navbar-brand">
            <a class="navbar-item is-hidden-desktop jb-aside-mobile-toggle" @click="toggleMobileAside">
                <Icon :path="isAsideMobileOpen ? mdiBackburger : mdiForwardburger" :size="24"></Icon>
            </a>
            <div class="navbar-item has-control">
                <div class="control"><input placeholder="搜索..." class="input"></div>
            </div>
        </div>
        <div class="navbar-brand is-right">
            <a class="navbar-item is-hidden-desktop jb-navbar-menu-toggle" data-target="navbar-menu">
                <span class="icon"><i class="mdi mdi-dots-vertical"></i></span>
            </a>
        </div>
        <div :class="['navbar-menu fadeIn animated faster']" id="navbar-menu">
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
                        <a class="navbar-item">
                            <span class="icon"><i class="mdi mdi-email"></i></span>
                            <span>Messages</span>
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
                    <span class="icon"><i class="mdi mdi-help-circle-outline"></i></span>
                    <span>About</span>
                </a>
                <a title="Log out" class="navbar-item is-desktop-icon-only">
                    <span class="icon"><i class="mdi mdi-logout"></i></span>
                    <span>Log out</span>
                </a>
            </div>
        </div>
    </nav>

    <aside :class="[ 'aside is-placed-left is-expanded has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded' ]">
        <div class="aside-tools">
            <div class="aside-tools-label">
                <span>Mu - 后台管理</span>
            </div>
        </div>
        <div class="menu is-menu-main">
            <p class="menu-label">全部</p>
            <ul class="menu-list">
                <li v-for="menu in menus">
                    <RouterLink :to="menu.name">
                        <Icon :path="menu.icon"></Icon>
                        <span class="menu-item-label">{{ menu.title }}</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { menus } from '@/config.js';
import { mdiForwardburger, mdiBackburger } from '@mdi/js';
import Icon from '@/components/Icon.vue';

const isAsideMobileOpen = ref(false)

function toggleMobileAside() {
    isAsideMobileOpen.value = !isAsideMobileOpen.value;
    updateHtmlClass()
}

function updateHtmlClass() {
    if (isAsideMobileOpen.value == true) {
        document.getElementsByTagName('html')[0].className = 'has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded has-aside-mobile-expanded'
    } else {
        document.getElementsByTagName('html')[0].className = 'has-aside-left has-aside-mobile-transition has-navbar-fixed-top has-aside-expanded'
    }
}

onMounted(updateHtmlClass)
</script>