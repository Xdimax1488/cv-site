$(function(){
        /*filter*/
      let filter = $("[data-filter]");
      

      filter.on("click",function(event){
          event.preventDefault();
          let cat = $(this).data('filter');
          if(cat == 'all'){
              $("[data-cat]").removeClass("hide");
          }else{

              $("[data-cat]").each(function(){
              let workCat = $(this).data('cat');
              if(workCat != cat){
                  $(this).addClass('hide');
                } else{
                    $(this).removeClass('hide');
                }

          })
        }

        
      })

      /*modal*/
      let modalClose =$("[data-close]")
      let modalCall =$("[data-modal]")
      modalCall.on("click",function(event){
          event.preventDefault();
          let $this =$(this);
          let modalId =$this.data('modal');
          $(modalId).addClass('show')
          $("body").addClass('no-scroll')
          const images = document.querySelectorAll('.modal-work__preview .modal-work__photo img');
          const sliderline = document.querySelector('.modal-work__photo');

          let counter = 0
          let width
          
          
          function init() {
              width = document.querySelector('.modal-work__preview').offsetWidth;
              
              sliderline.style.width = width*images.length +'px';
              images.forEach(item =>{
                  item.style.width= width + 'px'
                  item.style.height = 'auto'
              })
              rollslide()
              
          }
          window.addEventListener('resize',init)
          
          init()

          document.querySelector('.btnleft').addEventListener('click',function() {
            counter--;
            if(counter < 0 ){
                counter=images.length -1;
            }
            rollslide()
        })
          document.querySelector('.btnright').addEventListener('click',function() {
              counter++;
              if(counter>= images.length){
                  counter=0
              }
              rollslide()
          })
          function rollslide() {
              sliderline.style.transform = 'translate(-'+counter*width+'px)'
              
          }
          
      })
      modalClose.on("click",function(event){
          event.preventDefault();
          let $this= $(this)
          let modalParent = $this.parents('.modal');

          modalParent.removeClass('show')
          $("body").removeClass('no-scroll')


      })

      $(".modal").on("click",function(){
          $(this).removeClass('show')
          $("body").removeClass('no-scroll')
      })
      $(".modal__dialog").on("click",function(event){
          event.stopPropagation();
      })
      



});
