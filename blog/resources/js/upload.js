

//alert('Hello');



$('.addBtn').on('click', function(){

      let newTableRow=
                  "<tr>"+
                     "<td><input class='fileInput form-control' type='file'></td>"+
                     "<td class='fileSize'>File Size</td>"+
                     "<td><button class='btn cancelBtn btn-danger btn-sm'>Cancel</button></td>"+
                     "<td><button class='btn upBtn btn-primary btn-sm'>Upload</button></td>"+
                     "<td class='fileUpMB'>Uploaded(MB)</td>"+
                     "<td class='fileUpPercentage'>Uploaded(%)</td>"+
                     "<td class='fileStatus'>Status</td>"+
                  "</tr>";


        $('.fileList').append(newTableRow);


        //Remove Row
        $('.cancelBtn').on('click',function(){

             $(this).parents('tr').remove();
  
         });


         //Input File onChange
         $('.fileInput').on('change',function(){

              let MyFile = $(this).prop('files')[0];
              let MyFileSize = ((MyFile.size)/(1024*1024)).toFixed(2);
    
              $(this).closest('tr').find('.fileSize').html(MyFileSize+ "MB"); 
    
        });




        $('.upBtn').on('click',function(event){

              let MyFile = $(this).closest('tr').find('.fileInput').prop('files')[0];
              let fileUpMB = $(this).closest('tr').find('.fileUpMB');
              let fileUpPercentage = $(this).closest('tr').find('.fileUpPercentage');
              let fileStatus = $(this).closest('tr').find('.fileStatus');
              let UpBtn = $(this);

              let formData = new FormData();
              formData.append('FileKey',MyFile);
            

               OnFileUpload(formData, fileUpMB, fileUpPercentage, fileStatus, UpBtn);

               event.preventDefault();
               event.stopImmediatePropagation();


        });




});






function OnFileUpload(formData, fileUpMB, fileUpPercentage, fileStatus, UpBtn){

      fileStatus.html('Uploading...');
      UpBtn.prop('disabled',true);

       let url='./fileUp';
       let config={
             headers:{'content-type':'multipart/form-data'},
             onUploadProgress:function (progressEvent){

                   let uploadedMB = ((progressEvent.loaded)/(1024*1024)).toFixed(2);
                   let uploadedPercentage = Math.round((progressEvent.loaded*100)/(progressEvent.total));

                   fileUpMB.html(uploadedMB+ "MB");
                   fileUpPercentage.html(uploadedPercentage+ "%");
                   
             }
       }



        axios.post(url, formData, config)
             .then(function(response){

                 if(response.status==200){
                     
                     fileStatus.html('Success');  
                     UpBtn.prop('disabled',false);            
                 }else{
                     fileStatus.html('Fail');
                     UpBtn.prop('disabled',false);
                 }
                  
             }).catch(function(error){

                  fileStatus.html('Fail');
                  UpBtn.prop('disabled',false);
             })






}




  



   
