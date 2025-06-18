<template>
<template v-if ($paginator->hasPages())
    <nav role="navigation" aria-label="Pagination Navigation">
        <ul class="pagination">
            {{-- Previous Page Link --}}
            <template v-if ($paginator->onFirstPage())
                <li class="page-item disabled" aria-disabled="true">
                    <span class="page-link">{!! __('pagination.previous') !!}</span>
                </li>
            @else
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->previousPageUrl() }}" rel="prev">
                        {!! __('pagination.previous') !!}
                    </a>
                </li>
            </template>

            {{-- Next Page Link --}}
            <template v-if ($paginator->hasMorePages())
                <li class="page-item">
                    <a class="page-link" href="{{ $paginator->nextPageUrl() }}" rel="next">{!! __('pagination.next') !!}</a>
                </li>
            @else
                <li class="page-item disabled" aria-disabled="true">
                    <span class="page-link">{!! __('pagination.next') !!}</span>
                </li>
            </template>
        </ul>
    </nav>
</template>

</template>

<script setup>
// Add your JS logic here
</script>

<style scoped>
/* Add your styles here */
</style>