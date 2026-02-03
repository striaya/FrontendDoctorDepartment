export default function Navbar(){
    return(
         <div class="container my-4">
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div class="card card-info">
              <div class="card-header">
                Input Department
              </div>
              <div class="card-body">
                <div class="form-body">
                  <form>
                    <div class="form-group row mb-4">
                      <label class="col-md-4 col-sm-12 col-xs-12">
                        Department ID
                      </label>
                      <div class="col-md-8 col-sm-12 col-xs-12">
                        <input class="form-control"/>
                      </div>
                    </div>
                    <div class="form-group row mb-4">
                      <label class="col-md-4 col-sm-12 col-xs-12">
                        Department Name
                      </label>
                      <div class="col-md-8 col-sm-12 col-xs-12">
                        <input class="form-control" />
                      </div>
                    </div>
                    <div class="form-group row mb-4">
                      <label class="col-md-4 col-sm-12 col-xs-12">
                        Description
                      </label>
                      <div class="col-md-8 col-sm-12 col-xs-12">
                        <textarea class="form-control"></textarea>
                      </div>
                    </div>
                    <div class="form-group row mb-4"/>
                      <div class="col-md-12">
                        <input type="submit" value="Save" class="btn btn-primary" /> 
                        <input type="reset" value="Reset" class="btn btn-danger" />
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="my-4">
          <div class="card card-default">
            <div class="card-header">
              Data
            </div>
            <div class="card-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Act</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}