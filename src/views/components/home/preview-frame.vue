<template>
    <div class="preview-frame">
        <div class="frame-header">
            <slot name="header"></slot>
        </div>
        <div class="frame-body">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.preview-frame {
    border: 1px solid #666666;
}
.frame-header {
    background-color: #b1b1b1;
    padding: 8px 12px;
}
.frame-body {
    background-color: #ffffff;
    padding: 8px 12px;
}
</style>
