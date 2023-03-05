<template>
   <v-container>
      <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2"
            v-for="item in this.oPictures" :key="item.key"
          >
            <v-card class="py-2 px-2">
                  <!-- 사진을 읽어서 표시하고 세부 페이지로 이동하도록 링크 설정 -->
                  <v-img :src="item.url" height="200px" class="pointer"  @click="fnDisPlayInfo(item['.key'])">

                  </v-img>

                  <!-- 사진의 제목과 내용을 바인딩하여 표시 -->
                  <v-card-title>
                    <h1 class="title grey--text text-darken-3 mb-3">{{ item.title }}</h1>
                    <p class="body-1 grey--text">{{ item.info }}</p>
                  </v-card-title>
            </v-card>
          </v-col>

          <v-col  cols="12" class="text-cener">
            <!-- 만약에 업로된 이미지가 없으면 안내 문구 표시 -->
            <p v-if="!this.oPictures.length">
              사진이 없습니다. 추가해 주세요!
            </p>
          </v-col>


          <!-- 오른쪽 하단에 포스트 추가 버튼 표시 -->
          <v-btn @click="$router.push('/post')" color="red" dark fixed bottom right fab>
              <v-icon>add</v-icon>
          </v-btn>
      </v-row>
   </v-container>
</template>


<script>
//파이어베이스 DB 객체 가져옴
import {oPicturesinDB} from "@/datasources/firebase";
export default {
  name: 'App',

  data(){
    return{
          oPictures:[] //사진 데이터 저장 변수
    }
  },
  //파이어베이스와 연결된 뷰파이어 oPictures 객체 준비
  firebase:{oPictures:oPicturesinDB},
  methods:{
    //라우터를 이용해서 세부 페이지로 이동할 때 사진의 ID 전달
    fnDisPlayInfo(pID){
      this.$router.push({
        name:"info_page",
        params:{p_id:pID}
      })
    }
  }
};
</script>
<style>
/* 마우스 커서가 손 모양이 되도록 설정 */
.pointer{
  cursor: pointer;
}
.text-cener{
  text-align: center;
}
</style>