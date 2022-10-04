<script setup >
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import defaultLayout from "@/layouts/defaultLayout.vue";
import DashboardAppbarList from "@/components/Layout/dashboardAppbarList.vue";
import D3Rotate from "../../components/svgs/3d-rotate.vue";
import Trash from "@/components/svgs/trash.vue";
import SearchStatus from "@/components/svgs/search-status.vue";
import MailTable from "@/components/card/MailTable.vue";
import BaseCheckbox from "@/components/Form/baseCheckbox.vue";
import RightSidebar from "@/components/Layout/rightSidebar.vue";
let isRightSidebar = ref(false);
const mailRef = ref();
const ex4 = ref(false);
const router = useRouter();
const searchByIdAndProduct = () => { };
onBeforeMount(() => {
  // usePushBreadcrumb({
  //   route: "/mails",
  //   text: "Pochtalar",
  // });
});
const isRightSidebarChanger = () => {
  console.log(isRightSidebar);
  isRightSidebar.value = !isRightSidebar.value;
};
const pushSelectedItems = () => {
  // usePushSelectedItems(mailRef.value?.itemsSelected);
  router.push("/mails/give-to-curier");
};
// const logit = (salom) => {
//   console.log("salomsizlarga", salom);

//   console.log(mailRef.value.itemsSelected);
// };
</script>
<template>
  <default-layout :rightSidebar="isRightSidebar" :rightWidth="540">
    <!-- <v-btn @click="logit">MailRef</v-btn> -->
    <template v-slot:appbar>
      <DashboardAppbarList />
    </template>
    <RightSidebar color="blue"/>
    <!-- <v-navigation-drawer temporary v-model="isRightSidebar" location="right" absolute></v-navigation-drawer> -->
    <template #rigthsidebar>
      <div class="give-to-curier-right-sidebar">
        <p class="title">Kuryer biriktirish</p>
        <div class="mails-main-search-rightsidebar">
          <form @submit.prevent="searchByIdAndProduct">
            <div class="mails-search">
              <input type="search" class="mails-search-input" placeholder="ID yoki Mahsulot qidirish" />
              <SearchStatus />
            </div>
          </form>
        </div>
        <div class="prepared-to-give-curier-products">
          <div class="prepared-curier-product px-8 py-5" :class="{bgYellow:ex4}">
            <div class="prepared-curier-product-name d-flex">
              <div class="info-curier flex-grow-1 flex-shrink-1">
                Ismi: <span>Giyosbek</span>
              </div>
              <div class="curier-checkbox">
                <BaseCheckbox color="yellow" v-model="ex4" class="mr-8" />
              </div>
            </div>
            <div class="info-curier mt-3">ID: <span>5993</span></div>
            <div class="info-curier mt-3">
              Balans: <span>12,270,3300 so‘m</span>
            </div>
            <div class="info-curier mt-3">
              Telefon raqam: <span>+998 (99) 444-33-22</span>
            </div>
            <div class="info-curier mt-3">Mavjud listlar: <span>5</span></div>
            <div class="info-curier mt-3">Bajarilgan: <span>3</span></div>
          </div>

        </div>
        <div class="give-to-curier-actions mt-8 ml-10">
          <v-btn color="yellow-darken-2" @click="mailRef.value?.itemsSelected||$router.push('/mails/give-to-curier')"
            class="mr-8 give-to-curier-action-btn" flat>Saqlash</v-btn>
          <v-btn variant="outlined" @click="isRightSidebarChanger()" flat color="#1E0E62" class="give-to-curier-action-btn">Bekor qilish</v-btn>
        </div>
      </div>
    </template>
    <!-- <v-navigation-drawer location="right" absolute app>
      salom
    </v-navigation-drawer> -->
    <div class="mails-main-search-btns mb-5 d-flex justify-space-between">
      <div class="mails-main-btns">
        <v-btn class="mails-btn" @click="$router.push('/mails/add-new-post')" color="yellow-darken-2" size="small">
          <v-icon>mdi-plus</v-icon> Pochta qo'shish
        </v-btn>
        <v-btn :color="mailRef?.itemsSelected?.length !== 0 ? '#1E0E62' : '#BCBCBC'" @click="isRightSidebarChanger()"
          class="mails-btn" size="small">
          <!-- mailRef?.itemsSelected?.length !== 0 ? pushSelectedItems() : null -->
          <v-avatar>
            <D3Rotate />
          </v-avatar> Kuryerga topshirish
        </v-btn>
        <v-btn class="mails-btn" :color="mailRef?.itemsSelected?.length !== 0 ? '#CD1717' : '#BCBCBC'" size="small">
          <v-avatar>
            <Trash />
          </v-avatar> Tanlanganlarni o'chirish
        </v-btn>
      </div>
      <div class="mails-main-search">
        <form @submit.prevent="searchByIdAndProduct">
          <div class="mails-search">
            <input type="search" class="mails-search-input" placeholder="ID yoki Mahsulot qidirish" />
            <SearchStatus />
          </div>
        </form>
      </div>
    </div>
    <div class="mails-sort-buttons">
      <v-btn class="mails-sort-btn" text flat color="#EBEBEB" rounded height="35"><span
          class="mails-sort-btn-chip">5</span>Yuboruvchi/Do‘kon
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn class="mails-sort-btn" text flat color="#EBEBEB" rounded height="35">Haydovchi <v-icon right>
          mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn class="mails-sort-btn" text flat color="#EBEBEB" rounded height="35">Qayerdan - Qayerga(viloyatlar)
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn class="mails-sort-btn" text flat color="#EBEBEB" rounded height="35">Sana bo‘yicha <v-icon right>
          mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <MailTable ref="mailRef" />
    <router-view />
    <!-- <vue3- -->
  </default-layout>
</template>


<style lang="scss" scoped>
.give-to-curier-right-sidebar {
  .title {
    font-style: normal;
    font-weight: 600;
    @extend %fSize22lHeight27;
    margin: 40px 30px;
  }

  .mails-main-search-rightsidebar {
    background: $gray-eb;
    font-size: 16px;
    padding: 0 15px;

    // border-radius: 8px;
    .mails-search {
      display: flex;
      align-items: center;

      input {
        flex: 1 1 auto;
        height: 46px;
        outline: none;
      }
    }
  }

  .prepared-to-give-curier-products {
    .prepared-curier-product {
      border-top: 1px solid #f0b400;
      border-bottom: 1px solid #f0b400;

      .prepared-curier-product-name {
        .info-curier {
          @extend %fSize18lHeight22;
          font-weight: 500;
          font-style: normal;

          span {
            font-weight: 600;
            @extend %fSize20lHeight24;
          }

          .curier-checkbox {

            // display: inline;
            // margin-bottom: 20px;
            .checkbox-checking {
              transform: scale(2);
            }
          }
        }
      }

      .info-curier {
        @extend %fSize18lHeight22;
        font-weight: 500;
        font-style: normal;

        span {
          font-weight: 600;
          @extend %fSize20lHeight24;
        }
      }
    }
  }

  .give-to-curier-actions {
    .give-to-curier-action-btn {
      text-transform: none;
      @extend%fSize18lHeight22;
    }
  }
}

.bgYellow {
  background: #FFF0C5;
}

// .mails-main-search-btns{

// }
.mails-main-btns {
  display: flex;
  justify-content: space-around;
  color: white;

  .mails-btn {
    text-transform: none;
    height: 46px;
    // margin: 0 15px;
    color: $white;
    background: $gray-bc;
    font-size: 18px;
    margin: 0 10px;
    border-radius: 8px;
    font-weight: bold;
  }

  .mails-main-btn-icon {
    margin-right: 5px;
    line-height: 22px;
  }
}

.mails-main-search {
  background: $gray-eb;
  font-size: 14px;
  padding: 0 15px;
  border-radius: 8px;

  .mails-search {
    display: flex;
    align-items: center;

    input {
      flex: 1 1 auto;
      height: 46px;
      outline: none;
    }
  }
}

.mails-sort-buttons {
  margin-bottom: 15px;

  .mails-sort-btn {
    text-transform: none;
    margin-right: 50px;
    @extend %fSize16lHeight20;
    font-weight: bold;

    .mails-sort-btn-chip {
      background: $red-500;
      color: $white;
      border-radius: 30px;
      height: 16px;
      width: 14px;

      @extend %fSize10lHeight12;
      padding: 2px 1px;
      // text-align: center;
    }
  }
}
</style>