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
                const {
                    data,
                    isSuccessful,
                    errorCode,
                 } = await authenticate(this.idToken, this.origin);
                if (isSuccessful) {
                    // TODO : save this session Token please~
                    console.log(data.sessionToken);

                    this.$router.push({
                        name: 'home',
                    });
                    return;
                }
                console.log(errorCode);
            } catch (statusCode) {
                console.error(statusCode);
                alert('sex');
            }
        }
    },
});
