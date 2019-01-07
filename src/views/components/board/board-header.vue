<template>
    <thead>
        <tr>
            <th v-for="col in cols" :key="col"></th>
        </tr>
    </thead>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: ['cols']
});
</script>
