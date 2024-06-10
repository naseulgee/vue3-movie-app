/** NOTE:
 * [참고] https://router.vuejs.kr/installation
 * 라우터를 이용해 페이지를 관리해 주는 구성 파일
 * 내보내지는 라우터 플러그인 -> main.js 에서 사용된다.
*/
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
    /** history 값 종류
     * Hash   : 새로고침 시 페이지를 찾을 수 없습니다 방지 가능 (도메인/#/경로)
     * History: 서버 세팅이 필요함
     */
    history: createWebHashHistory(),
    // 페이지를 배열로 관리한다
    routes: [
        {
            path: '/',
            alias: "/home",
            component: Home
        },
        {
            path: '/about',
            component: About
        },
    ]
})