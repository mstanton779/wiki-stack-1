const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <ul class="list-unstyled">
    <ul>
      ${pages.map(page => html`
      <div class='article-item'>
          <li>
            <span class="article-position">${page.id}. ▲</span>
            <a href="/wiki/${page.slug}">${page.title}</a>
            <small>(by [authorTBD])</small>
          </li>
      </div>`
      )}
    </ul>
  </ul>`);