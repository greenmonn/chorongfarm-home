<template>
    <section id="products" class="section">
        <div class="container has-text-centered">
            <h2 class="title">생산 버섯</h2>

            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="../../assets/noru.jpg">
                        </figure>
                        <h2>노루궁뎅이버섯</h2>
                        <p>치매 예방과 염증 억제에 <wbr> 탁월하다고 알려져 있습니다.</p>
                        <router-link :to="{ name: 'detail', params: { key: 'noru'} }" class="button is-light">구입하기</router-link>
                    </article>
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="../../assets/sanghwang.jpg">
                        </figure>
                        <h2>상황버섯</h2>
                        <p>항암효과와 면역력 증진을 <wbr> 도와주는 약용버섯입니다.</p>
                        <router-link
                        :to="{ name: 'detail', params: { key: 'sanghwang'} }"
                        class="button is-light">구입하기</router-link>
                    </article>
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="../../assets/oyster.jpg">
                        </figure>
                        <h2>느타리버섯</h2>
                        <p>각종 성인병을 예방하고 <wbr> 식재료로 사랑받는 버섯입니다.</p>
                        <router-link
                         :to="{ name: 'detail', params: { key: 'oyster'} }"
                         class="button is-light">구입하기</router-link>
                    </article>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
    article {
        figure {
            img {
                height: auto;
                object-fit: cover;
            }
        }
        h2 {
            font-weight: 600;
            font-size: 1.1rem;
            margin: 10px auto;
        }
        p {
            margin: 10px auto;
            white-space: nowrap;
        }
        button {
            margin: 10px auto;
        }
    }
</style>