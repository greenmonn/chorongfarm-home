<template>
  <section id="contact" class="section">
    <div class="container has-text-centered">
      <h2 class="title">문의하기</h2>

      <form>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control has-icons-left">
                <input v-model="name" class="input" type="text" placeholder="성함을 입력해주세요">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input v-model="phoneNumber" class="input" type="tel" placeholder="휴대폰 번호를 입력해주세요">
                <span class="icon is-small is-left">
                  <i class="fas fa-mobile"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  v-model="content"
                  class="textarea"
                  placeholder="문의 내용을 입력하고 아래 버튼을 클릭해 저희에게 전송해주세요. 확인 후 바로 연락드리겠습니다."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button" @click.prevent="confirm">문의사항 전송</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div :class="{'is-active': showModal}" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <div class="content">
              <p>입력하신 정보가 맞는지 다시 한번 확인해 주세요.</p>
              <p class="user-info">
                성함: {{ name }}
                <br>
                연락처: {{ phoneNumber }}
              </p>
              <p class="description">기재해주신 연락처로 문의사항에 대한 답변을 드릴게요.
                <br>하루에서 이틀 정도가 소요될 수 있으니 조금만 기다려주세요!
              </p>
            </div>
            <div>
              <a class="button is-default" @click="submitInquiry">전송할게요</a>
              <a class="button is-light" @click="closeModal">취소할래요</a>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase';
import config from '../../firebase/config';

firebase.initializeApp(config);

const database = firebase.firestore();
const inquiryCollection = database.collection('inquiries');

export default {
  data() {
    return {
      name: '',
      phoneNumber: '',
      content: '',
      showModal: false,
    };
  },
  methods: {
    confirm() {
      if (this.validateInput()) {
        this.showModal = true;
      }
    },
    closeModal() {
      this.showModal = false;
    },
    validateInput() {
      if (this.name !== '' && this.phoneNumber !== '') {
        return true;
      }
      alert('성함과 연락처를 모두 입력해주세요.');
      return false;
    },
    submitInquiry() {
      const id = new Date(Date.now()).toISOString();

      const vm = this;

      inquiryCollection
        .doc(id)
        .set({
          name: this.name,
          phoneNumber: this.phoneNumber,
          content: this.content,
        })
        .then(() => {
          vm.resetInputs();
          vm.showModal = false;
        })
        .catch(() => {
          alert('죄송합니다. 오류가 발생해서 전송하지 못했습니다.');
          vm.showModal = false;
        });
    },
    resetInputs() {
      this.name = '';
      this.phoneNumber = '';
      this.content = '';
    },
  },
};
</script>


<style lang="scss" scoped>
div.control {
  text-align: center;
  button {
    margin-top: 2%;
    border: 0px;
    background-color: $mainColor;
    color: white;
  }
}

.box {
  .content {
    .user-info {
      font-weight: 800;
    }

    .description {
      color: gray;
    }
  }
  .button {
    margin: 3% 0.5%;
  }
  .is-default {
    background-color: $mainColor;
    color: white;
  }
}
</style>
