<template>
  <div id="nav">
    <div class="logo">
      <router-link :to="{path: '/index'}">
        <img :src="logo" alt="">
      </router-link>
    </div>
    <div class="nav-bar">
      <router-link v-for="item in navRoutes" :to="{name: item.name}" :key="item.name">{{$t(item.meta.title)}}</router-link>
    </div>
    <div class="user-setting">
      <div class="user-setting__item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>
              {{$t(langs[$store.getters.lang])}}
            </span>
            <svg-icon icon-class="arrow-down"></svg-icon>
          </span>
          <el-dropdown-menu class="dropdown-menu" slot="dropdown">
            <el-dropdown-item v-for="(item, key) in langs" :key="key" @click.native="checkLang(key)">{{$t(item)}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="user-setting__item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>
              {{$t(themes[$store.getters.theme])}}
            </span>
            <svg-icon icon-class="arrow-down"></svg-icon>
          </span>
          <el-dropdown-menu class="dropdown-menu" slot="dropdown">
            <el-dropdown-item v-for="(item, key) in themes" :key="key" @click.native="checkTheme(key)">{{$t(item)}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-if="$store.getters.userInfo.username" class="user-setting__item">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>
              {{$t('user.userInfo')}}
            </span>
            <svg-icon icon-class="arrow-down"></svg-icon>
          </span>
          <el-dropdown-menu class="dropdown-menu" slot="dropdown">
            <el-dropdown-item>{{$t('user.info')}}</el-dropdown-item>
            <el-dropdown-item>{{$t('user.account')}}</el-dropdown-item>
            <el-dropdown-item>{{$t('user.massage')}}</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">{{$t('user.logout')}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-else class="user-setting__item">
        <router-link :to="{name: 'login'}">{{$t('common.login')}}</router-link>
        <span>/</span>
        <router-link :to="{name: 'login'}">{{$t('common.registered')}}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { navRoutes } from "../router";

export default {
  components: {},
  data() {
    return {
      logo: require('../assets/images/logo.png'),
      navRoutes,
      themes: {
        dark: 'common.dark',
        light: 'common.light'
      },
      langs: {
        zh: 'common.zh',
        en: 'common.en'
      }
    }
  },
  created() {
    this.checkTheme(this.$store.getters.theme)
    this.checkLang(this.$store.getters.lang)
  },
  methods: {
    checkTheme(theme) {
      this.$store.dispatch('setTheme', theme)
      window.document.documentElement.setAttribute('data-theme', theme)
    },
    checkLang(lang) {
      this.$store.dispatch('setLang', lang)
      this.$i18n.locale = lang
    },
    logout() {
      // 定时器模拟远程登出，登出成功后本地登出
      setTimeout(() => {
        this.$store.dispatch('Logout').then(res => {
          this.$router.push({name: 'login'})
        })
      }, 100);
    },
  }
}
</script>
<style lang='scss' scoped>
#nav {
  position: absolute;
  z-index: 1001;
  display: flex;
  height: 60px;
  width: 100%;
  padding: 0 40px;
  @include bg_color("bg_color_max");
  @include f_color("font_color_base");

  .logo {
    width: 120px;
    padding: 16px 0;

    a {
      width: 100%;
      padding: 0;
      height: 100%;
    }

    img {
      height: 100%;
    }
  }

  .nav-bar {
    flex: 1;
    text-align: center;
    line-height: 30px;

    .router-link-active {
      font-size: 16px;
      @include f_color("font_color_max");
    }
  }

  a {
    display: inline-block;
    padding: 15px 20px;
    font-size: 14px;
    text-decoration: none;
    @include f_color("font_color_base");

    &:hover {
      @include f_color("font_color_max");
    }
  }

  .user-setting {
    width: 600px;
    display: flex;
    justify-content: flex-end;

    .user-setting__item {
      padding: 15px 0;
      text-align: center;
      width: 120px;
      line-height: 30px;

      .el-dropdown-link {
        @include f_color("font_color_base");
      }

      a {
        padding: 0 4px;
      }
    }
  }
}
</style>