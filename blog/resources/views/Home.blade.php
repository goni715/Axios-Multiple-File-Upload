@extends('Layout.app')

@section('title','Laravel Axios Multiple File Upload')
    


@section('content')

   <div class="container-fluid">
       <div class="row">
             <div class="col-md-12">
                 <div class="card">
                     <div class="card-header">
                         <h4>Laravel axios multiple File Upload </h4>
                     </div>
                     <div class="card-body">
                         <button class="btn btn-primary btn-sm">Add File</button>
                         <table class="table table-striped">
                              <thead>
                                    <tr>
                                        <th>File</th>
                                        <th>File Size</th>
                                        <th>Cancel</th>
                                        <th>Upload</th>
                                    </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>File</td>
                                      <td>File Size</td>
                                      <td><button class="btn btn-danger btn-sm">Cancel</button></td>
                                      <td><button class="btn btn-primary btn-sm">Cancel</button></td>
                                  </tr>

                              </tbody>
                             
                         </table>
                     </div>
                 </div>
             </div>
       </div>
   </div>

@endsection
