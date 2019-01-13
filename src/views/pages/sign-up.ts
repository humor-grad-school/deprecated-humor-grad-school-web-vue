import Vue from 'vue';
import { authenticate } from '@/api/authenticate';
import { signUp } from '@/api/signUp';

export default Vue.extend({
    name: 'sign-up',
    components: {

    },
    data() {
        return {
            origin: '',
            idToken: '',
            username: '',
        };
    },
    beforeRouteEnter(to, _from, next) {
        next((vm: any) => {
            vm.getParams(to);
        });
    },
    methods: {
        getParams(route) {
            const {
                origin,
                idToken,
            } = route.params;
            this.origin = origin;
            this.idToken = idToken;
        },
        async signUp() {
            try {
                await signUp(this.username, this.origin, this.idToken);
                const { sessionToken } = await authenticate(this.idToken, this.origin);
                console.log(sessionToken);
                // TODO : save this session Token please~

                this.$router.push({ name: 'home' });
            } catch (errorCodeOrStatus) {
                // errorCode for this function is not prepared yet
                // const {
                //     errorCode,
                // } = await response.json();
                // switch (errorCode) {
                // }
                console.error(errorCodeOrStatus);
                alert('sex');
            }
        }
    },
});
