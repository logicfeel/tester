<template id="com">
  <table class="table">
    <thead>
      <tr>
        <th>Num</th>
        <th>제목</th>
        <th>Data</th>
        <th>작성자</th>
      </tr>
    </thead>
    <tbody>
      <tr>
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
  </table>
</template>

<script>
  export default {
    name: 'local-component',
    props: ['rows']
  }
</script>