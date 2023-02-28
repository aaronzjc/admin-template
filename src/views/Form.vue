<template>
    <Main :title="['表单']">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <span class="icon"><i class="mdi mdi-ballot"></i></span>
                    表单示例
                </p>
            </header>
            <div class="card-content">
                <form method="get">
                    <Field label="用户信息" group horizontal>
                        <Control :icon="mdiAccount" expanded>
                            <input
                                class="input"
                                type="text"
                                placeholder="姓名"
                            />
                        </Control>
                        <Control :icon="mdiMail" expanded>
                            <input
                                class="input"
                                type="email"
                                placeholder="邮件"
                                value=""
                            />
                        </Control>
                    </Field>
                    <Field label="部门" horizontal>
                        <Control>
                            <div class="select">
                                <select>
                                    <option>商业部</option>
                                    <option>市场部</option>
                                    <option>技术部</option>
                                </select>
                            </div>
                        </Control>
                    </Field>
                    <Field label="对象" horizontal>
                        <Control help="不能为空">
                            <input
                                class="input is-danger"
                                type="text"
                                placeholder="机会"
                            />
                        </Control>
                    </Field>
                    <Field label="问题说明" horizontal>
                        <Control>
                            <textarea
                                class="textarea"
                                placeholder="备注信息"
                            ></textarea>
                        </Control>
                    </Field>
                    <Field label="多选" horizontal>
                        <Control>
                            <div class="check-group">
                                <label class="b-checkbox checkbox"
                                    ><input type="checkbox" value="lorem" />
                                    <span class="check is-primary"></span>
                                    <span class="control-label">选项一</span>
                                </label>
                                <label class="b-checkbox checkbox"
                                    ><input type="checkbox" value="ipsum" />
                                    <span class="check is-primary"></span>
                                    <span class="control-label">选项二</span>
                                </label>
                                <label class="b-checkbox checkbox"
                                    ><input type="checkbox" value="dolore" />
                                    <span class="check is-primary"></span>
                                    <span class="control-label">选项三</span>
                                </label>
                            </div>
                        </Control>
                    </Field>
                    <Field label="单选" horizontal>
                        <Control>
                            <div class="radio-group">
                                <label class="b-radio radio"
                                    ><input
                                        type="radio"
                                        name="sample-radio"
                                        value="one"
                                    />
                                    <span class="check"></span>
                                    <span class="control-label">第一个</span>
                                </label>
                                <label class="b-radio radio"
                                    ><input
                                        type="radio"
                                        name="sample-radio"
                                        value="two"
                                    />
                                    <span class="check"></span>
                                    <span class="control-label">第二个</span>
                                </label>
                            </div>
                        </Control>
                    </Field>
                    <Field label="开关" horizontal>
                        <Control>
                            <label class="switch is-rounded"
                                ><input type="checkbox" value="false" />
                                <span class="check"></span>
                                <span class="control-label">默认</span>
                            </label>
                        </Control>
                    </Field>
                    <Field label="文件提交" horizontal>
                        <Control>
                            <label class="upload control">
                                <a class="button is-primary">
                                    <span class="icon"
                                        ><i class="mdi mdi-upload"></i
                                    ></span>
                                    <span>上传文件</span>
                                </a>
                                <input type="file" />
                            </label>
                        </Control>
                    </Field>
                    <hr />
                    <Field label=" " group horizontal>
                        <Control>
                            <button type="submit" class="button is-primary">
                                <span>提交</span>
                            </button>
                        </Control>
                        <Control>
                            <button
                                type="button"
                                class="button is-primary is-outlined"
                            >
                                <span>重置</span>
                            </button>
                        </Control>
                    </Field>
                </form>
            </div>
        </div>
    </Main>
</template>

<script setup>
import Main from '@/components/Main.vue'
import Field from '@/components/form/Field.vue'
import Control from '@/components/form/Control.vue'
import { mdiAccount, mdiCheck, mdiMail } from '@mdi/js'
</script>
