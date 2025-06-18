<template>
<template v-if ($paginator->hasPages())
    <nav>
        <ul class="pagination">
            {{-- Previous Page Link --}}
            <template v-if ($paginator->onFirstPage())
                <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                    <span aria-hidden="true">&lsaquo;</span>
                </li>
            @else
                <li>
                    <a href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">&lsaquo;</a>
                </li>
            </template>

            {{-- Pagination Elements --}}
            <template v-for ($elements as $element)
                {{-- "Three Dots" Separator --}}
                <template v-if (is_string($element))
                    <li class="disabled" aria-disabled="true"><span>{{ $element }}</span></li>
                </template>

                {{-- Array Of Links --}}
                <template v-if (is_array($element))
                    <template v-for ($element as $page => $url)
                        <template v-if ($page == $paginator->currentPage())
                            <li class="active" aria-current="page"><span>{{ $page }}</span></li>
                        @else
                            <li><a href="{{ $url }}">{{ $page }}</a></li>
                        </template>
                    </template>
                </template>
            </template>

            {{-- Next Page Link --}}
            <template v-if ($paginator->hasMorePages())
                <li>
                    <a href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">&rsaquo;</a>
                </li>
            @else
                <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                    <span aria-hidden="true">&rsaquo;</span>
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