import Vue from 'vue';
import { initFacebook } from '@/utils/initFacebook';

export default Vue.extend({
    name: 'fb-sign-in-button',
    props: {

    },
    async mounted() {
        await initFacebook();
        FB.getLoginStatus((response) => {
            console.log(response);
            if (response.status === 'connected') {
                const { accessToken } = response.authResponse;
                console.log(accessToken);
            } else {
                console.log(response);
            }
        });
    },
});