(function(global) {

    'use strict';
   
    //==============================================================
    // 2. 모듈 가져오기 (node | web)
    var util;

    if (typeof module !== 'object') {                   // Web
        // util                = global._W.Common.Util;
    } else if (typeof module.exports === 'object'){     // node
        // util                = require('util');
    }

    //==============================================================
    // 3. 모듈 의존성 검사
    if (typeof Vue === 'undefined') throw new Error('[Vue] module load fail...');
    
    //==============================================================
    // 4. 모듈 구현    
    
    /**
     * 이슈!!
     * - 스타일의 깨지는 문제는 확인 필요 : 가상돔?
     */

    Vue.component('list-vue', {
        template: `
            <table class="table">
            <thead>
            <tr>
                <th>Num</th>
                <th>Title</th>
                <th>Data</th>
                <th>Writer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rows">
                <td>
                    {{row.row_count}}
                </td>
                <td class="board_tit">
                <a href="#">
                    {{row.title}}
                </a>
                </td>
                <td> {{row.create_dt}}</td>
                <td> {{row.writer}} </td>
                <!--<td> 765 </td>-->
            </tr>
            </tbody>
        </table>`,
        props: ['rows']
      }); 
    ;

  var vv = "22";

    //==============================================================
    // 5. 모듈 내보내기 (node | web)
    if (typeof module === 'object' && typeof module.exports === 'object') {     

    } else {
        // global.ListVue = oListVue;
    }

}(typeof module === 'object' && typeof module.exports === 'object' ? global : window));