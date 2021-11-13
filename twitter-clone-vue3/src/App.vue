<template>
  <div class="flex h-screen container mx-auto">
    <!-- side section(1/4) -->
    <div class="w-20 lg:w-1/4 pt-5 lg:ml-10 flex flex-col justify-between border-r border-gray-100">
    <div class="flex flex-col items-center lg:items-start">
      <!-- twitter logo -->
      <i class="fab fa-twitter fa-fw text-2xl text-primary lg:ml-4 mb-3"></i>
      <!-- flex-col을 넣어야 세로로 정렬 -->
      <div class="flex flex-col items-start space-y-1">
        <!-- sidemenu icons -->
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="fas fa-home fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">홈</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="fas fa-hashtag fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">탐색하기</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="far fa-bell fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">알림</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="far fa-envelope fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">쪽지</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="far fa-bookmark fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">북마크</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="far fa-list-alt fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">리스트</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="far fa-user fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">프로필</span>
        </div>
        <div class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer">
          <i class="fas fa-ellipsis-h fa-fw text-2xl"></i>
          <span class="ml-5 text-lg hidden lg:inline-block">더보기</span>
        </div>
      </div>
        <!-- tweet button -->
        <div class="w-full lg:pr-3 flex justify-center">
          <button
            class="
              mt-3
              bg-primary
              text-white
              lg:w-full
              w-12
              h-12
              rounded-full
              hover:bg-dark
            "
          >
            <span class="hidden lg:block">트윗</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
      </div>
    </div>
      <!-- profile button -->
      <div class="lg:pr-3 mb-3">
          <button
            class="
            hidden
            lg:flex
              mt-3
              px-2
              py-1
              w-full
              h-12
              rounded-full
              hover:bg-blue-50
              items-center
            "
          >
          <!-- 더미 이미지 -->
            <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full">
            <div class="lg:ml-2 hidden lg:block">
              <div class="text-sm font-bold">youngrae.com</div>
              <div class="text-xs text-gray-500 text-left">@youngrae</div>
            </div>
            <!-- ml-auto로 주면 보통 끝으로 간다 -->
            <i class="ml-auto fas fa-ellipsis-h fa-fw text-sm hidden lg:block"></i>
          </button>
          <div class="lg:hidden flex justify-center">
            <img src="http://picsum.photos/100" class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80">
          </div>
      </div>
    </div>
    <!-- main & trend section  -->
    <div class="flex-1 flex h-screen">
        <!-- <Home></Home> -->
        <Messages></Messages>
    </div>
  </div>
</template>

<script>
// import Home from "./pages/Home.vue";
import Messages from "./pages/Messages.vue";

export default {
  components: {
    // Home,
    // Notifications,
    Messages,
  },
  setup() {

  },
};
</script>

<style></style>