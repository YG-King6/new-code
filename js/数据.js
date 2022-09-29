  //科目表
  var subject = [
    {
      id:1, 
      name: '软件工程', 
      children: [
        {id: 11, name: 'C语言'},
        {id: 12, name: 'Java'},
        {id: 13, name: '数据结构'},
      ]
    },
    {
      id:2, 
      name: '土木工程', 
      children: [
        {id: 21, name: '高等数学'},
        {id: 22, name: '大学物理'},
        {id: 23, name: '毛概'},
      ]
    },
  ];


    //成绩表
    var student = [
      {id:1, mid: 1, sid: 11, no: '20190122', name:'张飞', gender: '男', score: 47, submitdate: '2021-06-05'},
      {id:2, mid: 1, sid: 11, no: '20190221', name:'小乔', gender: '女', score: 78, submitdate: '2021-03-02'},
      {id:3, mid: 1, sid: 13, no: '20190324', name:'大乔', gender: '女', score: 57, submitdate: '2021-04-01'},
      {id:4, mid: 2, sid: 21, no: '20193126', name:'马超', gender: '男', score: 87, submitdate: '2021-07-06'},
      {id:5, mid: 2, sid: 22, no: '20194221', name:'貂蝉', gender: '女', score: 97, submitdate: '2021-08-03'},
      {id:6, mid: 2, sid: 23, no: '20196121', name:'张飞', gender: '男', score: 67, submitdate: '2021-03-06'},
      {id:7, mid: 1, sid: 13, no: '20195123', name:'小乔', gender: '女', score: 98, submitdate: '2021-04-09'},
      {id:8, mid: 1, sid: 11, no: '20197124', name:'马超', gender: '男', score: 78, submitdate: '2021-05-13'},
    ];