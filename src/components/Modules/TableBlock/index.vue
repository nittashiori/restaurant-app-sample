<template>
  <div class="table-block">
    <Th>{{ title }}</Th>
    <Td>{{ text }}</Td>
  </div>
</template>

<script>
import Th from '~/components/Atoms/Th'
import Td from '~/components/Atoms/Td'

export default {
  components: {
    Th,
    Td,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.table-block {
  width: 100%;
  display: flex;
  .th {
    margin: 0 8px 0 0;
    @include media(md, max) {
      margin: 0;
    }
  }
}
.table-block:last-child {
  .th {
    border-bottom: 1px solid $primary-color;
  }
  .td {
    border-bottom: 1px solid $border-color;
  }
}
</style>
