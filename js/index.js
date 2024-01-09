$(document).ready(function(){

    

  // 레이아웃 크기 맞추기
      
  
      let ww=$(window).width();
      //let wh=$(window).height();
      let wh=ww*0.56;
      function layout(){
         ww=$(window).width();
        //let wh=$(window).height();
         wh=ww*0.56;
  
  
        //공통영역          
  // pc영역
  if(ww>1024){
    //pc영역의 스타일 삽입
            $(".m_box").css({
              width:ww,
              height:wh*4,
            })
      
      
            $(".wrap").css({
              width:ww,
              height:wh,
              overflow: "hidden",
            })
      
            $(".shape_wrap").css({
              width:ww*0.8,
              height:wh*0.7,
              margin: "10% auto",
              display: "flex",
              justifyContent: "space-between",
              
            })
      
            $(".shape").css({
              width:ww*0.18,
              height:wh*0.6,
              position:"relative"
            })
      
            $(".main_text").css({
              fontSize:"1.3rem",
              color:"white",
              textAlign:"center",
              fontWeight:"900",
              position:"absolute",
              bottom:"-11%",
              left:0,
              display:"none"
            })
      
       
            // 2page
      
            $(".wrap2").css({
              width:ww,
              height:wh,
              overflow: "hidden",
            })
      
            $(".w2t_box").css({
              width:ww*0.7,
              height:wh*0.55,
              background:"white",
              margin:"200px auto",
              borderRadius:"200vw",
            })

            
      
            $(".skill_box").css({
              width:ww,
              height:wh,
              margin:"0 auto"
            })
      
            $(".skill").css({
              width:ww*0.11,
              height:wh*0.32,
              borderRadius:"200vw",
              textAlign:"center",
              margin:"0 130px"
            })
      
            // 2-1page
      
            $(".wrap2_1").css({
              width:ww,
              height:wh,
              overflow: "hidden",
              position:"relative",
            })
      
            $(".contect_box").css({
              width:ww*0.38,
              height:wh*0.35,
            })
      
           
            $(".m_icon").css({
              width:ww*0.04,
              height:wh*0.08
            })
      
      
            // 3page
      
            $(".wrap3").css({
              width:ww,
              height:wh,
            })
      
            $(".w3left").css({
              width:ww*0.35,
              height:wh*0.7,
              background:"white",
              borderRadius:"500vw",
              float:"left",
              margin:"6% 9%",
              position:"relative"
            })
      
            $(".w3l_move").css({
              width:ww*0.35,
              height:wh*2.8,
              position:"absolute",
              top:0
            })
      
            $(".w3l_box").css({
              width:ww*0.35,
              height:wh*0.7,
              borderRadius:"500vw",
            })
      
            $(".w3right").css({
              width:ww*0.35,
              height:wh*0.85,
              background:"white",
              borderRadius:"500vw",
              position:"relative",
              float:"left",
              marginTop:"1.6%",
              overflow:"hidden"
            })
      
            $(".w3r_move").css({
              width:ww*0.35,
              height:wh*3.4,
              position:"absolute",
              top:0
      
            })
      
            $(".w3r_box").css({
              width:ww*0.35,
              height:wh*0.85,
              borderRadius:"500vw",
              textAlign:"center",
              // lineHeight:"90vh",
            })

            $(".resume_pc").css({
              width:ww*0.12,
              height:wh*0.07
            })

            
          }


          else if(ww<=1023){
            ww=$(window).width();
            //let wh=$(window).height();
             wh=ww*2;
            //모바일 영역의 스타일 삽입
            $(".m_box").css({
              width:ww,
              height:wh*4,
            })
      
      
            $(".wrap").css({
              width:ww,
              height:wh,
              overflow: "hidden"
            })
      
            $(".shape_wrap").css({
              width:ww*0.8,
              height:wh*0.8,
              margin: "18vw auto",
              display: "flex",
              justifyContent: "space-between",
              flexWrap:"wrap"
            })
  
            $(".sqshape").css({
              width:ww*0.37,
              height:wh*0.37,
              marginBottom:"8vw"
            })
            $(".coshape").css({
              width:ww*0.37,
              height:wh*0.37,
            })
            $(".amshape").css({
              width:ww*0.37,
              height:wh*0.37,
            })
            $(".roshape").css({
              width:ww*0.37,
              height:wh*0.37,
            })
  
            $(".main_text").css({
              display:"none"
            })
  
            
            // 2page
      
            $(".wrap2").css({
              width:ww,
              height:wh,
              overflow: "hidden",
            })
      
            $(".w2t_box").css({
              width:ww*0.88,
              height:wh*0.9,
              background:"white",
              margin:"9vw auto",
              borderRadius:"200vw",
              position:"relative"
            })
      
            $(".skill_box").css({
              width:ww,
              height:wh*0.8,
              boxSizing:"borderBox"
            })
      
            $(".skill").css({
              width:ww*0.29,
              height:wh*0.28,
              textAlign:"center",
            })
      
            // 2-1page
      
            $(".wrap2_1").css({
              width:ww,
              height:wh,
              overflow: "hidden",
              position:"relative",
            })
    
            // 3page
      
            $(".wrap3").css({
              width:ww,
              height:wh,
            })
      
            $(".w3left").css({
              width:ww*0.9,
              height:wh*0.3,
              background:"white",
              borderRadius:"500vw",
              margin:"6vw auto",
              position:"relative",
              overflow:"hidden"
            })
      
            $(".w3l_move").css({
              width:ww*3.6,
              height:wh*0.3,
              position:"absolute",
              top:0
            })
      
            $(".w3l_box").css({
              width:ww*0.9,
              height:wh*0.3,
            })
      
      
      
            $(".w3right").css({
              width:ww*0.9,
              height:wh*0.55,
              borderRadius:"2vw",
              position:"relative",
              overflow:"hidden"
            })
      
            $(".w3r_move").css({
              width:ww*3.6,
              height:wh*2.2,
              position:"absolute",
              background:"black",
              top:0
      
            })
      
            $(".w3r_box").css({
              width:ww*0.9,
              height:wh*0.55,
              textAlign:"center",
              lineHeight:"60vh",
            })

            $(".wrap4").css({
              width:ww,
              height:wh*0.7,
            })
            $(".contect_box").css({
              width:ww*0.8,
              height:wh*0.55,
            })
      
           
            $(".m_icon").css({
              width:ww*0.22,
              height:wh*0.12
            })
            $(".c_icon").css({
              width:ww*0.2,
              height:wh*0.14,
            })
            $(".resume_mo").css({
              width:ww*0.4,
              height:wh*0.06
            })
          }

      }
  
  
      layout();
  
      $(window).resize(function(){
        layout();
      })

      let img_num_sc=1;
      $(window).scroll(function(){
        
        if(ww>=1024){
          img_num_sc++;
        if(img_num_sc>22){
        img_num_sc=1;
        }
      
        $(".amshape").css({
          background:`url(./img/amgr${img_num_sc}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'100% 100%'
        })
        $(".sqshape").css({
          background:`url(./img/sqgr${img_num_sc}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'100% 100%'
        })
        $(".coshape").css({
          background:`url(./img/cogr${img_num_sc}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'100% 100%'
        })
        $(".roshape").css({
          background:`url(./img/rogr${img_num_sc}.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'100% 100%'
        })
        }

      })

      let img_num_at=1;
// 자동으로 이미지 배경 변경 (모바일)
if(ww<=1023){
  setInterval(function(){
    img_num_at++;
if(img_num_at>22){
  img_num_at=1;
}
$(".amshape").css({
  background:`url(./img/amgr${img_num_at}.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:"100% 100%"
})
$(".sqshape").css({
  background:`url(./img/sqgr${img_num_at}.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:"100% 100%"
})
$(".coshape").css({
  background:`url(./img/cogr${img_num_at}.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:"100% 100%"
})
$(".roshape").css({
  background:`url(./img/rogr${img_num_at}.png)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize:"100% 100%"
})
   },100)
  


   
}



  //  메인 hover 효과
  
   $(".sqshape").hover(function(){
    $(".mt_1").css({
      display:"block"
    })
},function(){
  $(".mt_1").css({
    display:"none"
  })
})

$(".coshape").hover(function(){
  $(".mt_2").css({
    display:"block"
  })
},function(){
$(".mt_2").css({
  display:"none"
})
})

$(".amshape").hover(function(){
$(".mt_3").css({
  display:"block"
})
},function(){
$(".mt_3").css({
display:"none"
})
})

$(".roshape").hover(function(){
$(".mt_4").css({
display:"block"
})
},function(){
$(".mt_4").css({
display:"none"
})
})


// // 메인 쉐입 누르면 그 페이지로 넘어가기 효과

// $(".shape").click(function(){

// let a=$(this).index();
// let b=$(".wrap").height();
// $("html,body").animate({
//   scrollTop:a*b
// })
// })

$(".sqshape").click(function(){

let a=$(".wrap").height();

$("html,body").animate({
    scrollTop:a*1
  })
})

$(".coshape").click(function(){

  let a=$(".wrap").height();
  
  $("html,body").animate({
      scrollTop:a*2
    })
  })
  $(".amshape").click(function(){

    let a=$(".wrap").height();
    
    $("html,body").animate({
        scrollTop:a*2
      })
    })
    $(".roshape").click(function(){

      let a=$(".wrap").height();
      
      $("html,body").animate({
          scrollTop:a*3
        })
      })

$(".shape").click(function(){
let mo_index=$(this).index()+1;
let mo_height=$(".wrap").height();
if(ww<=1023){
  $("html,body").animate({
    scrollTop:mo_index*mo_height
  })
}
})



// // 포폴 무브 움직이기

$(".but").click(function(){
ww=$(window).width();
if(ww>=1024){
  $(".w3r_move").animate({
    top:-wh*0.85
  },3500,function(){
    $(".w3r_box").first().appendTo(".w3r_move");
    $(".w3r_move").css({
        top:0
    })
  })
}
else{
  $(".w3r_move").animate({
    top:-wh*0.55
  },3500,function(){
    $(".w3r_box").first().appendTo(".w3r_move");
    $(".w3r_move").css({
        top:0
    })
  })
}
})

// 모바일 포폴 무브 움직이기



// // 포폴 설명 무브 움직이기 (w3r이랑 같이 멈추게 하기..)

$(".butt").click(function(){
ww=$(window).width();

if(ww>=1024){
  $(".w3l_move").animate({
    top:-wh*0.7
  },3500,function(){
    $(".w3l_box").first().appendTo(".w3l_move");
    $(".w3l_move").css({
        top:0
    })
  })
}else{
  // alert(mh);
  $(".w3l_move").animate({
    top:-ww*0.55
  },3500,function(){
    $(".w3l_box").first().appendTo(".w3l_move");
    $(".w3l_move").css({
        top:0
    })
  })
}
})

      let autoo=setInterval(function(){
        $(".butt").trigger("click");
        $(".but").trigger("click");
        },5000)
    
        $(".w3r_move").hover(function(){
        clearInterval(autoo);
        },function(){
          autoo=setInterval(function(){
            $(".butt").trigger("click");
            $(".but").trigger("click");
        },5000)
        })
    
      $(".w3l_move").hover(function(){
      clearInterval(autoo);
      },function(){
      autoo=setInterval(function(){
        $(".butt").trigger("click");
        $(".but").trigger("click");
      },5000)
      })
      
  
  })