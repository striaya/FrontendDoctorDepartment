export default function Navbar(){
    return(
        <div class="container my-4">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-xs-12">
                    <div class="card card-info">
                        <div class="card-header">
                            Input Doctor's Schedules
                        </div>
                        <div class="card-body">
                            <div class="form-body">
                                <form>
                                    <div class="form-group row mb-4">
                                        <label class="col-md-4 col-sm-12 col-xs-12">
                                            Doctor ID
                                        </label>
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <input class="form-control"/>
                                        </div>
                                    </div>
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
                                            Date
                                        </label>
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <input class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-4">
                                        <label class="col-md-4 col-sm-12 col-xs-12">
                                            Start
                                        </label>
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <input class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-4">
                                        <label class="col-md-4 col-sm-12 col-xs-12">
                                            End
                                        </label>
                                        <div class="col-md-8 col-sm-12 col-xs-12">
                                            <input class="form-control"/>
                                        </div>
                                    </div>
                                    <div class="form-group row mb-4">
                                        <div class="col-md-12">
                                            <input type="submit" value="Save" class="btn btn-primary"/>
                                            <input type="reset" value="Reset" class="btn btn-danger"/>
                                        </div>
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
                                    <th>
                                        
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}