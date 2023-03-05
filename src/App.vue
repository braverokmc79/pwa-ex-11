<template>
  <v-app>
    <v-app-bar app color="red" dark fixed>
      <!-- 홈 화면이 아닌 경우 돌아가기 버튼 표시 -->
      <v-btn icon v-if="$route.name !== 'home_page'" @click="$router.go(-1) ">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>카메라 갤러리</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 홈 화면에서만 촬영아이콘 표시-->
      <v-btn icon v-if="$route.name=='home_page'" @click="$router.push('/camera')">
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-app-bar>
   
    <!-- 라우터에 등록했던 홈, 카메라 촬영, 상세 정보, 포스트 페이지가 표시 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
  export default {
    name: 'App'
  }
</script>