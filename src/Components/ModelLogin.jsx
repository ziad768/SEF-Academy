function ModelLogin() {
  return (
    <>
<div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Account ID </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        Admin Account : dl-2851 <br/>
        Admin Password : 12345678
        <br/>
        <br/>
        Instructor Account : dl-51512 <br/>
        Instructor Password : 12345678
        <br/>
        <br/>
        Student Account : dl-51014 <br/>
        Student Password : 12345678
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default ModelLogin
