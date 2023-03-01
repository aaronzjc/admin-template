<template>
    <BoxMain>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    <BasicIcon :name="mdiBallot"></BasicIcon>
                    表单示例
                </p>
            </header>
            <div class="card-content">
                <form method="get">
                    <FormField label="用户信息" group horizontal>
                        <FormControl :icon="mdiAccount" expanded>
                            <input
                                class="input"
                                type="text"
                                placeholder="姓名"
                            />
                        </FormControl>
                        <FormControl :icon="mdiMail" expanded>
                            <input
                                class="input"
                                type="email"
                                placeholder="邮件"
                                value=""
                            />
                        </FormControl>
                    </FormField>
                    <FormField label="部门" horizontal>
                        <FormControl>
                            <div class="select">
                                <select>
                                    <option>商业部</option>
                                    <option>市场部</option>
                                    <option>技术部</option>
                                </select>
                            </div>
                        </FormControl>
                    </FormField>
                    <FormField label="对象" horizontal>
                        <FormControl help="不能为空">
                            <input
                                class="input is-danger"
                                type="text"
                                placeholder="机会"
                            />
                        </FormControl>
                    </FormField>
                    <FormField label="问题说明" horizontal>
                        <FormControl>
                            <textarea
                                class="textarea"
                                placeholder="备注信息"
                            ></textarea>
                        </FormControl>
                    </FormField>
                    <FormField label="多选" horizontal>
                        <FormControl>
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
                        </FormControl>
                    </FormField>
                    <FormField label="单选" horizontal>
                        <FormControl>
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
                        </FormControl>
                    </FormField>
                    <FormField label="开关" horizontal>
                        <FormControl>
                            <label class="switch is-rounded"
                                ><input type="checkbox" value="false" />
                                <span class="check"></span>
                                <span class="control-label">默认</span>
                            </label>
                        </FormControl>
                    </FormField>
                    <FormField label="文件提交" horizontal>
                        <FormControl>
                            <label class="upload control">
                                <a class="button is-primary">
                                    <BasicIcon :name="mdiUpload"></BasicIcon>
                                    <span>上传文件</span>
                                </a>
                                <input type="file" />
                            </label>
                        </FormControl>
                    </FormField>
                    <hr />
                    <FormField label=" " group horizontal>
                        <FormControl>
                            <button
                                type="button"
                                class="button is-primary"
                                @click="
                                    $toast.show('保存成功，请返回首页查看！')
                                "
                            >
                                <span>保存数据</span>
                            </button>
                        </FormControl>
                        <FormControl>
                            <button type="button" class="button is-light">
                                <span>重置</span>
                            </button>
                        </FormControl>
                    </FormField>
                </form>
            </div>
        </div>
    </BoxMain>
</template>

<script setup>
import BoxMain from '@/components/BoxMain.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import { mdiAccount, mdiBallot, mdiMail, mdiUpload } from '@mdi/js'
import BasicIcon from '@/components/BasicIcon.vue'
</script>
