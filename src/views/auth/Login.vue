<script setup>
import { reactive } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper.vue'
import Label from '@/components/Label.vue'
import Input from '@/components/Input.vue'
import Checkbox from '@/components/Checkbox.vue'
import Button from '@/components/Button.vue'

const loginForm = reactive({
    email: '',
    password: '',
    remember: false,
    processing: false,
})

const login = () => {}
</script>

<template>
    <form @submit.prevent="login">
        <div class="grid gap-6">
            <!-- Email input -->
            <div class="space-y-2">
                <Label for="email" value="Email" />

                <InputIconWrapper icon="tabler--mail">
                    <Input
                        withIcon
                        id="email"
                        type="email"
                        class="block w-full"
                        placeholder="Email"
                        v-model="loginForm.email"
                        required
                        autofocus
                        autocomplete="username"
                    />
                </InputIconWrapper>
            </div>

            <!-- Password input -->
            <div class="space-y-2">
                <Label for="password" value="Password" />

                <InputIconWrapper icon="tabler--lock">
                    <Input
                        withIcon
                        id="password"
                        type="password"
                        class="block w-full"
                        placeholder="Password"
                        v-model="loginForm.password"
                        required
                        autocomplete="current-password"
                    />
                </InputIconWrapper>
            </div>

            <!-- Remember me -->
            <div class="flex items-center justify-between">
                <label class="flex items-center">
                    <Checkbox
                        name="remember"
                        v-model:checked="loginForm.remember"
                    />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>

                <router-link
                    :to="{ name: 'ForgotPassword' }"
                    class="text-sm text-blue-500 hover:underline"
                >
                    Forgot your password?
                </router-link>
            </div>

            <!-- Login button -->
            <div>
                <Button
                    type="submit"
                    class="w-full justify-center gap-2"
                    :disabled="loginForm.processing"
                    start-icon="tabler--login"
                >
                    <span>Log in</span>
                </Button>
            </div>

            <!-- Register link -->
            <p class="text-sm text-gray-600 dark:text-gray-400">
                Don't have an account?
                <router-link
                    :to="{ name: 'Register' }"
                    class="text-blue-500 hover:underline"
                >
                    Register
                </router-link>
            </p>
        </div>
    </form>
</template>
