<template>
  <v-col cols="12" md="8">
    <v-card
      title="프로필 수정"
      subtitle="작성한 프로필은 설정 > 계정에서 확인하실 수 있습니다"
    >
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            회사명
            <ev-text-field
              v-model="inputUserProfile.company"
              placeholder="회사명 (disabled)"
              type="text"
              disabled
            >
            </ev-text-field>
          </v-col>
          <v-col cols="12" md="4">
            닉네임
            <ev-text-field
              v-model="inputUserProfile.userName"
              type="text"
            >
            </ev-text-field>
          </v-col>
          <v-col cols="12" md="4">
            이메일
            <ev-text-field
              v-model="inputUserProfile.emailAddress"
              placeholder="이메일"
              type="text"
            >
            </ev-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            이름
            <ev-text-field
              v-model="inputUserProfile.firstName"
              type="text"
            >
            </ev-text-field>
          </v-col>
          <v-col cols="12" md="6">
            성
            <ev-text-field
              v-model="inputUserProfile.lastName"
              type="text"
            >
            </ev-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            우편번호
            <ev-input-number
              v-model="inputUserProfile.postCode"
            >
            </ev-input-number>
          </v-col>
          <v-col cols="12" md="9">
            주소
            <ev-text-field
              v-model="inputUserProfile.Address"
              type="text"
            >
            </ev-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            상세주소
            <ev-text-field
              v-model="inputUserProfile.detailAddress"
              type="textarea"
            >
            </ev-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-right">
            <ev-button
              type="text"
            >수정
            </ev-button>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'EditUserInfo',
  setup () {
    const inputUserProfile = reactive({
      company: '엑셈',
      userName: '',
      emailAddress: '',
      firstName: '',
      lastName: '',
      postCode: '',
      address: '',
      detailAddress: ''
    })

    return {
      inputUserProfile
    }
  }
}
</script>
