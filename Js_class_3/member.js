const form = document.getElementById("form")

form.addEventListener("submit", function(event){

    event.preventDefault() // 기존 기능 차단
    
    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGnder = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    if(userId.length < 6){
        alert("아이닥 너무 짧습니다. 6자이상 입력해주세요.")
        return
    }

    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다")
        return
    }

    document.body.innerHTML = ""
    document.write(`<h1>${userId}님 환영합니다!</h1>`)
    document.write(`<p>회원 가입 시 입력하신 내역은 다음과 같습니다.<p>`)
    document.write(`<p>아이디 : ${userId}님 환영합니다!<p>`)
    document.write(`<p>이름 : ${userName}님 환영합니다!<p>`)
    document.write(`<p>전화번호 : ${userPhone}님 환영합니다!<p>`)
    document.write(`<p>원하는 직무 : ${userPosition}님 환영합니다!<p>`)
})