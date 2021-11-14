<template>
  <!-- tweets -->
  <div
    class="
      flex
      px-3
      py-3
      border-b border-gray-100
      hover:bg-gray-50
      cursor-pointer
    "
  >
    <img
      src="http://picsum.photos/200"
      class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
    />
    <div class="flex-1 flex flex-col ml-3 space-y-1">
      <div class="text-sm space-x-1">
        <span class="font-bold">조국</span>
        <span class="text-gray-500 text-xs">@patriamea</span>
        <span>·</span>
        <span class="text-gray-500 text-xs">7분</span>
      </div>
      <!-- tweet body -->
      <div>
        저와 제 딸은 한일병원 인턴 자원 사실을 정청래 의원이나 부인께 알린 적이
        없습니다. [MT] 정청래 "조민 '멘탈'에 경의..아내는 약사, 의사 안뽑아" |
      </div>
      <!-- tweet actions -->
      <div class="flex justify-between">
        <div
          class="
            text-gray-500
            hover:bg-blue-50 hover:text-primary
            rounded-full
            p-2
          "
        >
          <i class="far fa-comment"></i>
          <span class="ml-1 text-sm">1</span>
        </div>
        <div
          class="
            text-gray-500
            hover:bg-green-50 hover:text-green-500
            rounded-full
            p-2
          "
        >
          <i class="fas fa-retweet"></i>
          <span class="ml-1 text-sm">2</span>
        </div>
        <div
          class="
            text-gray-500
            hover:bg-blue-50 hover:text-red-500
            rounded-full
            p-2
          "
        >
          <i class="far fa-heart"></i>
          <span class="ml-1 text-sm">3</span>
        </div>
        <div
          class="
            text-gray-500
            hover:bg-blue-50 hover:text-primary
            rounded-full
            p-2
          "
        >
          <i class="far fa-share-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
