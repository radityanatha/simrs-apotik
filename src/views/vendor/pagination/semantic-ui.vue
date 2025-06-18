<template>
<template v-if ($paginator->hasPages())
    <div class="ui pagination menu" role="navigation">
        {{-- Previous Page Link --}}
        <template v-if ($paginator->onFirstPage())
            <a class="icon item disabled" aria-disabled="true" aria-label="@lang('pagination.previous')"> <i class="left chevron icon"></i> </a>
        @else
            <a class="icon item" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')"> <i class="left chevron icon"></i> </a>
        </template>

        {{-- Pagination Elements --}}
        <template v-for ($elements as $element)
            {{-- "Three Dots" Separator --}}
            <template v-if (is_string($element))
                <a class="icon item disabled" aria-disabled="true">{{ $element }}</a>
            </template>

            {{-- Array Of Links --}}
            <template v-if (is_array($element))
                <template v-for ($element as $page => $url)
                    <template v-if ($page == $paginator->currentPage())
                        <a class="item active" href="{{ $url }}" aria-current="page">{{ $page }}</a>
                    @else
                        <a class="item" href="{{ $url }}">{{ $page }}</a>
                    </template>
                </template>
            </template>
        </template>

        {{-- Next Page Link --}}
        <template v-if ($paginator->hasMorePages())
            <a class="icon item" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')"> <i class="right chevron icon"></i> </a>
        @else
            <a class="icon item disabled" aria-disabled="true" aria-label="@lang('pagination.next')"> <i class="right chevron icon"></i> </a>
        </template>
    </div>
</template>

</template>

<script setup>
// Add your JS logic here
</script>

<style scoped>
/* Add your styles here */
</style>