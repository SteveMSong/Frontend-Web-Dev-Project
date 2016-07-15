var MarkDown = React.createClass({
    changeValue:function(e){
        this.setState({value: e.target.value});
    },
    getInitialState:function(){
        return{
            value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Steve Song](https://freecodecamp.com/SteveMSong)*'
        }
    },

    rawMarkup: function(value) {
      var rawMarkup = marked(value, {sanitize: true});
      return { __html: rawMarkup };
    },
    render: function(){
      return (
        <div className="container-fluid">
            <div className="row">
                <h1 id='header' className='text-center'>Markdown Previewer</h1>
                <div className="col-sm-6">
                    <textarea onChange={this.changeValue}>{this.state.value}</textarea>
                </div>
                <div className="col-sm-6">
                    <span dangerouslySetInnerHTML={this.rawMarkup(this.state.value)} />
                </div>
            </div>
        </div>         
      );
    }
});

ReactDOM.render(
    <MarkDown />,
    document.getElementById('markdown')
);
 
