<template>
    <section class="section hero login">
        <div class="columns is-centered">
            <div
                class="column is-two-thirds-tablet is-half-desktop is-4-widescreen"
            >
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title is-centered">
                            <span>登录后台管理</span>
                        </p>
                    </header>
                    <div class="card-content">
                        <form action="javascript:void(0);">
                            <FormField>
                                <FormControl :icon="mdiAccount" expanded>
                                    <input
                                        class="input"
                                        type="text"
                                        placeholder="用户名"
                                    />
                                </FormControl>
                            </FormField>
                            <FormField class="password">
                                <FormControl :icon="mdiLock" expanded>
                                    <input
                                        class="input"
                                        type="password"
                                        placeholder="密码"
                                    />
                                </FormControl>
                            </FormField>

                            <FormField>
                                <div class="options">
                                    <label class="b-checkbox checkbox">
                                        <input type="checkbox" />
                                        <span class="check"></span>
                                        <span class="control-label"
                                            >记住我</span
                                        >
                                    </label>
                                    <label class="is-pull-right">
                                        <span class="forgot">忘记密码?</span>
                                    </label>
                                </div>
                            </FormField>

                            <FormField group>
                                <FormControl expanded>
                                    <button
                                        class="button is-light is-fullwidth"
                                    >
                                        注册
                                    </button>
                                </FormControl>
                                <FormControl expanded>
                                    <button
                                        class="button is-primary is-fullwidth"
                                        @click="$toast.success('登录成功')"
                                    >
                                        登录
                                    </button>
                                </FormControl>
                            </FormField>
                            <Divider title="其他方式" />
                            <FormField group center>
                                <div class="buttons">
                                    <button class="button is-dark is-small">
                                        <BasicIcon
                                            :name="mdiGithub"
                                            :size="32"
                                        ></BasicIcon>
                                    </button>
                                    <button class="button is-dark is-small">
                                        <BasicIcon
                                            :name="mdiGoogle"
                                            :size="24"
                                        ></BasicIcon>
                                    </button>
                                </div>
                            </FormField>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { mdiAccount, mdiGithub, mdiGoogle, mdiLock } from '@mdi/js'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BasicIcon from '@/components/BasicIcon.vue'
import Divider from '@/components/Divider.vue'
</script>
