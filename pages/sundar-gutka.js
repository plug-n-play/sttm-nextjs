import React from 'react';
import Layout from '../components/Layout';

const tempHtml = {
  __html: `
  <div class="row" id="content-root">
    <h4 class="breadcrumb"><a href="/">Home</a> › <span class="breadcrumbLast">Sundar Gutka</span></h4>
    <div id="help">
        <div class="wrapper" style="width: 100%;">
            <h2>Sundar Gutka Baaniyaan</h2>
            <div class="show-on-mobile sundar-gutka-app-promo">
                Download Sundar Gutka App for improved experience on
                <a href="https://play.google.com/store/apps/details?id=com.WahegurooNetwork.SundarGutka" target="_blank" class="playstore--link" rel="noopener noreferrer">
                    <svg width="1em" height="1em" viewBox="0 0 448 512" class="playstore--icon">
                        <path d="M89.6 204.5v115.8c0 15.4-12.1 27.7-27.5 27.7-15.3 0-30.1-12.4-30.1-27.7V204.5c0-15.1 14.8-27.5 30.1-27.5 15.1 0 27.5 12.4 27.5 27.5zm10.8 157c0 16.4 13.2 29.6 29.6 29.6h19.9l.3 61.1c0 36.9 55.2 36.6 55.2 0v-61.1h37.2v61.1c0 36.7 55.5 36.8 55.5 0v-61.1h20.2c16.2 0 29.4-13.2 29.4-29.6V182.1H100.4v179.4zm248-189.1H99.3c0-42.8 25.6-80 63.6-99.4l-19.1-35.3c-2.8-4.9 4.3-8 6.7-3.8l19.4 35.6c34.9-15.5 75-14.7 108.3 0L297.5 34c2.5-4.3 9.5-1.1 6.7 3.8L285.1 73c37.7 19.4 63.3 56.6 63.3 99.4zm-170.7-55.5c0-5.7-4.6-10.5-10.5-10.5-5.7 0-10.2 4.8-10.2 10.5s4.6 10.5 10.2 10.5c5.9 0 10.5-4.8 10.5-10.5zm113.4 0c0-5.7-4.6-10.5-10.2-10.5-5.9 0-10.5 4.8-10.5 10.5s4.6 10.5 10.5 10.5c5.6 0 10.2-4.8 10.2-10.5zm94.8 60.1c-15.1 0-27.5 12.1-27.5 27.5v115.8c0 15.4 12.4 27.7 27.5 27.7 15.4 0 30.1-12.4 30.1-27.7V204.5c0-15.4-14.8-27.5-30.1-27.5z"></path>
                    </svg>
                    Android
                </a>
                |
                <a href="https://itunes.apple.com/in/app/sundar-gutka/id431446112?mt=8" target="_blank" class="playstore--link" rel="noopener noreferrer">
                    <svg width="1em" height="1em" viewBox="0 0 376.5 512" class="appstore--icon">
                        <path d="M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                    iOS
                </a>
            </div>
            <input type="search" name="baani-query" class="search" autocorrect="off" autocapitalize="none" placeholder="Search" value="">
            <ul class="list">
                <a class="list--link" href="/sundar-gutka/1">
                    <li class="list--item" style="animation-delay: 0ms;">ਗੁਰ ਮੰਤ੍ਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/2">
                    <li class="list--item" style="animation-delay: 20ms;">ਜਪੁਜੀ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/3">
                    <li class="list--item" style="animation-delay: 40ms;">ਸ਼ਬਦ ਹਜ਼ਾਰੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/4">
                    <li class="list--item" style="animation-delay: 60ms;">ਜਾਪੁ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/5">
                    <li class="list--item" style="animation-delay: 80ms;">ਸ਼ਬਦ ਹਜ਼ਾਰੇ ਪਾਤਿਸ਼ਾਹੀ ੧੦ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/6">
                    <li class="list--item" style="animation-delay: 100ms;">ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਯੇ (ਸ੍ਰਾਵਗ ਸੁੱਧ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/7">
                    <li class="list--item" style="animation-delay: 120ms;">ਤ੍ਵ ਪ੍ਰਸਾਦਿ ਸਵੱਯੇ (ਦੀਨਨ ਕੀ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/8">
                    <li class="list--item" style="animation-delay: 140ms;">ਅਕਾਲ ਉਸਤਤ ਚੌਪਈ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/9">
                    <li class="list--item" style="animation-delay: 160ms;">ਬੇਨਤੀ ਚੌਪਈ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/10">
                    <li class="list--item" style="animation-delay: 180ms;">ਅਨੰਦੁ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/11">
                    <li class="list--item" style="animation-delay: 200ms;">ਲਾਵਾਂ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/12">
                    <li class="list--item" style="animation-delay: 220ms;">ਅਥ ਚੰਡੀਚਰਿਤ੍ਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/13">
                    <li class="list--item" style="animation-delay: 240ms;">ਚੰਡੀ ਦੀ ਵਾਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/14">
                    <li class="list--item" style="animation-delay: 260ms;">ਕੁਚਜੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/15">
                    <li class="list--item" style="animation-delay: 280ms;">ਸੁਚਜੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/16">
                    <li class="list--item">ਗੁਣਵੰਤੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/17">
                    <li class="list--item">ਫੁਨਹੇ ਮਹਲਾ ੫ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/18">
                    <li class="list--item">ਚਉਬੋਲੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/19">
                    <li class="list--item">ਸ਼ਸਤ੍ਰ ਨਾਮ ਮਾਲਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/21">
                    <li class="list--item">ਰਹਰਾਸਿ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/22">
                    <li class="list--item">ਆਰਤੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/23">
                    <li class="list--item">ਸੋਹਿਲਾ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/24">
                    <li class="list--item">ਅਰਦਾਸ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/25">
                    <li class="list--item">ਸ੍ਰੀ ਭਗਉਤੀ ਅਸਤੋਤ੍ਰ (ਪੰਥ ਪ੍ਰਕਾਸ਼) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/26">
                    <li class="list--item">ਸ੍ਰੀ ਭਗਉਤੀ ਅਸਤੋਤ੍ਰ (ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/27">
                    <li class="list--item">ਬਾਰਹ ਮਾਹਾ ਮਾਂਝ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/28">
                    <li class="list--item">ਬਾਰਹ ਮਾਹਾ ਸਵੈਯਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/29">
                    <li class="list--item">ਅਕਾਲ ਉਸਤਤ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/30">
                    <li class="list--item">ਸਲੋਕ ਮਹਲਾ ੯ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/31">
                    <li class="list--item">ਸੁਖਮਨੀ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/32">
                    <li class="list--item">ਸੁਖਮਨਾ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/33">
                    <li class="list--item">ਬਾਵਨ ਅਖਰੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/34">
                    <li class="list--item">ਸਿਧ ਗੋਸਟਿ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/35">
                    <li class="list--item">ਦਖਣੀ ਓਅੰਕਾਰੁ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/36">
                    <li class="list--item">ਦੁਖ ਭੰਜਨੀ ਸਾਹਿਬ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/38">
                    <li class="list--item">ਰਾਗ ਮਾਲਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/39">
                    <li class="list--item">ਬਾਵਨ ਅਖਰੀ ਕਬੀਰ ਜੀਉ ਕੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/40">
                    <li class="list--item">ਘੋੜੀਆ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/41">
                    <li class="list--item">ਕਰਹਲੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/42">
                    <li class="list--item">ਬਿਰਹੜੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/43">
                    <li class="list--item">ਪਟੀ ਲਿਖੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/44">
                    <li class="list--item">ਪਟੀ ਮਹਲਾ ੩ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/45">
                    <li class="list--item">ਮਹਲਾ ੫ ਰੁਤੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/46">
                    <li class="list--item">ਰਾਮਕਲੀ ਸਦੁ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/47">
                    <li class="list--item">ਥਿਤੰੀ ਕਬੀਰ ਜੀ ਕੰੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/48">
                    <li class="list--item">ਥਿਤੀ ਮਹਲਾ ੧ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/49">
                    <li class="list--item">ਥਿਤੀ ਮਹਲਾ ੫ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/50">
                    <li class="list--item">ਗਉੜੀ ਵਾਰ ਕਬੀਰ ਜੀਉ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/51">
                    <li class="list--item">ਬਿਲਾਵਲੁ ਮਹਲਾ ੩ ਵਾਰ ਸਤ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/52">
                    <li class="list--item">ਵਣਜਾਰਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/53">
                    <li class="list--item">ਉਗ੍ਰਦੰਤੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/55">
                    <li class="list--item">ਰਾਗੁ ਸਿਰੀਰਾਗੁ (ਕਬੀਰ ਜੀਉ ਕਾ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/56">
                    <li class="list--item">ਰਾਗੁ ਗਉੜੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/57">
                    <li class="list--item">ਰਾਗੁ ਆਸਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/58">
                    <li class="list--item">ਰਾਗੁ ਗੂਜਰੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/59">
                    <li class="list--item">ਰਾਗੁ ਸੋਰਠਿ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/60">
                    <li class="list--item">ਰਾਗੁ ਧਨਾਸਰੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/61">
                    <li class="list--item">ਰਾਗੁ ਜੈਤਸਰੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/62">
                    <li class="list--item">ਰਾਗੁ ਟੋਡੀ (ਬਾਣੀ ਭਗਤਾਂ ਕੀ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/63">
                    <li class="list--item">ਰਾਗੁ ਤਿਲੰਗ (ਬਾਣੀ ਭਗਤਾ ਕੀ ਕਬੀਰ ਜੀ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/64">
                    <li class="list--item">ਰਾਗੁ ਸੂਹੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/65">
                    <li class="list--item">ਰਾਗੁ ਬਿਲਾਵਲੁ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/66">
                    <li class="list--item">ਰਾਗੁ ਗੋਂਡ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/67">
                    <li class="list--item">ਰਾਗੁ ਰਾਮਕਲੀ (ਸਦੁ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/68">
                    <li class="list--item">ਰਾਗੁ ਮਾਲੀ ਗਉੜਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/69">
                    <li class="list--item">ਰਾਗੁ ਮਾਰੂ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/70">
                    <li class="list--item">ਰਾਗੁ ਕੇਦਾਰਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/71">
                    <li class="list--item">ਰਾਗੁ ਭੈਰਉ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/72">
                    <li class="list--item">ਰਾਗੁ ਬਸੰਤੁ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/73">
                    <li class="list--item">ਰਾਗੁ ਸਾਰੰਗ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/74">
                    <li class="list--item">ਰਾਗੁ ਮਲਾਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/75">
                    <li class="list--item">ਰਾਗੁ ਕਾਨੜਾ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/76">
                    <li class="list--item">ਰਾਗੁ ਪ੍ਰਭਾਤੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/77">
                    <li class="list--item">ਸਲੋਕ ਭਗਤ ਕਬੀਰ ਜੀਉ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/78">
                    <li class="list--item">ਸਲੋਕ ਸੇਖ ਫਰੀਦ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/79">
                    <li class="list--item">ਸਵਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੧ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/80">
                    <li class="list--item">ਸਵਯੇ ਸ੍ਰੀ ਮੁਖਬਾਕ੍ਯ ਮਹਲਾ ੫ - ੨ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/81">
                    <li class="list--item">ਸਵਈਏ ਮਹਲੇ ਪਹਿਲੇ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/82">
                    <li class="list--item">ਸਵਈਏ ਮਹਲੇ ਦੂਜੇ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/83">
                    <li class="list--item">ਸਵਈਏ ਮਹਲੇ ਤੀਜੇ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/84">
                    <li class="list--item">ਸਵਈਏ ਮਹਲੇ ਚਉਥੇ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/85">
                    <li class="list--item">ਸਵਈਏ ਮਹਲੇ ਪੰਜਵੇ ਕੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/86">
                    <li class="list--item">ਸਿਰੀਰਾਗ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/87">
                    <li class="list--item">ਵਾਰ ਮਾਝ ਕੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/88">
                    <li class="list--item">ਗਉੜੀ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/89">
                    <li class="list--item">ਗਉੜੀ ਕੀ ਵਾਰ ਮਹਲਾ ੫ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/90">
                    <li class="list--item">ਆਸਾ ਦੀ ਵਾਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/91">
                    <li class="list--item">ਗੂਜਰੀ ਕੀ ਵਾਰ ਮਹਲਾ ੩ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/92">
                    <li class="list--item">ਰਾਗੁ ਗੂਜਰੀ ਵਾਰ ਮਹਲਾ ੫ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/93">
                    <li class="list--item">ਬਿਹਾਗੜੇ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/94">
                    <li class="list--item">ਵਡਹੰਸ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/95">
                    <li class="list--item">ਰਾਗੁ ਸੋਰਠਿ ਵਾਰ ਮਹਲੇ ੪ ਕੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/96">
                    <li class="list--item">ਜੈਤਸਰੀ ਕੀ ਵਾਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/97">
                    <li class="list--item">ਵਾਰ ਸੂਹੀ ਕੀ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/98">
                    <li class="list--item">ਬਿਲਾਵਲੁ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/99">
                    <li class="list--item">ਰਾਮਕਲੀ ਕੀ ਵਾਰ ਮਹਲਾ ੩ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/100">
                    <li class="list--item">ਰਾਮਕਲੀ ਕੀ ਵਾਰ ਮਹਲਾ ੫ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/101">
                    <li class="list--item">ਰਾਮਕਲੀ ਕੀ ਵਾਰ (ਰਾਇ ਬਲਵੰਡਿ ਤਥਾ ਸਤੈ) </li>
                </a>
                <a class="list--link" href="/sundar-gutka/102">
                    <li class="list--item">ਮਾਰੂ ਵਾਰ ਮਹਲਾ ੩ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/103">
                    <li class="list--item">ਮਾਰੂ ਵਾਰ ਮਹਲਾ ੫ ਡਖਣੇ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/104">
                    <li class="list--item">ਬਸੰਤ ਕੀ ਵਾਰ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/105">
                    <li class="list--item">ਸਾਰੰਗ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/106">
                    <li class="list--item">ਵਾਰ ਮਲਾਰ ਕੀ ਮਹਲਾ ੧ </li>
                </a>
                <a class="list--link" href="/sundar-gutka/107">
                    <li class="list--item">ਕਾਨੜੇ ਕੀ ਵਾਰ ਮਹਲਾ ੪ </li>
                </a>
            </ul>
        </div>
    </div>
  </div>
  `
};
const SundarGutka = () => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={tempHtml}></div>
    </Layout>
  );
};

export default SundarGutka;
