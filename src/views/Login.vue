<template>
    <section class="section hero login">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <Icon :path="mdiLock"></Icon>
                                    <span>登录后台</span>
                                </p>
                            </header>
                            <div class="card-content">
                                <form>
                                    <div class="field">
                                        <label class="label">用户名</label>
                                        <div class="control">
                                            <input class="input" type="text" placeholder="用户名或者手机号">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">密码</label>
                                        <div class="control">
                                            <input class="input" type="password" placeholder="密码">
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="b-checkbox checkbox is-thin">
                                            <input type="checkbox">
                                            <span class="check is-black"></span>
                                            <span class="control-label">记住我</span>
                                        </label>
                                    </div>

                                    <div class="field">
                                        <div class="control">
                                            <button class="button is-primary is-fullwidth">登录</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { mdiLock } from '@mdi/js';
import Icon from '@/components/Icon.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.getElementsByTagName("html")[0].className = '';
})
</script>

<style lang="scss">
.login {
    height: 100%;
    background-color: hsl(0, 0%, 29%);
    .card-header-title {
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
}
</style>