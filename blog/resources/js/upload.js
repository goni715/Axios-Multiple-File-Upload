

//alert('Hello');



$('.addBtn').on('click', function(){

      let newTableRow=
                  "<tr>"+
                     "<td><input class='form-control' type='file'></td>"+
                     "<td class='fileSize'>File Size</td>"+
                     "<td><button class='btn cancelBtn btn-danger btn-sm'>Cancel</button></td>"+
                     "<td><button class='btn upBtn btn-primary btn-sm'>Upload</button></td>"+
                     "<td class='fileUpMB'>Uploaded(MB)</td>"+
                     "<td class='fileUpPercentage'>Uploaded(%)</td>"+
                     "<td class='fileStatus'>Status</td>"+
                  "</tr>";


        $('.fileList').append(newTableRow);


});