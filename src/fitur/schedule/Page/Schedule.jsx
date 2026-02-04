export default function Navbar(){
    return(
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="card card-info">
                        <div className="card-header">
                            Input Doctor's Schedules
                        </div>
                        <div className="card-body">
                            <div className="form-body">
                                <form>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Doctor ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Department ID
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Date
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            Start
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-md-4 col-sm-12 col-xs-12">
                                            End
                                        </label>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <input className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-md-12">
                                            <input type="submit" value="Save" className="btn btn-primary"/>
                                            <input type="reset" value="Reset" className="btn btn-danger"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="card card-default">
                    <div className="card-header">
                        Data
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
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