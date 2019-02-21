<template>
    <div>
        <div class="content-title">간단한 정보 입력으로 쉽게 주문하실 수 있습니다.</div>
        <div class="content">
            <div class="order-info box"></div>
            <div class="order-form">
                <dl>
                    <dt>이름</dt>
                    <dd>
                        <input type="text">
                    </dd>
                </dl>
                <dl>
                    <dt>연락처</dt>
                    <dd>
                        <input type="tel" name id>
                    </dd>
                </dl>
                <dl>
                    <dt>주소</dt>
                    <dd>
                        <input type="text">
                    </dd>
                </dl>
            </div>
        </div>
        <button @click="testPay" class="filled-button">결제하기</button>
    </div>
</template>

<script>
export default {
    created() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.content {
    margin-top: 3%;
}
</style>
