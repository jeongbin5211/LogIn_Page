  
    let userid = document.querySelector(".userid");
    let userpw = document.querySelector(".userpw");
    let button = document.querySelector(".btn");

    // document.querySelector(".btn").onclick = (e) => {

    //   e.preventDefault();
      
    //   if (!userid.value) {
    //     alert("아이디를 입력해주세요.");
    //     userid.focus();
    //     return false;
    //   }else if (!userpw.value) {
    //     alert("비밀번호를 입력해주세요.");
    //     userpw.focus();
    //     return false;
    //   }
    
    // }

    window.onload = () => {
      userid.focus();
    }

    button.addEventListener('click', (e) => {

      e.preventDefault();

      if (!userid.value) {
        alert("아이디를 입력해주세요.");
        userid.focus();
        return false;
      }else if (!userpw.value) {
        alert("비밀번호를 입력해주세요.");
        userpw.focus();
        return false;
      }else if (userid.value && userpw.value) {
        alert("로그인 성공!");
      }

    })
