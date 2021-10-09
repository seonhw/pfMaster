//login
    function idpwCheck(){
    
        var idVal = document.getElementById('id');
        var pwVal = document.getElementById('pw'); 
        
        if(!idVal.value){
            alert("아이디가 입력되지 않았습니다.");
        idVal.focus();
        return false;
        }
        if(!pwVal.value){
            alert("비밀번호를 입력되지 않았습니다.");
        pwVal.focus();
        return false;
        }
        frm.submit();
    }
   
//formcheck
    function check(){
        var frm = document.frm;

        if(!frm.agree1.checked){
            alert("필수항목에 동의하지 않았습니다.");
            frm.agree1.focus();
            return;
        }
        if(!frm.agree2.checked){
            alert("필수항목에 동의하지 않았습니다.");
            frm.agree1.focus();
            return;
        }
        location.href = "join2.html";	
    }
    function allCheck(){
        with(document.frm){
            if(all.checked){
                for(var i=0;i<length;i++){
                    if(elements[i].type == "checkbox"){
                        elements[i].checked = true;
                    }
                }
            }else{
                for(var i=0;i<length;i++){
                    if(elements[i].type == "checkbox"){
                        elements[i].checked = false;
                    }
                }
            }
        }
    }

//join
    function formCheck(){
        
        var join = document.join;
        var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
        var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
        
        //아이디검사
        if(!join.id.value){
            alert("아이디를 입력해주세요.");
            join.id.focus();
            return false;
        }
        //비밀번호 검사
        if(!join.pw.value){
            alert("비밀번호를 입력해주세요.");
            join.pw.focus();
            return false;
        }
        if(join.pw.value.length<10){
            alert("비밀번호를 10자 이상 입력해주세요.");
            join.pw.focus();
            return false;
        }
        if(!reg_num.test(join.pw.value)){
            alert("비밀번호는 영문, 숫자, 특수문자를 포함하는 형식이어야 합니다");
            join.pw.focus();
            return false;
        }
        //비밀번호 재입력 검사
        if(!join.repw.value){
            alert("비밀번호를 확인해주세요.");
            join.repw.focus();
            return false;
        }
        if(join.pw.value!=join.repw.value){
            alert("비밀번호가 맞지 않습니다");
            join.repw.focus();
            return false;
        }
        //회원명 검사
        if(!join.memberName.value){
            alert("성명을 입력해주세요.");
            join.memberName.focus();
            return false;
        }
    }

//join-email
    function email_change(){

        if(document.join.email.options[document.join.email.selectedIndex].value == '0'){
        document.join.email2.disabled = true;
        document.join.email2.value = "";
        }
        if(document.join.email.options[document.join.email.selectedIndex].value == '9'){
        document.join.email2.disabled = false;
        document.join.email2.value = "";
        document.join.email2.focus();
        } else{
        document.join.email2.disabled = true;
        document.join.email2.value = document.join.email.options[document.join.email.selectedIndex].value;
        }
        }

//체크박스 자동
    function checking(st){
        var join = document.join;
        
        if(st == "on"){
            for(var i=0;i<join.length;i++){
                if(join.elements[i].type == "checkbox"){
                    join.elements[i].checked = true;
                    join.elements[i].disabled = false;

                }
            }
        }else{
            for(var i=0;i<join.length;i++){
                if(join.elements[i].type == "checkbox"){
                    join.elements[i].checked = false;
                    join.elements[i].disabled = true;
                }
            }
        }
    }

