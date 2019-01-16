import Vue from 'vue';
import { HgsRestApi } from '@/api/types/generated/client/ClientApis';

export default Vue.extend({
    name: 'post',
    mounted() {
        this.increaseViewCount();
    },
    methods: {
        async increaseViewCount() {
            await HgsRestApi.increaseViewCount({
                postId: this.$route.params.postId,
            }, {});
        }
    },
});
