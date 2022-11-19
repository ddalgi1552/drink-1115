//nav의 버튼 라우트
routes = [
    {
      button: 'before1',
      page: '../1.검사페이지/index.html'
    },
    {
      button: 'before2',
      page: '../2.메인페이지/index.html'
    },
    {
      button: 'test1',
      page: '../3.day1/index.html'
    },
    {
      button: 'test2',
      page: '../4.day2/index.html'
    },
    {
      button: 'test3',
      page: '../5.day3/index.html'
    },
    {
        button: 'test4',
        page: '../7.day5/index.html'
    },
    {
        button: 'after',
        page: '../8.final/index.html'
    }
  
  ]
  
  routes.map((route) => {
    const btn = document.getElementById(route.button);
    btn.addEventListener('click',() => {go(route.page)});
  })
  
  function go(page){
    console.log('clicked')
    location.href=page;
  }
  