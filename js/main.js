// // var pText=document.getElementById('pText');
// // function demoClick(){
// //     var txtValue= document.getElementById('txtInput').value;
// //     console.log(txtValue);
// // }
// // document.getElementById('btnClick').addEventListener('click',demoClick)
// // document.getElementById('btnClickMe').addEventListener('click',function(){
// //     var divContent=document.getElementById('changeContent');
// //       divContent.innerHTML='Changed';
// //       divContent.style.backgroundColor='red';
// //       divContent.style.fontSize='30px';
// // })
// // document.getElementById('btnHide').addEventListener('click',function(){
// //     var divContent=document.getElementById('changeContent');
// //     divContent.style.display='none';
// // })
// // document.getElementById('btnShow').addEventListener('click',function(){
// //     var divContent=document.getElementById('changeContent');
// //     divContent.style.display='block';
// // })
// // document.getElementById('btnDisable').addEventListener('click',function(){
// //     var disableButton=document.getElementById('btnClickMe');
// //     disableButton.disabled=true;
// // });
// // disable button
// document.getElementById('btnDisable').addEventListener('click',function(){
//         var btnClickMe=document.getElementById('btnClickMe');
//         if (!btnClickMe.disabled){
//             btnClickMe.disabled=true;
//         }
//         else{
//             btnClickMe.disabled=false;
//         }
// })
// document.getElementById('btnSummit').addEventListener('click',function(){
//          var userName= document.getElementById('name').value;
//          var password= document.getElementById('password').value;
//          var isSuccess=document.getElementById('isSuccess');
//          if(userName =="cybersoft"&& password=="123456"){
//               isSuccess.innerHTML="Login thanh cong"
//               isSuccess.style.color="green"; 
//          }
//          else{
//              isSuccess.innerHTML="Login that bai";
//              isSuccess.style.color="red"; 
//          }

//     })
// console.log(document.querySelector('.wrapContent'));
// CACULATED TIP MONEY

document.getElementById('btnTinhTienTip').addEventListener('click',function(){
    var money=document.getElementById('txtTongTien').value;
    var percent=document.getElementById('slPhanTramTip').value;
    var people=document.getElementById('txtSoNguoi').value;
    var total=(money*percent)/(people*100);
    console.log(total);
    var txtThongBao=document.getElementById('txtThongBaoTienTip')
    txtThongBao.innerHTML="So Tien Tip:"+total;
    txtThongBao.style.display="block";
})
