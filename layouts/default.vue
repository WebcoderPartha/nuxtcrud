<template>
    <div class="container">
        <Navbar />
        <slot/>
    </div>
</template>

<script setup>
    useHead({
        link: [
            {
                href: '/assets/css/bootstrap.min.css',
                rel: 'stylesheet'
            }
        ],
        script: [
            {
                src: '/assets/js/bootstrap.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: '/assets/js/bootstrap.bundle.min.js',
                tagPosition: 'bodyClose'
            
            }
        ]
    })
</script>

<style lang="scss" scoped>


</style>