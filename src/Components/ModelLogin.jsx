import React from 'react'

function ModelLogin() {
  return (
    <>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="false">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Account Login</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default ModelLogin
