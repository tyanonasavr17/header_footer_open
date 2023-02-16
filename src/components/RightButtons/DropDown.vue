<template>
  <div
    v-if="links.length > 0"
    class="dropdown"
  >
    <a
      :href="url"
      :class="['header__right_part__a','dropdown-btn']"
      :title="title"
      v-bind="customAttrs"
    >
      <span>
        {{ title }}
      </span>
    </a>
    <div class="dropdown-content">
      <a
        v-for="link in links"
        :key="link"
        :href="link.url"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
  <a
    v-else
    :href="url"
    :class="['header__right_part__a']"
    :title="title"
    v-bind="customAttrs"
  >
    <span>
      {{ title }}
    </span>
  </a>
</template>
  
  
  <script>
  export default {
    props: {
      url: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      links:{
        type: Array,
        required: true,
      },
      customAttrs:{
        type: Object,
        default: null,
        required: false,
      }
    },
  };
  </script>

  <style global lang="scss">
  .header__right_part__a span {
    color: #fff;
    font-size: 14px;
    overflow: hidden;
    padding-left: 2px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  </style>

  <style scoped lang="scss">
    @import "/src/styles/right_part.scss";
  .header__right_part__a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    top: 0;
    min-width: 110px;
    padding-left: 3px;
    padding-right: 3px;
    text-decoration: none;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    width: 110px;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-btn:after {
      display: inline-block;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-top-color : rgb(255, 255, 255);
      border-left: 0.3em solid transparent;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>