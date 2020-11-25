<template>
  <div class="table-block">
    <Th>{{ title }}</Th>
    <Td
      >{{ text
      }}<a class="link" :href="href"
        >{{ linktext
        }}<svg viewBox="0 0 16 16">
          <path
            d="M11.772 8.398a.582.582 0 00.047-.796l-5.52-5.427c-.235-.233-.609-.233-.796 0l-.328.328a.538.538 0 000 .795l4.772 4.679-4.772 4.725a.538.538 0 000 .795l.328.328c.187.234.561.234.795 0l5.474-5.427z"
          /></svg></a
    ></Td>
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
    href: {
      type: String,
      required: true,
    },
    linktext: {
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
.link {
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: #1ea7fd;
  text-decoration: none;
  transition: all 0.3s ease;
  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
    transition: all 0.3s ease;
    @include media(md, max) {
      width: 16px;
      height: 16px;
    }
  }
  &:hover {
    color: darken(#1ea7fd, 10%);
    svg {
      transform: translateX(4px);
    }
  }
}
</style>
