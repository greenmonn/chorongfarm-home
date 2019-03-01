<template>
  <div id="content">
    <ul class="timeline">
      <li class="event" data-date="1999.10">
        <h3>농원 설립</h3>
        <p>경상북도 문경시에서 금초롱버섯농원이 시작되었습니다.</p>
      </li>
      <li class="event" data-date="2005">
        <h3>버섯생장 환경관리 자동화</h3>
        <p>설립 이래 꾸준한 연구개발로 버섯생장 환경관리의 자동화를 실현했습니다.</p>
      </li>
      <li class="event" data-date="2011">
        <h3>재배 버섯 종류 확충</h3>
        <p></p>
        <p>상황버섯, 영지버섯 등의 약용버섯을 중심으로 시작했지만, 노루궁뎅이버섯, 느타리버섯과 같이 식재료로 활용할 수 있는 버섯을 생산하기 위한 기술 연구를 진행했습니다. 많은 실험을 통해 생산 라인을 안정화하였고 지속적으로 시장에 버섯을 공급하고 있습니다.</p>
      </li>
      <li class="event" data-date="2018.11">
        <h3>금초롱버섯농원의 소통 채널 오픈</h3>

        <p>더 많은 사람들과 농원의 하루하루를 공유하기 위해 소통할 수 있는 공간을 만들었습니다. 금초롱버섯농원은 한 가족이 운영해나가는 소규모 농장입니다. 들러주시는 분들께 농부가 직접 쓰는 농장 일기, 그리고 조금 더 쉽게 금초롱버섯농원의 생산물을 구입할 수 있는 경로를 제공하려고 합니다.</p>

        <p>
          <strong>저희는 품질 좋고 건강한 버섯을 생산하기 위해 유기농만을 고집합니다. 인공적인 생장 유도를 위한 어떤 편법도 쓰지 않습니다.</strong>
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
/* Variables */

@brown: #92531f;

@background: white;

@color-primary: @brown;
@color-light: black;
@spacing: 50px;
@radius: 4px;

@date: 120px;
@dotborder: 4px;
@dot: 11px;
@line: 4px;

/* Base */

body {
  font-size: 16px;
}

p {
  margin-top: 1.5%;
  font-size: 1rem;
  font-weight: 300;
  color: black;
}

strong {
  font-weight: 600;
}

h1 {
  letter-spacing: 1.5px;
  color: @color-light;
  font-weight: 400;
  font-size: 2.4em;
}

#content {
  margin: 5% auto;
}

/* Timeline */

.timeline {
  border-left: @line solid @color-primary;
  border-bottom-right-radius: @radius;
  border-top-right-radius: @radius;
  color: fade(black, 80%);
  margin-left: 28%;
  letter-spacing: 0.5px;
  position: relative;
  line-height: 1.4em;
  font-size: 1.03em;
  padding: @spacing;
  list-style: none;
  text-align: left;
  font-weight: 100;
  max-width: 50%;

  @media only screen and (max-width: 853px) {
    max-width: 70%;
    padding-right: 20px;
  }

  h1 {
    letter-spacing: 1.5px;
    font-weight: 100;
    font-size: 1.4em;
  }

  h2,
  h3 {
    letter-spacing: 1.5px;
    font-weight: 400;
    font-size: 1.4em;

    @media only screen and (max-width: 765px) {
      font-size: 1.3em;
    }
    @media only screen and (max-width: 514px) {
      font-size: 1.2em;
      line-height: 1.4;
    }
  }

  p {
    font-size: 1em;

    @media only screen and (max-width: 765px) {
      font-size: 0.9em;
    }
    @media only screen and (max-width: 514px) {
      font-size: 0.8em;
      line-height: 1.4;
    }
  }

  .event {
    border-bottom: 1px dashed fade(@color-light, 10%);
    padding-bottom: (@spacing * 0.5);
    margin-bottom: @spacing;
    position: relative;

    &:last-of-type {
      padding-bottom: 0;
      margin-bottom: 0;
      border: none;
    }

    &:before,
    &:after {
      position: absolute;
      display: block;
      top: 0;
    }

    &:before {
      left: (((@date * 0.6) + @spacing + @line + @dot + (@dotborder * 2)) * 1.5) *
        -1;
      color: fade(@color-light, 40%);
      content: attr(data-date);
      text-align: right;
      font-weight: 100;
      font-size: 0.9em;
      min-width: @date;
    }

    &:after {
      box-shadow: 0 0 0 @dotborder fade(@color-primary, 100%);
      left: (@spacing + @line + (@dot * 0.35)) * -1;
      background: lighten(@background, 5%);
      border-radius: 50%;
      height: @dot;
      width: @dot;
      content: '';
      top: 5px;
    }
  }
}
</style>
