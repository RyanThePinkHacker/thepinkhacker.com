<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div class="dropdown" tabindex="0">
        <BorderedBlock class="dropdown-title">{{ title }}</BorderedBlock>
        <div class="dropdown-items-wrapper">
            <BorderedBlock class="dropdown-items" tag="ul">
                <slot />
            </BorderedBlock>
        </div>
    </div>
</template>

<style lang="scss">
.dropdown {
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover,
    &:focus {
        .dropdown-items-wrapper {
            padding-top: 0;
        }

        .dropdown-items {
            display: flex;
            flex-direction: column;
            height: max-content;
            width: max-content;
        }
    }
}

.dropdown-items {
    list-style: none;
    display: none;
    margin-top: 0;
}

.dropdown-items-wrapper {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 100%;
    bottom: 0;
    padding-top: 30px;
    transition: padding-top 250ms ease;
}
</style>
