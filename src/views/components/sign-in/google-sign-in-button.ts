import Vue from 'vue';
import { initGoogle } from '@/utils/initGoogle';

export default Vue.extend({
    name: 'fb-sign-in-button',
    props: {

    },
    data() {
        return {
            googleLoginButtonId: 'google-button',
        };
    },
    async mounted() {
        await initGoogle();
        gapi.signin2.render(this.googleLoginButtonId, {
            scope: 'profile email',
            width: 240,
            height: 50,
            longtitle: true,
            theme: 'dark',
            onsuccess: this.onGoogleLoginSuccess,
            onfailure: this.onGoogleLoginFailed,
        });
    },
    methods: {
        onGoogleLoginSuccess() {
            console.log('ah successful');
        },
        onGoogleLoginFailed() {
            console.log('ah failed');
        },
    }
});