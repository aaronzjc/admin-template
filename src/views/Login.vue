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
                        <form>
                            <Field>
                                <Control :icon="mdiAccount" expanded>
                                    <input
                                        class="input"
                                        type="text"
                                        placeholder="用户名"
                                    />
                                </Control>
                            </Field>
                            <Field class="password">
                                <Control :icon="mdiLock" expanded>
                                    <input
                                        class="input"
                                        type="password"
                                        placeholder="密码"
                                    />
                                </Control>
                            </Field>

                            <Field>
                                <div
                                    class="is-flex is-justify-content-space-between"
                                >
                                    <label class="b-checkbox checkbox">
                                        <input type="checkbox" />
                                        <span class="check"></span>
                                        <span class="control-label"
                                            >记住我</span
                                        >
                                    </label>
                                    <label class="is-pull-right">
                                        <a class="">忘记密码?</a>
                                    </label>
                                </div>
                            </Field>

                            <Field group>
                                <Control expanded>
                                    <button
                                        class="button is-light is-fullwidth"
                                    >
                                        注册
                                    </button>
                                </Control>
                                <Control expanded>
                                    <button
                                        class="button is-primary is-fullwidth"
                                    >
                                        登录
                                    </button>
                                </Control>
                            </Field>
                            <div class="is-divider">OR</div>
                            <Field group center>
                                <div class="buttons">
                                    <button class="button is-dark">
                                        <Icon
                                            :path="mdiGithub"
                                            :size="32"
                                        ></Icon>
                                    </button>
                                    <button class="button is-dark">
                                        <Icon
                                            :path="mdiGoogle"
                                            :size="24"
                                        ></Icon>
                                    </button>
                                </div>
                            </Field>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Field from '@/components/form/Field.vue'
import Control from '@/components/form/Control.vue'
import Icon from '@/components/Icon.vue'
import { mdiAccount, mdiGithub, mdiGoogle, mdiLock } from '@mdi/js'
</script>
