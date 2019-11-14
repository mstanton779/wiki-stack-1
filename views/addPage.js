const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
    <label for="name" class="col-sm-2 control-label">Author</label>
    <input id="name" name="name" type="text" class="form-control" />
    </div>

    <div class="form-group">
    <label for="email" class="col-sm-2 control-label">Email Address</label>
    <input id="email" name="email" type="text" class="form-control" />
    </div>

    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
    <label for="content" class="col-sm-2 control-label">Content</label>
    <input id="content" name="content" type="textarea" class="form-control" />
    </div>
    
    <div class="form-group">
    <label for="pageStatus" class="col-sm-2 control-label">Page Status (Checked = Open)</label>
    <input id="pageStatus" name="pageStatus" type="checkbox" class="form-control" checked>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);