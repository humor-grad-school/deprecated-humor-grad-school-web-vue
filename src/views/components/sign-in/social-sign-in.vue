<template>
    <div class="social-sign-in">
        <facebook-button />
        <google-button />
        <div>
            <input type="checkbox" v-model="saveAuth" />
            <label>내 정보 기억하기</label>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FacebookButton from './facebook-button.vue';
import GoogleButton from './google-button.vue';

export default Vue.extend({
    components: {
        FacebookButton,
        GoogleButton,
    },
    computed: {
        saveAuth: {
            get() {
                return this.$store.getters['auth/saveAuth'];
            },
            set(value) {
                this.$store.dispatch('auth/saveAuth', value);
            }
        }
    }
});
</script>
