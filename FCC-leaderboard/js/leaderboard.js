var Leaderboard = React.createClass({
  getInitialState: function() {
    return {camper: [], recent: 'highlight', alltime: ''}
  },
  componentDidMount: function() {
    this.recent();
  },
  recent: function() {
    $.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent', function(data) {
      this.setState({camper: data, recent: 'highlight', alltime: ''});
    }.bind(this));
  },
  alltime: function() {
    $.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime', function(data) {
      this.setState({camper: data, recent: '', alltime: 'highlight'});
    }.bind(this));
  },
  render: function(){
    var leadergroup = this.state.camper.map(function(camper,index){
        return(
            <LeaderBlock key={index} rank={index+1} image={camper.img} name={camper.username} recent={camper.recent} alltime={camper.alltime} />
          );
    });
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  <h1 id="header" className="text-center">Free Code Camp Leaderboard</h1>
                  <table className="table table-striped well table-bordered">
                      <thead>
                          <tr>
                              <th className="text-center">#</th>
                              <th className="text-center">Camper Name</th>
                              <th onClick={this.recent} id="recent-header" className={"text-center "+this.state.recent}>Points in the past 30 days</th>
                              <th onClick={this.alltime} id="alltime-header" className={"text-center "+this.state.alltime}>All time points</th>
                          </tr>
                      </thead>
                      <tbody id="table-body">
                          {leadergroup}
                      </tbody>
                  </table>               
              </div>
              <div className="col-md-2"></div>
          </div>
      </div>    
    );
  }
});

var LeaderBlock = React.createClass({
  render: function(){
    return(        
      <tr>
        <td className="text-center">{this.props.rank}</td>
        <td><a href={"http://freecodecamp.com/"+this.props.name} target="_blank"><img className="img-circle" src={this.props.image}/>{this.props.name}</a></td>
        <td className="text-center">{this.props.recent}</td>
        <td className="text-center">{this.props.alltime}</td>
      </tr>
    );
  }
});

ReactDOM.render(<Leaderboard />,document.getElementById('leaderboard'));


